define(de[2970], he([1, 0, 13, 47]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Scc = void 0);
			class w {
				constructor(C = (0, i.$9g)(), d, m, r, u, a, h, c, n, g) {
					(this.uuid = C),
						(this.uri = d),
						(this.createdAt = m),
						(this.callSiteDecorationId = r),
						(this.implementationDecorationId = u),
						(this.currentImplementationIndex = a),
						(this.showingImplementationIndex = h),
						(this.showingIndices = c),
						(this.ignorePotentialDeletes = n),
						(this.implementations = g),
						(this.a = (0, t.createSignal)(void 0)),
						(this.b = (0, t.createSignal)(!1));
				}
				getPrompt() {
					return (0, t.untrack)(() => this.a[0]());
				}
				getPromptReactive() {
					return this.a[0]();
				}
				setPrompt(C) {
					this.a[1](C);
				}
				shouldShowDiff() {
					return (0, t.untrack)(() => this.b[0]());
				}
				shouldShowDiffReactive() {
					return this.b[0]();
				}
				setShouldShowDiff(...C) {
					this.b[1](...C);
				}
			}
			e.$Scc = w;
		}),
		