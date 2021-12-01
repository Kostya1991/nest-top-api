import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {

	@Post('create')
	public async create(@Body() dto: Omit<ReviewModel, '_id'>) {

	}

	@Get('byProduct/:productId')
	public async getByProduct(@Param('productId') productId: string) {

	}

	@Delete(':id')
	public async delete(@Param('id') id: string) {

	}
}
