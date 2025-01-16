define(de[3132], he([1, 0, 584, 82]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$d9b = void 0);
			var w;
			(function (C) {
				(C[(C.Created = 1)] = "Created"),
					(C[(C.Loading = 2)] = "Loading"),
					(C[(C.Loaded = 3)] = "Loaded"),
					(C[(C.Errored = 4)] = "Errored"),
					(C[(C.Disposed = 5)] = "Disposed");
			})(w || (w = {}));
			class E {
				get cacheKey() {
					return this.c === w.Loaded || !this.h ? this.a : this.h.cacheKey;
				}
				get isLoaded() {
					const d = this.c === w.Loaded;
					return d || !this.h ? d : this.h.isLoaded;
				}
				get isUpdating() {
					const d = this.c === w.Loading;
					return d || !this.h ? d : this.h.isUpdating;
				}
				constructor(d, m, r, u) {
					if (
						((this.e = d),
						(this.f = m),
						(this.g = r),
						(this.h = u),
						(this.a = t.$Sdb.nextId()),
						(this.b = this.e(this.a)),
						(this.c = w.Created),
						this.h)
					) {
						const a = Object.assign({}, this.b, { cacheKey: null }),
							h = Object.assign({}, this.h.b, { cacheKey: null });
						(0, i.$zo)(a, h) || (this.h.dispose(), (this.h = void 0));
					}
				}
				load() {
					return this.isUpdating
						? this
						: ((this.c = w.Loading),
							(this.d = (async () => {
								try {
									await this.f(this.b),
										(this.c = w.Loaded),
										this.h && (this.h.dispose(), (this.h = void 0));
								} catch (d) {
									throw ((this.c = w.Errored), d);
								}
							})()),
							this);
				}
				dispose() {
					this.d
						? (async () => {
								try {
									await this.d;
								} catch {}
								(this.c = w.Disposed), this.g(this.a);
							})()
						: (this.c = w.Disposed),
						this.h && (this.h.dispose(), (this.h = void 0));
				}
			}
			e.$d9b = E;
		}),
		define(
			de[3133],
			he([1, 0, 3, 17, 64, 1195, 543]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ENc = void 0);
				class d extends t.$1c {
					constructor(r, u, a) {
						super(),
							(this._source = r),
							(this.b = u),
							(this.c = a),
							(this.a = void 0);
					}
					f(r) {
						const u = r.getLineCount();
						return new i.$iL(1, 1, u, this.g(r, u));
					}
					g(r, u) {
						if (u < 1 || u > r.getLineCount())
							throw new Error("Illegal value for lineNumber");
						return r.getLineLength(u) + 1;
					}
					get inputTextBuffer() {
						if (!this.b) {
							const r = new E.$0U();
							r.acceptChunk(this._source);
							const u = r.finish(!0),
								{ textBuffer: a, disposable: h } = u.create(
									w.DefaultEndOfLine.LF,
								);
							(this.b = a), this.D(h);
						}
						return this.b;
					}
					get outputTextBuffers() {
						return (
							this.a ||
								(this.a = this.c.map((r) => {
									const u = new E.$0U();
									u.acceptChunk(r);
									const a = u.finish(!0),
										{ textBuffer: h, disposable: c } = a.create(
											w.DefaultEndOfLine.LF,
										);
									return this.D(c), h;
								})),
							this.a
						);
					}
					findInInputs(r) {
						const a = new C.$XU(r, !1, !1, null).parseSearchRequest();
						if (!a) return [];
						const h = this.f(this.inputTextBuffer);
						return this.inputTextBuffer.findMatchesLineByLine(h, a, !0, 5e3);
					}
					findInOutputs(r) {
						const a = new C.$XU(r, !1, !1, null).parseSearchRequest();
						return a
							? this.outputTextBuffers
									.map((h) => {
										const c = h.findMatchesLineByLine(this.f(h), a, !0, 5e3);
										if (c.length !== 0) return { textBuffer: h, matches: c };
									})
									.filter((h) => !!h)
							: [];
					}
				}
				e.$ENc = d;
			},
		),
		