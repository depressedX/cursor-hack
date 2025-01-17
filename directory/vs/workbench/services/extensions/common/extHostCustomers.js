import '../../../../../require.js';
import '../../../../../exports.js';
define(de[101], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ExtHostCustomersRegistry = void 0),
				(e.$tmc = t),
				(e.$umc = i);
			function t(C) {
				return function (d) {
					E.INSTANCE.registerNamedCustomer(C, d);
				};
			}
			function i(C) {
				E.INSTANCE.registerCustomer(C);
			}
			var w;
			(function (C) {
				function d() {
					return E.INSTANCE.getNamedCustomers();
				}
				C.getNamedCustomers = d;
				function m() {
					return E.INSTANCE.getCustomers();
				}
				C.getCustomers = m;
			})(w || (e.ExtHostCustomersRegistry = w = {}));
			class E {
				static {
					this.INSTANCE = new E();
				}
				constructor() {
					(this.a = []), (this.b = []);
				}
				registerNamedCustomer(d, m) {
					const r = [d, m];
					this.a.push(r);
				}
				getNamedCustomers() {
					return this.a;
				}
				registerCustomer(d) {
					this.b.push(d);
				}
				getCustomers() {
					return this.b;
				}
			}
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	