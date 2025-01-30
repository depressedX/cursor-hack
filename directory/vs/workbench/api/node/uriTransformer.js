import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uriIpc.js';
define(Pe[519], Ne([1, 0, 272]), function (we, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$pK = S);
			function r(N) {
				return {
					transformIncoming: (P) =>
						P.scheme === "vscode-remote"
							? {
									scheme: "file",
									path: P.path,
									query: P.query,
									fragment: P.fragment,
								}
							: P.scheme === "file"
								? {
										scheme: "vscode-local",
										path: P.path,
										query: P.query,
										fragment: P.fragment,
									}
								: P,
					transformOutgoing: (P) =>
						P.scheme === "file"
							? {
									scheme: "vscode-remote",
									authority: N,
									path: P.path,
									query: P.query,
									fragment: P.fragment,
								}
							: P.scheme === "vscode-local"
								? {
										scheme: "file",
										path: P.path,
										query: P.query,
										fragment: P.fragment,
									}
								: P,
					transformOutgoingScheme: (P) =>
						P === "file" ? "vscode-remote" : P === "vscode-local" ? "file" : P,
				};
			}
			function S(N) {
				return new e.$2n(r(N));
			}
		});
	var On =
		(this && this.__importDefault) ||
		function (we) {
			return we && we.__esModule ? we : { default: we };
		};
	