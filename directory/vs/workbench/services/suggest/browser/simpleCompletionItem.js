import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/platform.js';
define(de[3651], he([1, 0, 132, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*filters*/,
 i /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0Uc = void 0);
			class w {
				constructor(C) {
					if (
						((this.completion = C),
						(this.fileExtLow = ""),
						(this.score = t.FuzzyScore.Default),
						(this.labelLow = this.completion.label.toLowerCase()),
						(this.labelLowExcludeFileExt = this.labelLow),
						C.isFile)
					) {
						i.$l && (this.labelLow = this.labelLow.replaceAll("/", "\\"));
						const d = this.labelLow.lastIndexOf(".");
						d !== -1 &&
							((this.labelLowExcludeFileExt = this.labelLow.substring(0, d)),
							(this.fileExtLow = this.labelLow.substring(d + 1)));
					}
				}
			}
			e.$0Uc = w;
		}),
		