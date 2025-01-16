define(de[1396], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.InternalFieldList = void 0);
			class t {
				constructor(w, E) {
					(this._fields = w), (this._normalizer = E);
				}
				findJsonName(w) {
					if (!this.jsonNames) {
						const E = {};
						for (const C of this.list()) E[C.jsonName] = E[C.name] = C;
						this.jsonNames = E;
					}
					return this.jsonNames[w];
				}
				find(w) {
					if (!this.numbers) {
						const E = {};
						for (const C of this.list()) E[C.no] = C;
						this.numbers = E;
					}
					return this.numbers[w];
				}
				list() {
					return (
						this.all || (this.all = this._normalizer(this._fields)), this.all
					);
				}
				byNumber() {
					return (
						this.numbersAsc ||
							(this.numbersAsc = this.list()
								.concat()
								.sort((w, E) => w.no - E.no)),
						this.numbersAsc
					);
				}
				byMember() {
					if (!this.members) {
						this.members = [];
						const w = this.members;
						let E;
						for (const C of this.list())
							C.oneof ? C.oneof !== E && ((E = C.oneof), w.push(E)) : w.push(C);
					}
					return this.members;
				}
			}
			e.InternalFieldList = t;
		}),
		