import '../../../../require.js';
import '../../../../exports.js';
define(de[762], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.WebFileSystemAccess = void 0);
			var t;
			(function (i) {
				function w(m) {
					return typeof m?.showDirectoryPicker == "function";
				}
				i.supported = w;
				function E(m) {
					const r = m;
					return r
						? typeof r.kind == "string" &&
								typeof r.queryPermission == "function" &&
								typeof r.requestPermission == "function"
						: !1;
				}
				i.isFileSystemHandle = E;
				function C(m) {
					return m.kind === "file";
				}
				i.isFileSystemFileHandle = C;
				function d(m) {
					return m.kind === "directory";
				}
				i.isFileSystemDirectoryHandle = d;
			})(t || (e.WebFileSystemAccess = t = {}));
		}),
		