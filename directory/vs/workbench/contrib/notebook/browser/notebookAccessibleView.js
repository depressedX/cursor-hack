define(
			de[3560],
			he([1, 0, 178, 8, 130, 108, 176, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qIc = void 0),
					(e.$rIc = r);
				class m {
					constructor() {
						(this.priority = 100),
							(this.name = "notebook"),
							(this.type = t.AccessibleViewType.View),
							(this.when = i.$Kj.and(
								C.$rJb,
								i.$Kj.equals("resourceExtname", ".ipynb"),
							));
					}
					getProvider(a) {
						const h = a.get(d.$IY);
						return r(h);
					}
				}
				e.$qIc = m;
				function r(u) {
					const a = u.activeEditorPane,
						h = (0, E.$eJb)(a),
						c = h?.getViewModel(),
						n = c?.getSelections(),
						g = c?.notebookDocument;
					if (!n || !g || !h?.textModel) return;
					const p = c.viewCells[n[0].start];
					let o = "";
					const f = new TextDecoder();
					for (let b = 0; b < p.outputsViewModels.length; b++) {
						const s = p.outputsViewModels[b],
							l = p.model.outputs[b],
							[y, $] = s.resolveMimeTypes(h.textModel, void 0),
							v = y[$].mimeType;
						let S = l.outputs.find((P) => P.mime === v);
						(!S || v.startsWith("image")) &&
							(S = l.outputs.find((P) => !P.mime.startsWith("image")));
						let I = `${v}`;
						S &&
							((I = f.decode(S.data.slice(0, 1e5).buffer)),
							S.data.byteLength > 1e5 && (I = I + "...(truncated)"),
							v.endsWith("error") &&
								(I = I.replace(/\\u001b\[[0-9;]*m/gi, "").replaceAll(
									"\\n",
									`
`,
								)));
						const T =
							p.outputsViewModels.length > 1
								? `Cell output ${b + 1} of ${p.outputsViewModels.length}
`
								: "";
						o = o.concat(`${T}${I}
`);
					}
					if (o)
						return new t.$ILb(
							t.AccessibleViewProviderId.Notebook,
							{ type: t.AccessibleViewType.View },
							() => o,
							() => {
								h?.setFocus(n[0]), a?.focus();
							},
							w.AccessibilityVerbositySettingId.Notebook,
						);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	