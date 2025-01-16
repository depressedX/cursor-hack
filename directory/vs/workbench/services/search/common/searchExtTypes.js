define(de[1862], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TextSearchCompleteMessageType =
					e.ExcludeSettingOptions =
					e.$i7 =
					e.$h7 =
					e.$g7 =
					e.$f7 =
						void 0);
			class t {
				constructor(r, u) {
					(this.line = r), (this.character = u);
				}
				isBefore(r) {
					return !1;
				}
				isBeforeOrEqual(r) {
					return !1;
				}
				isAfter(r) {
					return !1;
				}
				isAfterOrEqual(r) {
					return !1;
				}
				isEqual(r) {
					return !1;
				}
				compareTo(r) {
					return 0;
				}
				translate(r, u) {
					return new t(0, 0);
				}
				with(r) {
					return new t(0, 0);
				}
			}
			e.$f7 = t;
			class i {
				constructor(r, u, a, h) {
					(this.isEmpty = !1),
						(this.isSingleLine = !1),
						(this.start = new t(r, u)),
						(this.end = new t(a, h));
				}
				contains(r) {
					return !1;
				}
				isEqual(r) {
					return !1;
				}
				intersection(r) {}
				union(r) {
					return new i(0, 0, 0, 0);
				}
				with(r) {
					return new i(0, 0, 0, 0);
				}
			}
			e.$g7 = i;
			class w {
				constructor(r, u, a) {
					(this.uri = r), (this.ranges = u), (this.previewText = a);
				}
			}
			e.$h7 = w;
			class E {
				constructor(r, u, a) {
					(this.uri = r), (this.text = u), (this.lineNumber = a);
				}
			}
			e.$i7 = E;
			var C;
			(function (m) {
				(m[(m.None = 1)] = "None"),
					(m[(m.FilesExclude = 2)] = "FilesExclude"),
					(m[(m.SearchAndFilesExclude = 3)] = "SearchAndFilesExclude");
			})(C || (e.ExcludeSettingOptions = C = {}));
			var d;
			(function (m) {
				(m[(m.Information = 1)] = "Information"),
					(m[(m.Warning = 2)] = "Warning");
			})(d || (e.TextSearchCompleteMessageType = d = {}));
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	