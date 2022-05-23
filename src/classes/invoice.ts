// Here, we are implementing our interface 'HasFormatter' - which stipulates that our ModernInvoice 1) should have a method named 'format' that 2) returns a string
import { HasFormatter } from "../interfaces/HasFormatter";

export class ModernInvoice implements HasFormatter {
	// Use 'implements' to tie the class to a specific interface
	constructor(
		readonly client: string,
		readonly details: string,
		public amount: number
	) {}

	format() {
		return `${this.client} owes $${this.amount} for ${this.details}`;
	}
}
