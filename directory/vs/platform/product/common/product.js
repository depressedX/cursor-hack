define(de[372], he([1, 0, 344]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			let i;
			const w = globalThis.vscode;
			if (typeof w < "u" && typeof w.context < "u") {
				const E = w.context.configuration();
				if (E) i = E.product;
				else
					throw new Error(
						"Sandbox: unable to resolve product configuration from preload script.",
					);
			} else if (
				globalThis._VSCODE_PRODUCT_JSON &&
				globalThis._VSCODE_PACKAGE_JSON
			) {
				if (
					((i = globalThis._VSCODE_PRODUCT_JSON),
					t.env.VSCODE_DEV &&
						Object.assign(i, {
							nameShort: `${i.nameShort} Dev`,
							nameLong: `${i.nameLong} Dev`,
							dataFolderName: `${i.dataFolderName}-dev`,
							serverDataFolderName: i.serverDataFolderName
								? `${i.serverDataFolderName}-dev`
								: void 0,
						}),
					t.env.VSCODE_DEV_ONBOARDING &&
						Object.assign(i, {
							nameShort: `${i.nameShort} Onboarding`,
							nameLong: `${i.nameLong} Onboarding`,
							dataFolderName: `${i.dataFolderName}-onboarding`,
							serverDataFolderName: i.serverDataFolderName
								? `${i.serverDataFolderName}-onboarding`
								: void 0,
						}),
					!i.version)
				) {
					const E = globalThis._VSCODE_PACKAGE_JSON;
					Object.assign(i, { version: E.version });
				}
			} else
				(i = {}),
					Object.keys(i).length === 0 &&
						Object.assign(i, {
							version: "1.91.1-dev",
							nameShort: "Cursor Dev",
							nameLong: "Cursor Dev",
							applicationName: "cursor",
							dataFolderName: ".cursor",
							urlProtocol: "cursor",
							reportIssueUrl: "https://github.com/getcursor/cursor/issues/new",
							licenseName: "MIT",
							licenseUrl: "https://github.com/getcursor/cursor/",
							serverLicenseUrl: "https://github.com/getcursor/cursor/",
						});
			e.default = i;
		}),
		