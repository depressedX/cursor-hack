define(de[1156], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dPb = void 0),
				(e.$ePb = t),
				(e.$dPb = "editor.semanticHighlighting");
			function t(i, w, E) {
				const C = E.getValue(e.$dPb, {
					overrideIdentifier: i.getLanguageId(),
					resource: i.uri,
				})?.enabled;
				return typeof C == "boolean"
					? C
					: w.getColorTheme().semanticHighlighting;
			}
		}),
		