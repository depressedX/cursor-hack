import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import './json.js';
define(de[754], he([1, 0, 4, 187]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*json*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$br = w);
			function w(E) {
				switch (E) {
					case i.ParseErrorCode.InvalidSymbol:
						return (0, t.localize)(113, null);
					case i.ParseErrorCode.InvalidNumberFormat:
						return (0, t.localize)(114, null);
					case i.ParseErrorCode.PropertyNameExpected:
						return (0, t.localize)(115, null);
					case i.ParseErrorCode.ValueExpected:
						return (0, t.localize)(116, null);
					case i.ParseErrorCode.ColonExpected:
						return (0, t.localize)(117, null);
					case i.ParseErrorCode.CommaExpected:
						return (0, t.localize)(118, null);
					case i.ParseErrorCode.CloseBraceExpected:
						return (0, t.localize)(119, null);
					case i.ParseErrorCode.CloseBracketExpected:
						return (0, t.localize)(120, null);
					case i.ParseErrorCode.EndOfFileExpected:
						return (0, t.localize)(121, null);
					default:
						return "";
				}
			}
		})
