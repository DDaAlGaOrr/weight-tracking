import {
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common'

@Controller('product')
class ProductController {
    //option 1 get params
    @Get('params-1')
    getAllProducts(@Query() query: any) {
        console.log(query)
        return 'get all products'
    }
    // option 2 get params
    @Get('params-2')
    getProducts(
        @Query('page') _page: string,
        @Query('perPage') _perPage: string,
        @Query('search') search: string,
        @Query() query: string,
    ) {
        console.log(query)
        const page = parseInt(_page, 10)
        const perPage = parseInt(_perPage, 10)
        const metadata = { page, perPage, search }
        return {
            message: 'array of products',
            data: [],
            metadata,
        }
    }

    @Get(':productID/category/:categoryID')
    getProductById(
        @Param('productID') productID: number,
        @Param('categoryID') categoryID: string,
    ) {
        return {
            message: 'get product by id',
            data: {
                productID: Number(productID),
                categoryID,
            },
        }
    }

    @Post()
    createNewProduct() {
        return 'save new product'
    }
    @Delete()
    DeleteProduct() {
        return 'Delete product'
    }
    @Put()
    updateProduct() {
        return 'update product'
    }
}

export default ProductController
