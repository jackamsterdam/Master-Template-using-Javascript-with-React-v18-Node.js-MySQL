import Joi from "joi";

class ProductModel {

    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
        this.imageName = product.imageName
        this.image = product.image 
    }

     static postSchema = Joi.object({
        id: Joi.forbidden(), ///Not suppsoed to send an id in  body (rest archeticutre)
        name: Joi.string().required().min(2).max(100), 
        price: Joi.number().required().min(0).max(1000),
        stock: Joi.number().required().integer().min(2).max(10000),
        // orderDate: Joi.date().iso().greater(new Date()).required(),
        image: Joi.object().optional(),  //object!
        imageName: Joi.string().optional()
    })

    validatePost() {
        const result = ProductModel.postSchema.validate(this, {abortEarly: false})
        return result.error?.message 
    }

     static putSchema = Joi.object({
        id: Joi.number().required().integer().min(1),// because the db generates an id frm 1 up
        name: Joi.string().required().min(2).max(100),
        price: Joi.number().required().min(2).max(1000),
        stock: Joi.number().required().integer().min(2).max(10000),
        image: Joi.object().optional(),  //object!
        imageName: Joi.string().optional()
    })

    validatePut() {
        const result = ProductModel.putSchema.validate(this, {abortEarly: false})
        return result.error?.message
    }

     static patchSchema = Joi.object({
        id: Joi.number().required().integer().min(1),// cause the db generates an id frm 1 up
        name: Joi.string().optional().min(2).max(100),   //!optional
        price: Joi.number().optional().min(2).max(1000), //!optional
        stock: Joi.number().optional().integer().min(2).max(10000), //!optional
        image: Joi.object().optional(),  //object!
        imageName: Joi.string().optional()          //!optional
    })

    validatePatch() {  
        const result = ProductModel.patchSchema.validate(this, {abortEarly: false})
        return result.error?.message
    }
}

export default ProductModel;