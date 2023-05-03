import { NgModule } from '@angular/core';
import { WithLoadingPipe } from '../pipes/loading.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
declarations: [WithLoadingPipe],
imports: [CommonModule],
exports: [WithLoadingPipe],
})

export class PipesModule {}