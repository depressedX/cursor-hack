import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../instantiation/common/instantiation.js';
define(de[62], he([1, 0, 9, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ck = e.$Bk = void 0),
				(e.$Dk = w),
				(e.$Bk = (0, i.$Mi)("productService")),
				(e.$Ck = "vscode://schemas/vscode-product");
			function w(E, C) {
				return t.URI.joinPath(
					E.userHome,
					C.dataFolderName,
					"shadow-workspaces",
				);
			}
		})
