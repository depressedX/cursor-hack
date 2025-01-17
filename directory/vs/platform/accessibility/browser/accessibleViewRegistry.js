import '../../../../require.js';
import '../../../../exports.js';
define(de[412], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Whc = void 0),
				(e.$Whc = new (class {
					constructor() {
						this._implementations = [];
					}
					register(i) {
						return (
							this._implementations.push(i),
							{
								dispose: () => {
									const w = this._implementations.indexOf(i);
									w !== -1 && this._implementations.splice(w, 1);
								},
							}
						);
					}
					getImplementations() {
						return this._implementations;
					}
				})());
		}),
		