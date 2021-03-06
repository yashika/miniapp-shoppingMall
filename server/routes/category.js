import{
    controller,
    get,
    post
}from '../decorator/router'
import * as errors from '../lib/errors'
import Result from '../lib/result'
import { getCategorys,getChildrens  } from '../service/category'

@controller('/api/v1/category')
export class ProductController{
    @get('/')
    async getCategorys(ctx,next){
        const data =await getCategorys()
        ctx.body = new Result(errors.ok,data)
    }

    @get('/:_id')
    async getChildrens(ctx,next){
        const { _id } =ctx.params
        const { size,page,price } =ctx.query
        let param = {
            _id,
            size,
            page,
            price
        }
        if(!_id){

        }
        const data =await getChildrens(param)
        ctx.body = new Result(errors.ok,data)
    }
}