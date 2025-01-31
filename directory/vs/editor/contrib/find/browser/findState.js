import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/core/range.js';
import './findModel.js';
define(de[786], he([1, 0, 6, 3, 17, 547]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*range*/,
 E /*findModel*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$l2b = e.FindOptionOverride = void 0);
			var C;
			(function (r) {
				(r[(r.NotSet = 0)] = "NotSet"),
					(r[(r.True = 1)] = "True"),
					(r[(r.False = 2)] = "False");
			})(C || (e.FindOptionOverride = C = {}));
			function d(r, u) {
				return r === C.True ? !0 : r === C.False ? !1 : u;
			}
			class m extends i.$1c {
				get searchString() {
					return this.a;
				}
				get replaceString() {
					return this.b;
				}
				get isRevealed() {
					return this.c;
				}
				get isReplaceRevealed() {
					return this.f;
				}
				get isRegex() {
					return d(this.h, this.g);
				}
				get wholeWord() {
					return d(this.m, this.j);
				}
				get matchCase() {
					return d(this.q, this.n);
				}
				get preserveCase() {
					return d(this.s, this.r);
				}
				get actualIsRegex() {
					return this.g;
				}
				get actualWholeWord() {
					return this.j;
				}
				get actualMatchCase() {
					return this.n;
				}
				get actualPreserveCase() {
					return this.r;
				}
				get searchScope() {
					return this.t;
				}
				get matchesPosition() {
					return this.u;
				}
				get matchesCount() {
					return this.w;
				}
				get currentMatch() {
					return this.y;
				}
				get isSearching() {
					return this.C;
				}
				get filters() {
					return this.F;
				}
				constructor() {
					super(),
						(this.G = this.D(new t.$re())),
						(this.onFindReplaceStateChange = this.G.event),
						(this.a = ""),
						(this.b = ""),
						(this.c = !1),
						(this.f = !1),
						(this.g = !1),
						(this.h = C.NotSet),
						(this.j = !1),
						(this.m = C.NotSet),
						(this.n = !1),
						(this.q = C.NotSet),
						(this.r = !1),
						(this.s = C.NotSet),
						(this.t = null),
						(this.u = 0),
						(this.w = 0),
						(this.y = null),
						(this.z = !0),
						(this.C = !1),
						(this.F = null);
				}
				changeMatchInfo(u, a, h) {
					const c = {
						moveCursor: !1,
						updateHistory: !1,
						searchString: !1,
						replaceString: !1,
						isRevealed: !1,
						isReplaceRevealed: !1,
						isRegex: !1,
						wholeWord: !1,
						matchCase: !1,
						preserveCase: !1,
						searchScope: !1,
						matchesPosition: !1,
						matchesCount: !1,
						currentMatch: !1,
						loop: !1,
						isSearching: !1,
						filters: !1,
					};
					let n = !1;
					a === 0 && (u = 0),
						u > a && (u = a),
						this.u !== u && ((this.u = u), (c.matchesPosition = !0), (n = !0)),
						this.w !== a && ((this.w = a), (c.matchesCount = !0), (n = !0)),
						typeof h < "u" &&
							(w.$iL.equalsRange(this.y, h) ||
								((this.y = h), (c.currentMatch = !0), (n = !0))),
						n && this.G.fire(c);
				}
				change(u, a, h = !0) {
					const c = {
						moveCursor: a,
						updateHistory: h,
						searchString: !1,
						replaceString: !1,
						isRevealed: !1,
						isReplaceRevealed: !1,
						isRegex: !1,
						wholeWord: !1,
						matchCase: !1,
						preserveCase: !1,
						searchScope: !1,
						matchesPosition: !1,
						matchesCount: !1,
						currentMatch: !1,
						loop: !1,
						isSearching: !1,
						filters: !1,
					};
					let n = !1;
					const g = this.isRegex,
						p = this.wholeWord,
						o = this.matchCase,
						f = this.preserveCase;
					typeof u.searchString < "u" &&
						this.a !== u.searchString &&
						((this.a = u.searchString), (c.searchString = !0), (n = !0)),
						typeof u.replaceString < "u" &&
							this.b !== u.replaceString &&
							((this.b = u.replaceString), (c.replaceString = !0), (n = !0)),
						typeof u.isRevealed < "u" &&
							this.c !== u.isRevealed &&
							((this.c = u.isRevealed), (c.isRevealed = !0), (n = !0)),
						typeof u.isReplaceRevealed < "u" &&
							this.f !== u.isReplaceRevealed &&
							((this.f = u.isReplaceRevealed),
							(c.isReplaceRevealed = !0),
							(n = !0)),
						typeof u.isRegex < "u" && (this.g = u.isRegex),
						typeof u.wholeWord < "u" && (this.j = u.wholeWord),
						typeof u.matchCase < "u" && (this.n = u.matchCase),
						typeof u.preserveCase < "u" && (this.r = u.preserveCase),
						typeof u.searchScope < "u" &&
							(u.searchScope?.every((b) =>
								this.t?.some((s) => !w.$iL.equalsRange(s, b)),
							) ||
								((this.t = u.searchScope), (c.searchScope = !0), (n = !0))),
						typeof u.loop < "u" &&
							this.z !== u.loop &&
							((this.z = u.loop), (c.loop = !0), (n = !0)),
						typeof u.isSearching < "u" &&
							this.C !== u.isSearching &&
							((this.C = u.isSearching), (c.isSearching = !0), (n = !0)),
						typeof u.filters < "u" &&
							(this.F ? this.F.update(u.filters) : (this.F = u.filters),
							(c.filters = !0),
							(n = !0)),
						(this.h =
							typeof u.isRegexOverride < "u" ? u.isRegexOverride : C.NotSet),
						(this.m =
							typeof u.wholeWordOverride < "u"
								? u.wholeWordOverride
								: C.NotSet),
						(this.q =
							typeof u.matchCaseOverride < "u"
								? u.matchCaseOverride
								: C.NotSet),
						(this.s =
							typeof u.preserveCaseOverride < "u"
								? u.preserveCaseOverride
								: C.NotSet),
						g !== this.isRegex && ((n = !0), (c.isRegex = !0)),
						p !== this.wholeWord && ((n = !0), (c.wholeWord = !0)),
						o !== this.matchCase && ((n = !0), (c.matchCase = !0)),
						f !== this.preserveCase && ((n = !0), (c.preserveCase = !0)),
						n && this.G.fire(c);
				}
				canNavigateBack() {
					return this.H() || this.matchesPosition !== 1;
				}
				canNavigateForward() {
					return this.H() || this.matchesPosition < this.matchesCount;
				}
				H() {
					return this.z || this.matchesCount >= E.$j2b;
				}
			}
			e.$l2b = m;
		})
