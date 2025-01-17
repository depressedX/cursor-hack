import '../../../require.js';
import '../../../exports.js';
import './platform.js';
define(de[344], he([1, 0, 12]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jc = e.$ic = e.env = e.cwd = void 0);
			let i;
			const w = globalThis.vscode;
			if (typeof w < "u" && typeof w.process < "u") {
				const E = w.process;
				i = {
					get platform() {
						return E.platform;
					},
					get arch() {
						return E.arch;
					},
					get env() {
						return E.env;
					},
					cwd() {
						return E.cwd();
					},
				};
			} else
				typeof process < "u" && typeof process?.versions?.node == "string"
					? (i = {
							get platform() {
								return process.platform;
							},
							get arch() {
								return process.arch;
							},
							get env() {
								return process.env;
							},
							cwd() {
								return process.env.VSCODE_CWD || process.cwd();
							},
						})
					: (i = {
							get platform() {
								return t.$l ? "win32" : t.$m ? "darwin" : "linux";
							},
							get arch() {},
							get env() {
								return {};
							},
							cwd() {
								return "/";
							},
						});
			(e.cwd = i.cwd), (e.env = i.env), (e.$ic = i.platform), (e.$jc = i.arch);
		}),
		