import {
    Controller,
    Get,
    Header,
    HttpCode,
    HttpStatus,
    Patch,
    Post,
    Res,
} from '@nestjs/common'
import { Response } from 'express'
import { json } from 'stream/consumers'

@Controller()
class WeightController {
    elements = [
        {
            user: 'Daniel',
            type: 'super',
        },
    ]

    @Get()
    getAll() {
        return {
            message: 'Success',
            data: this.elements,
        }
    }

    @Post()
    createNew() {
        this.elements.push({ user: 'Alejandro', type: 'super' })
        return this.elements
    }

    @Post('httpCode')
    @HttpCode(HttpStatus.CREATED)
    createWithHttpCode() {
        this.elements.push({ user: 'Albert', type: 'super' })
        return
    }

    @Patch('httpCode')
    @HttpCode(HttpStatus.OK)
    editElement() {
        this.elements[0] = { user: 'Alejandro', type: 'normal' }
        console.log('Se a editado el primer elemento')
        return this.elements[0]
    }

    @Get('headerCustom')
    @HttpCode(HttpStatus.OK)
    @Header('My-header', 'value header')
    getData() {
        return this.elements
    }
    //no decoradores
    @Get('useSpecificLibrary')
    useLibrary(@Res() res: Response) {
        return res
            .status(HttpStatus.OK)
            .header('my-Header-2', 'vale head')
            .jsonp('libreria especifica')
    }
    // combined response decorators and library specific
    @Get('combinedResponse')
    combineResponse(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.NOT_MODIFIED)
        res.header('header-3', 'value header 3')
        return res.json('combined answer, review headers')
    }
}

export default WeightController
