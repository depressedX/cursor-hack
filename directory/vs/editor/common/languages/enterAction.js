define(de[1198], he([1, 0, 532, 152, 1151]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qtb = E);
			function E(C, d, m, r) {
				d.tokenization.forceTokenization(m.startLineNumber);
				const u = d.getLanguageIdAtPosition(m.startLineNumber, m.startColumn),
					a = r.getLanguageConfiguration(u);
				if (!a) return null;
				const c = new w.$Otb(d, r).getProcessedTokenContextAroundRange(m),
					n = c.previousLineProcessedTokens.getLineContent(),
					g = c.beforeRangeProcessedTokens.getLineContent(),
					p = c.afterRangeProcessedTokens.getLineContent(),
					o = a.onEnter(C, n, g, p);
				if (!o) return null;
				const f = o.indentAction;
				let b = o.appendText;
				const s = o.removeText || 0;
				b
					? f === t.IndentAction.Indent && (b = "	" + b)
					: f === t.IndentAction.Indent || f === t.IndentAction.IndentOutdent
						? (b = "	")
						: (b = "");
				let l = (0, i.$cN)(d, m.startLineNumber, m.startColumn);
				return (
					s && (l = l.substring(0, l.length - s)),
					{ indentAction: f, appendText: b, removeText: s, indentation: l }
				);
			}
		}),
		