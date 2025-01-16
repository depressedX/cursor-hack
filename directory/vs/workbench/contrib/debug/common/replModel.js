define(
		de[843],
		he([1, 0, 6, 111, 28, 47, 4, 300]),
		function (ce, e, t, i, w, E, C, d) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bIc = e.$aIc = e.$_Hc = e.$$Hc = e.$0Hc = e.$9Hc = e.$8Hc = void 0),
				(i = xi(i)),
				(C = mt(C));
			const m = 1e4;
			let r = 0;
			const u = () => `topReplElement:${r++}`;
			class a {
				constructor(s, l, y, $, v, S) {
					(this.session = s),
						(this.c = l),
						(this.value = y),
						(this.severity = $),
						(this.sourceData = v),
						(this.expression = S),
						(this.a = 1),
						(this.b = new t.$re());
				}
				toString(s = !1) {
					let l = this.value;
					for (let $ = 1; $ < this.count; $++)
						l +=
							(l.endsWith(`
`)
								? ""
								: `
`) + this.value;
					const y =
						this.sourceData && s ? ` ${this.sourceData.source.name}` : "";
					return l + y;
				}
				getId() {
					return this.c;
				}
				getChildren() {
					return this.expression?.getChildren() || Promise.resolve([]);
				}
				set count(s) {
					(this.a = s), this.b.fire();
				}
				get count() {
					return this.a;
				}
				get onDidChangeCount() {
					return this.b.event;
				}
				get hasChildren() {
					return !!this.expression?.hasChildren;
				}
			}
			e.$8Hc = a;
			class h {
				constructor(s, l, y) {
					(this.expression = s),
						(this.severity = l),
						(this.sourceData = y),
						(this.a = (0, E.$9g)()),
						(this.hasChildren = s.hasChildren);
				}
				getChildren() {
					return this.expression.getChildren();
				}
				toString() {
					return this.expression.toString();
				}
				getId() {
					return this.a;
				}
			}
			e.$9Hc = h;
			class c {
				static {
					this.a = 1e3;
				}
				constructor(s, l, y, $, v) {
					(this.b = s),
						(this.name = l),
						(this.valueObj = y),
						(this.sourceData = $),
						(this.annotation = v);
				}
				getId() {
					return this.b;
				}
				get value() {
					return this.valueObj === null
						? "null"
						: Array.isArray(this.valueObj)
							? `Array[${this.valueObj.length}]`
							: (0, w.$ng)(this.valueObj)
								? "Object"
								: (0, w.$lg)(this.valueObj)
									? `"${this.valueObj}"`
									: String(this.valueObj) || "";
				}
				get hasChildren() {
					return (
						(Array.isArray(this.valueObj) && this.valueObj.length > 0) ||
						((0, w.$ng)(this.valueObj) &&
							Object.getOwnPropertyNames(this.valueObj).length > 0)
					);
				}
				evaluateLazy() {
					throw new Error("Method not implemented.");
				}
				getChildren() {
					let s = [];
					return (
						Array.isArray(this.valueObj)
							? (s = this.valueObj
									.slice(0, c.a)
									.map((l, y) => new c(`${this.b}:${y}`, String(y), l)))
							: (0, w.$ng)(this.valueObj) &&
								(s = Object.getOwnPropertyNames(this.valueObj)
									.slice(0, c.a)
									.map((l, y) => new c(`${this.b}:${y}`, l, this.valueObj[l]))),
						Promise.resolve(s)
					);
				}
				toString() {
					return `${this.name}
${this.value}`;
				}
			}
			e.$0Hc = c;
			class n {
				constructor(s) {
					(this.value = s), (this.a = (0, E.$9g)());
				}
				toString() {
					return this.value;
				}
				getId() {
					return this.a;
				}
			}
			e.$$Hc = n;
			class g extends d.$H3 {
				get available() {
					return this.u;
				}
				constructor(s) {
					super(void 0, void 0, 0, (0, E.$9g)()),
						(this.originalExpression = s),
						(this.u = !0);
				}
				async evaluateExpression(s, l, y, $) {
					const v = await super.evaluateExpression(s, l, y, $);
					return (this.u = v), v;
				}
				toString() {
					return `${this.value}`;
				}
			}
			e.$_Hc = g;
			class p {
				static {
					this.COUNTER = 0;
				}
				constructor(s, l, y) {
					(this.name = s),
						(this.autoExpand = l),
						(this.sourceData = y),
						(this.a = []),
						(this.c = !1),
						(this.b = `replGroup:${p.COUNTER++}`);
				}
				get hasChildren() {
					return !0;
				}
				getId() {
					return this.b;
				}
				toString(s = !1) {
					const l =
						s && this.sourceData ? ` ${this.sourceData.source.name}` : "";
					return this.name + l;
				}
				addChild(s) {
					const l = this.a.length ? this.a[this.a.length - 1] : void 0;
					l instanceof p && !l.hasEnded ? l.addChild(s) : this.a.push(s);
				}
				getChildren() {
					return this.a;
				}
				end() {
					const s = this.a.length ? this.a[this.a.length - 1] : void 0;
					s instanceof p && !s.hasEnded ? s.end() : (this.c = !0);
				}
				get hasEnded() {
					return this.c;
				}
			}
			e.$aIc = p;
			function o(b, s) {
				return !b && !s
					? !0
					: b && s
						? b.column === s.column &&
							b.lineNumber === s.lineNumber &&
							b.source.uri.toString() === s.source.uri.toString()
						: !1;
			}
			class f {
				constructor(s) {
					(this.c = s),
						(this.a = []),
						(this.b = new t.$re()),
						(this.onDidChangeElements = this.b.event);
				}
				getReplElements() {
					return this.a;
				}
				async addReplExpression(s, l, y) {
					this.d(new n(y));
					const $ = new g(y);
					await $.evaluateExpression(y, s, l, "repl"), this.d($);
				}
				appendToRepl(s, { output: l, expression: y, sev: $, source: v }) {
					const S = "\x1B[2J",
						I = l.lastIndexOf(S);
					if (
						(I !== -1 &&
							(this.removeReplExpressions(),
							this.appendToRepl(s, {
								output: C.localize(5905, null),
								sev: i.default.Ignore,
							}),
							(l = l.substring(I + S.length))),
						y)
					) {
						this.d(l ? new a(s, u(), l, $, v, y) : new h(y, $, v));
						return;
					}
					const T = this.a.length ? this.a[this.a.length - 1] : void 0;
					if (T instanceof a && T.severity === $) {
						const k = this.c.getValue("debug");
						if (
							T.value === l &&
							o(T.sourceData, v) &&
							k.console.collapseIdenticalLines
						) {
							T.count++;
							return;
						}
						if (
							!T.value.endsWith(`
`) &&
							!T.value.endsWith(`\r
`) &&
							T.count === 1
						) {
							(this.a[this.a.length - 1] = new a(s, u(), T.value + l, $, v)),
								this.b.fire(void 0);
							return;
						}
					}
					const P = new a(s, u(), l, $, v);
					this.d(P);
				}
				startGroup(s, l, y) {
					const $ = new p(s, l, y);
					this.d($);
				}
				endGroup() {
					const s = this.a[this.a.length - 1];
					s instanceof p && s.end();
				}
				d(s) {
					const l = this.a.length ? this.a[this.a.length - 1] : void 0;
					l instanceof p && !l.hasEnded
						? l.addChild(s)
						: (this.a.push(s),
							this.a.length > m && this.a.splice(0, this.a.length - m)),
						this.b.fire(s);
				}
				removeReplExpressions() {
					this.a.length > 0 && ((this.a = []), this.b.fire(void 0));
				}
				clone() {
					const s = new f(this.c);
					return (s.a = this.a.slice()), s;
				}
			}
			e.$bIc = f;
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	