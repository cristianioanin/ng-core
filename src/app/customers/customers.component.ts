import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html',
	styleUrls: [ './customers.component.css' ]
})
export class CustomersComponent implements OnInit {
	title: string;
	people: Customer[];

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.title = 'Customers';
		this.dataService.getCustomers().subscribe((customers: Customer[]) => (this.people = customers));
	}
}
