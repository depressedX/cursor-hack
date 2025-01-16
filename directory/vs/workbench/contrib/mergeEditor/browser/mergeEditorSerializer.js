define(de[3690], he([1, 0, 29, 197, 711]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hSc = void 0);
			class E {
				canSerialize() {
					return !0;
				}
				serialize(d) {
					return JSON.stringify(this.toJSON(d));
				}
				toJSON(d) {
					return {
						base: d.base,
						input1: d.input1,
						input2: d.input2,
						result: d.result,
					};
				}
				deserialize(d, m) {
					try {
						const r = (0, i.$ii)(m);
						return d.createInstance(
							w.$Enc,
							r.base,
							new w.$Dnc(
								r.input1.uri,
								r.input1.title,
								r.input1.detail,
								r.input1.description,
							),
							new w.$Dnc(
								r.input2.uri,
								r.input2.title,
								r.input2.detail,
								r.input2.description,
							),
							r.result,
						);
					} catch (r) {
						(0, t.$4)(r);
						return;
					}
				}
			}
			e.$hSc = E;
		}),
		