import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[3511], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ccd = void 0);
			function t(w) {
				return w.replace(
					'"default": "https://github.com/VSCodium/vscodium/releases/download/${version}.${release}/vscodium-reh-${os}-${arch}-${version}.${release}.tar.gz"',
					'"default": "https://cursor.blob.core.windows.net/remote-releases/${commit}/vscode-reh-${os}-${arch}.tar.gz"',
				);
			}
			function i(w) {
				let E = w;
				return (
					(E = E.replace(
						'promptOpenRemoteSSHWindow=async function(e){const t=await a.window.showInputBox({title:"Enter [user@]hostname[:port]"});t&&d(new f.default(t).toEncodedString(),e)}',
						'promptOpenRemoteSSHWindow=async function(e,t){const n=a.window.createQuickPick(),s={current:[]},o={current:void 0},i=[{label:"$(add) Add New SSH Host...",alwaysShow:!0},{label:"Configure SSH Hosts...",alwaysShow:!0}],u=()=>{n.items=[...s.current,...i,...o.current?[o.current]:[]]};l.default.loadFromFS().then((e=>{const t=e.getAllConfiguredHosts();s.current=t.map((e=>({label:e}))),u()})),n.placeholder="e.g. ubuntu@ec2-3-106-99.amazonaws.com, or named host below",n.title="Select configured SSH host or enter user@host",u(),t.subscriptions.push(n.onDidChangeValue((e=>{e.length>0?o.current={label:`\u27A4 ${e}`,alwaysShow:!0}:o.current=void 0,u()}))),n.show(),n.onDidAccept((async()=>{const t=n.selectedItems[0];if(t){if(t.label===i[0].label)return await h(),void n.hide();if(t.label===i[1].label)return await g(),void n.hide();o.current?.label===t.label?d(new f.default(o.current.label.substr(2).trim()).toEncodedString(),e):d(new f.default(t.label).toEncodedString(),e),n.hide()}}))}',
					)),
					(E = E.replace(
						"l.promptOpenRemoteSSHWindow)(!0)",
						"l.promptOpenRemoteSSHWindow)(!0,e)",
					)),
					(E = E.replace(
						"l.promptOpenRemoteSSHWindow)(!1)",
						"l.promptOpenRemoteSSHWindow)(!1,e)",
					)),
					E
				);
			}
			e.$Ccd = {
				extensionId: "jeanp413.open-remote-ssh",
				fixes: [
					{ relativeFilePath: "package.json", replaceFn: t },
					{ relativeFilePath: "out/extension.js", replaceFn: i },
				],
			};
		}),
		