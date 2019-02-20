import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
	declarations: [ OrdersComponent ],
	imports: [ CommonModule, SharedModule, FormsModule, OrdersRoutingModule ]
})
export class OrdersModule {}
