define(de[196], he([1, 0, 29, 289, 17, 214]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sL = e.$rL = void 0);
			class C {
				static fromRange(r) {
					return new C(r.startLineNumber, r.endLineNumber);
				}
				static fromRangeInclusive(r) {
					return new C(r.startLineNumber, r.endLineNumber + 1);
				}
				static subtract(r, u) {
					return u
						? r.startLineNumber < u.startLineNumber &&
							u.endLineNumberExclusive < r.endLineNumberExclusive
							? [
									new C(r.startLineNumber, u.startLineNumber),
									new C(u.endLineNumberExclusive, r.endLineNumberExclusive),
								]
							: u.startLineNumber <= r.startLineNumber &&
									r.endLineNumberExclusive <= u.endLineNumberExclusive
								? []
								: u.endLineNumberExclusive < r.endLineNumberExclusive
									? [
											new C(
												Math.max(u.endLineNumberExclusive, r.startLineNumber),
												r.endLineNumberExclusive,
											),
										]
									: [
											new C(
												r.startLineNumber,
												Math.min(u.startLineNumber, r.endLineNumberExclusive),
											),
										]
						: [r];
				}
				static joinMany(r) {
					if (r.length === 0) return [];
					let u = new d(r[0].slice());
					for (let a = 1; a < r.length; a++)
						u = u.getUnion(new d(r[a].slice()));
					return u.ranges;
				}
				static join(r) {
					if (r.length === 0) throw new t.$gb("lineRanges cannot be empty");
					let u = r[0].startLineNumber,
						a = r[0].endLineNumberExclusive;
					for (let h = 1; h < r.length; h++)
						(u = Math.min(u, r[h].startLineNumber)),
							(a = Math.max(a, r[h].endLineNumberExclusive));
					return new C(u, a);
				}
				static ofLength(r, u) {
					return new C(r, r + u);
				}
				static deserialize(r) {
					return new C(r[0], r[1]);
				}
				constructor(r, u) {
					if (r > u)
						throw new t.$gb(
							`startLineNumber ${r} cannot be after endLineNumberExclusive ${u}`,
						);
					(this.startLineNumber = r), (this.endLineNumberExclusive = u);
				}
				contains(r) {
					return this.startLineNumber <= r && r < this.endLineNumberExclusive;
				}
				get isEmpty() {
					return this.startLineNumber === this.endLineNumberExclusive;
				}
				delta(r) {
					return new C(
						this.startLineNumber + r,
						this.endLineNumberExclusive + r,
					);
				}
				deltaLength(r) {
					return new C(this.startLineNumber, this.endLineNumberExclusive + r);
				}
				get length() {
					return this.endLineNumberExclusive - this.startLineNumber;
				}
				join(r) {
					return new C(
						Math.min(this.startLineNumber, r.startLineNumber),
						Math.max(this.endLineNumberExclusive, r.endLineNumberExclusive),
					);
				}
				toString() {
					return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
				}
				intersect(r) {
					const u = Math.max(this.startLineNumber, r.startLineNumber),
						a = Math.min(this.endLineNumberExclusive, r.endLineNumberExclusive);
					if (u <= a) return new C(u, a);
				}
				intersectsStrict(r) {
					return (
						this.startLineNumber < r.endLineNumberExclusive &&
						r.startLineNumber < this.endLineNumberExclusive
					);
				}
				overlapOrTouch(r) {
					return (
						this.startLineNumber <= r.endLineNumberExclusive &&
						r.startLineNumber <= this.endLineNumberExclusive
					);
				}
				equals(r) {
					return (
						this.startLineNumber === r.startLineNumber &&
						this.endLineNumberExclusive === r.endLineNumberExclusive
					);
				}
				toInclusiveRange() {
					return this.isEmpty
						? null
						: new w.$iL(
								this.startLineNumber,
								1,
								this.endLineNumberExclusive - 1,
								Number.MAX_SAFE_INTEGER,
							);
				}
				toExclusiveRange() {
					return new w.$iL(
						this.startLineNumber,
						1,
						this.endLineNumberExclusive,
						1,
					);
				}
				mapToLineArray(r) {
					const u = [];
					for (
						let a = this.startLineNumber;
						a < this.endLineNumberExclusive;
						a++
					)
						u.push(r(a));
					return u;
				}
				forEach(r) {
					for (
						let u = this.startLineNumber;
						u < this.endLineNumberExclusive;
						u++
					)
						r(u);
				}
				serialize() {
					return [this.startLineNumber, this.endLineNumberExclusive];
				}
				includes(r) {
					return this.startLineNumber <= r && r < this.endLineNumberExclusive;
				}
				toOffsetRange() {
					return new i.$pL(
						this.startLineNumber - 1,
						this.endLineNumberExclusive - 1,
					);
				}
			}
			e.$rL = C;
			class d {
				constructor(r = []) {
					this.c = r;
				}
				get ranges() {
					return this.c;
				}
				addRange(r) {
					if (r.length === 0) return;
					const u = (0, E.$ob)(
							this.c,
							(h) => h.endLineNumberExclusive >= r.startLineNumber,
						),
						a =
							(0, E.$mb)(
								this.c,
								(h) => h.startLineNumber <= r.endLineNumberExclusive,
							) + 1;
					if (u === a) this.c.splice(u, 0, r);
					else if (u === a - 1) {
						const h = this.c[u];
						this.c[u] = h.join(r);
					} else {
						const h = this.c[u].join(this.c[a - 1]).join(r);
						this.c.splice(u, a - u, h);
					}
				}
				contains(r) {
					const u = (0, E.$lb)(this.c, (a) => a.startLineNumber <= r);
					return !!u && u.endLineNumberExclusive > r;
				}
				intersects(r) {
					const u = (0, E.$lb)(
						this.c,
						(a) => a.startLineNumber < r.endLineNumberExclusive,
					);
					return !!u && u.endLineNumberExclusive > r.startLineNumber;
				}
				getUnion(r) {
					if (this.c.length === 0) return r;
					if (r.c.length === 0) return this;
					const u = [];
					let a = 0,
						h = 0,
						c = null;
					for (; a < this.c.length || h < r.c.length; ) {
						let n = null;
						if (a < this.c.length && h < r.c.length) {
							const g = this.c[a],
								p = r.c[h];
							g.startLineNumber < p.startLineNumber
								? ((n = g), a++)
								: ((n = p), h++);
						} else
							a < this.c.length ? ((n = this.c[a]), a++) : ((n = r.c[h]), h++);
						c === null
							? (c = n)
							: c.endLineNumberExclusive >= n.startLineNumber
								? (c = new C(
										c.startLineNumber,
										Math.max(
											c.endLineNumberExclusive,
											n.endLineNumberExclusive,
										),
									))
								: (u.push(c), (c = n));
					}
					return c !== null && u.push(c), new d(u);
				}
				subtractFrom(r) {
					const u = (0, E.$ob)(
							this.c,
							(n) => n.endLineNumberExclusive >= r.startLineNumber,
						),
						a =
							(0, E.$mb)(
								this.c,
								(n) => n.startLineNumber <= r.endLineNumberExclusive,
							) + 1;
					if (u === a) return new d([r]);
					const h = [];
					let c = r.startLineNumber;
					for (let n = u; n < a; n++) {
						const g = this.c[n];
						g.startLineNumber > c && h.push(new C(c, g.startLineNumber)),
							(c = g.endLineNumberExclusive);
					}
					return (
						c < r.endLineNumberExclusive &&
							h.push(new C(c, r.endLineNumberExclusive)),
						new d(h)
					);
				}
				toString() {
					return this.c.map((r) => r.toString()).join(", ");
				}
				getIntersection(r) {
					const u = [];
					let a = 0,
						h = 0;
					for (; a < this.c.length && h < r.c.length; ) {
						const c = this.c[a],
							n = r.c[h],
							g = c.intersect(n);
						g && !g.isEmpty && u.push(g),
							c.endLineNumberExclusive < n.endLineNumberExclusive ? a++ : h++;
					}
					return new d(u);
				}
				getWithDelta(r) {
					return new d(this.c.map((u) => u.delta(r)));
				}
			}
			e.$sL = d;
		}),
		