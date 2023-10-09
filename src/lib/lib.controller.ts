import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibService } from './lib.service';
import { CreateLibDto } from './dto/create-lib.dto';
import { UpdateLibDto } from './dto/update-lib.dto';

@Controller('lib')
export class LibController {
  constructor(private readonly libService: LibService) {}

  @Post()
  create(@Body() createLibDto: CreateLibDto) {
    return this.libService.create(createLibDto);
  }

  @Get()
  findAll() {
    return this.libService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibDto: UpdateLibDto) {
    return this.libService.update(+id, updateLibDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libService.remove(+id);
  }
}
