// Here, we are implementing our interface 'HasFormatter' - which stipulates that our ModernInvoice 1) should have a method named 'format' that 2) returns a string
import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
	// Use 'implements' to tie the class to a specific interface
	constructor(
		readonly recipient: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.recipient} is owed $${this.amount} for ${this.details}`;
	}
}
