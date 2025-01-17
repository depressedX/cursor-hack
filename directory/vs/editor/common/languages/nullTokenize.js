import '../../../../require.js';
import '../../../../exports.js';
import '../languages.js';
import '../encodedTokenAttributes.js';
define(de[1175], he([1, 0, 74, 171]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$U = void 0),
				(e.$_U = w),
				(e.$aV = E),
				(e.$$U = new (class {
					clone() {
						return this;
					}
					equals(C) {
						return this === C;
					}
				})());
			function w(C, d) {
				return new t.$cM([new t.$bM(0, "", C)], d);
			}
			function E(C, d) {
				const m = new Uint32Array(2);
				return (
					(m[0] = 0),
					(m[1] =
						((C << i.MetadataConsts.LANGUAGEID_OFFSET) |
							(i.StandardTokenType.Other <<
								i.MetadataConsts.TOKEN_TYPE_OFFSET) |
							(i.FontStyle.None << i.MetadataConsts.FONT_STYLE_OFFSET) |
							(i.ColorId.DefaultForeground <<
								i.MetadataConsts.FOREGROUND_OFFSET) |
							(i.ColorId.DefaultBackground <<
								i.MetadataConsts.BACKGROUND_OFFSET)) >>>
						0),
					new t.$dM(m, d === null ? e.$$U : d)
				);
			}
		}),
		