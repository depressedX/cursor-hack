define(de[85], he([1, 0, 22, 5, 76, 28]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.EncodingMode =
					e.TextFileResolveReason =
					e.TextFileEditorModelState =
					e.$lZ =
					e.TextFileOperationResult =
					e.$kZ =
						void 0),
				(e.$mZ = a),
				(e.$nZ = h),
				(e.$oZ = c),
				(e.$pZ = n),
				(e.$kZ = (0, i.$Mi)("textFileService"));
			var C;
			(function (g) {
				g[(g.FILE_IS_BINARY = 0)] = "FILE_IS_BINARY";
			})(C || (e.TextFileOperationResult = C = {}));
			class d extends t.$Gl {
				static isTextFileOperationError(p) {
					return p instanceof Error && !(0, E.$ug)(p.textFileOperationResult);
				}
				constructor(p, o, f) {
					super(p, t.FileOperationResult.FILE_OTHER_ERROR),
						(this.textFileOperationResult = o),
						(this.options = f);
				}
			}
			e.$lZ = d;
			var m;
			(function (g) {
				(g[(g.SAVED = 0)] = "SAVED"),
					(g[(g.DIRTY = 1)] = "DIRTY"),
					(g[(g.PENDING_SAVE = 2)] = "PENDING_SAVE"),
					(g[(g.CONFLICT = 3)] = "CONFLICT"),
					(g[(g.ORPHAN = 4)] = "ORPHAN"),
					(g[(g.ERROR = 5)] = "ERROR");
			})(m || (e.TextFileEditorModelState = m = {}));
			var r;
			(function (g) {
				(g[(g.EDITOR = 1)] = "EDITOR"),
					(g[(g.REFERENCE = 2)] = "REFERENCE"),
					(g[(g.OTHER = 3)] = "OTHER");
			})(r || (e.TextFileResolveReason = r = {}));
			var u;
			(function (g) {
				(g[(g.Encode = 0)] = "Encode"), (g[(g.Decode = 1)] = "Decode");
			})(u || (e.EncodingMode = u = {}));
			function a(g) {
				const p = g;
				return (0, E.$Ag)(
					p.setEncoding,
					p.getEncoding,
					p.save,
					p.revert,
					p.isDirty,
					p.getLanguageId,
				);
			}
			function h(g) {
				const p = [];
				let o;
				for (; typeof (o = g.read()) == "string"; ) p.push(o);
				return p.join("");
			}
			function c(g) {
				let p = !1;
				return {
					read() {
						return p ? null : ((p = !0), g);
					},
				};
			}
			function n(g) {
				if (!(typeof g > "u"))
					return typeof g == "string"
						? w.$Te.fromString(g)
						: {
								read: () => {
									const p = g.read();
									return typeof p == "string" ? w.$Te.fromString(p) : null;
								},
							};
			}
		}),
		