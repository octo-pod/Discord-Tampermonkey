(function (f) {
	if(typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f()
	} else if(typeof define === "function" && define.amd) {
		define([], f)
	} else {
		var g;
		if(typeof window !== "undefined") {
			g = window
		} else if(typeof global !== "undefined") {
			g = global
		} else if(typeof self !== "undefined") {
			g = self
		} else {
			g = this
		}
		g.Discord = f()
	}
})(function () {
		var define, module, exports;
		return(function e(t, n, r) {
			function s(o, u) {
				if(!n[o]) {
					if(!t[o]) {
						var a = typeof require == "function" && require;
						if(!u && a) return a(o, !0);
						if(i) return i(o, !0);
						var f = new Error("Cannot find module '" + o + "'");
						throw f.code = "MODULE_NOT_FOUND", f
					}
					var l = n[o] = {
						exports: {}
					};
					t[o][0].call(l.exports, function (e) {
						var n = t[o][1][e];
						return s(n ? n : e)
					}, l, l.exports, e, t, n, r)
				}
				return n[o].exports
			}
			var i = typeof require == "function" && require;
			for(var o = 0; o < r.length; o++) s(r[o]);
			return s
		})({
			1: [function (require, module, exports) {
				if(typeof module !== 'undefined') {
					module.exports = Emitter;
				}

				function Emitter(obj) {
					if(obj) return mixin(obj);
				};

				function mixin(obj) {
					for(var key in Emitter.prototype) {
						obj[key] = Emitter.prototype[key];
					}
					return obj;
				}
				Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
					this._callbacks = this._callbacks || {};
					(this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
					return this;
				};
				Emitter.prototype.once = function (event, fn) {
					function on() {
						this.off(event, on);
						fn.apply(this, arguments);
					}
					on.fn = fn;
					this.on(event, on);
					return this;
				};
				Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
					this._callbacks = this._callbacks || {};
					if(0 == arguments.length) {
						this._callbacks = {};
						return this;
					}
					var callbacks = this._callbacks['$' + event];
					if(!callbacks) return this;
					if(1 == arguments.length) {
						delete this._callbacks['$' + event];
						return this;
					}
					var cb;
					for(var i = 0; i < callbacks.length; i++) {
						cb = callbacks[i];
						if(cb === fn || cb.fn === fn) {
							callbacks.splice(i, 1);
							break;
						}
					}
					return this;
				};
				Emitter.prototype.emit = function (event) {
					this._callbacks = this._callbacks || {};
					var args = [].slice.call(arguments, 1),
						callbacks = this._callbacks['$' + event];
					if(callbacks) {
						callbacks = callbacks.slice(0);
						for(var i = 0, len = callbacks.length; i < len; ++i) {
							callbacks[i].apply(this, args);
						}
					}
					return this;
				};
				Emitter.prototype.listeners = function (event) {
					this._callbacks = this._callbacks || {};
					return this._callbacks['$' + event] || [];
				};
				Emitter.prototype.hasListeners = function (event) {
					return !!this.listeners(event).length;
				};
			}, {}],
			2: [function (require, module, exports) {
				module.exports = {
					"_args": [
						[{
							"raw": "discord.js",
							"scope": null,
							"escapedName": "discord.js",
							"name": "discord.js",
							"rawSpec": "",
							"spec": "latest",
							"type": "tag"
						}, "C:\\Infinity"]
					],
					"_from": "discord.js@latest",
					"_id": "discord.js@11.0.0",
					"_inCache": true,
					"_location": "/discord.js",
					"_nodeVersion": "7.0.0",
					"_npmOperationalInternal": {
						"host": "packages-12-west.internal.npmjs.com",
						"tmp": "tmp/discord.js-11.0.0.tgz_1483030852564_0.6023120589088649"
					},
					"_npmUser": {
						"name": "hydrabolt",
						"email": "amishshah.2k@gmail.com"
					},
					"_npmVersion": "3.10.6",
					"_phantomChildren": {},
					"_requested": {
						"raw": "discord.js",
						"scope": null,
						"escapedName": "discord.js",
						"name": "discord.js",
						"rawSpec": "",
						"spec": "latest",
						"type": "tag"
					},
					"_requiredBy": ["#USER", "/"],
					"_resolved": "https://registry.npmjs.org/discord.js/-/discord.js-11.0.0.tgz",
					"_shasum": "735a4fc5607b04b2c1d0d699c88ea2936cf0d656",
					"_shrinkwrap": null,
					"_spec": "discord.js",
					"_where": "C:\\Infinity",
					"author": {
						"name": "Amish Shah",
						"email": "amishshah.2k@gmail.com"
					},
					"browser": {
						"ws": false,
						"uws": false,
						"erlpack": false,
						"opusscript": false,
						"node-opus": false,
						"tweet-nacl": false,
						"src/sharding/Shard.js": false,
						"src/sharding/ShardClientUtil.js": false,
						"src/sharding/ShardingManager.js": false,
						"src/client/voice/dispatcher/StreamDispatcher.js": false,
						"src/client/voice/opus/BaseOpusEngine.js": false,
						"src/client/voice/opus/NodeOpusEngine.js": false,
						"src/client/voice/opus/OpusEngineList.js": false,
						"src/client/voice/opus/OpusScriptEngine.js": false,
						"src/client/voice/pcm/ConverterEngine.js": false,
						"src/client/voice/pcm/ConverterEngineList.js": false,
						"src/client/voice/pcm/FfmpegConverterEngine.js": false,
						"src/client/voice/player/AudioPlayer.js": false,
						"src/client/voice/player/BasePlayer.js": false,
						"src/client/voice/player/DefaultPlayer.js": false,
						"src/client/voice/receiver/VoiceReadable.js": false,
						"src/client/voice/receiver/VoiceReceiver.js": false,
						"src/client/voice/util/SecretKey.js": false,
						"src/client/voice/ClientVoiceManager.js": false,
						"src/client/voice/VoiceConnection.js": false,
						"src/client/voice/VoiceUDPClient.js": false,
						"src/client/voice/VoiceWebSocket.js": false
					},
					"bugs": {
						"url": "https://github.com/hydrabolt/discord.js/issues"
					},
					"dependencies": {
						"@types/node": "^6.0.0",
						"pako": "^1.0.0",
						"superagent": "^3.3.0",
						"tweetnacl": "^0.14.0",
						"ws": "^1.1.0"
					},
					"description": "A powerful library for interacting with the Discord API",
					"devDependencies": {
						"discord.js-docgen": "github:hydrabolt/discord.js-docgen#master",
						"eslint": "^3.12.0",
						"parallel-webpack": "^1.6.0",
						"uglify-js": "github:mishoo/UglifyJS2#harmony",
						"webpack": "2.2.0-rc.3"
					},
					"directories": {},
					"dist": {
						"shasum": "735a4fc5607b04b2c1d0d699c88ea2936cf0d656",
						"tarball": "https://registry.npmjs.org/discord.js/-/discord.js-11.0.0.tgz"
					},
					"engines": {
						"node": ">=6.0.0"
					},
					"gitHead": "c8f6b6b0596c50dfb0d910dca88b5a32931041b6",
					"homepage": "https://github.com/hydrabolt/discord.js#readme",
					"keywords": ["discord", "api", "bot", "client", "node", "discordapp"],
					"license": "Apache-2.0",
					"main": "./src/index",
					"maintainers": [{
						"name": "hydrabolt",
						"email": "amishshah.2k@gmail.com"
					}],
					"name": "discord.js",
					"optionalDependencies": {},
					"peerDependencies": {
						"erlpack": "hammerandchisel/erlpack#master",
						"node-opus": "^0.2.0",
						"opusscript": "^0.0.1",
						"uws": "^0.12.0"
					},
					"readme": "ERROR: No README data found!",
					"repository": {
						"type": "git",
						"url": "git+https://github.com/hydrabolt/discord.js.git"
					},
					"runkitExampleFilename": "./docs/examples/ping.js",
					"scripts": {
						"docs": "docgen --source src --custom docs/index.yml --output docs/docs.json",
						"lint": "eslint src",
						"test": "eslint src && docgen --source src --custom docs/index.yml",
						"test-docs": "docgen --source src --custom docs",
						"web-dist": "node ./node_modules/parallel-webpack/bin/run.js"
					},
					"types": "./typings/index.d.ts",
					"version": "11.0.0"
				}
			}, {}],
			3: [function (require, module, exports) {
					(function (process) {
						const EventEmitter = require('events').EventEmitter;
						const mergeDefault = require('../util/MergeDefault');
						const Constants = require('../util/Constants');
						const RESTManager = require('./rest/RESTManager');
						const ClientDataManager = require('./ClientDataManager');
						const ClientManager = require('./ClientManager');
						const ClientDataResolver = require('./ClientDataResolver');
						const ClientVoiceManager = require('./voice/ClientVoiceManager');
						const WebSocketManager = require('./websocket/WebSocketManager');
						const ActionsManager = require('./actions/ActionsManager');
						const Collection = require('../util/Collection');
						const Presence = require('../structures/Presence').Presence;
						const ShardClientUtil = require('../sharding/ShardClientUtil');
						class Client extends EventEmitter {
							constructor(options = {}) {
								super();
								if(!options.shardId && 'SHARD_ID' in process.env) options.shardId = Number(process.env.SHARD_ID);
								if(!options.shardCount && 'SHARD_COUNT' in process.env) options.shardCount = Number(process.env.SHARD_COUNT);
								this.options = mergeDefault(Constants.DefaultOptions, options);
								this._validateOptions();
								this.rest = new RESTManager(this);
								this.dataManager = new ClientDataManager(this);
								this.manager = new ClientManager(this);
								this.ws = new WebSocketManager(this);
								this.resolver = new ClientDataResolver(this);
								this.actions = new ActionsManager(this);
								this.voice = !this.browser ? new ClientVoiceManager(this) : null;
								this.shard = process.send ? ShardClientUtil.singleton(this) : null;
								this.users = new Collection();
								this.guilds = new Collection();
								this.channels = new Collection();
								this.presences = new Collection();
								if(!this.token && 'CLIENT_TOKEN' in process.env) {
									this.token = process.env.CLIENT_TOKEN;
								} else {
									this.token = null;
								}
								this.user = null;
								this.readyAt = null;
								this.pings = [];
								this._pingTimestamp = 0;
								this._timeouts = new Set();
								this._intervals = new Set();
								if(this.options.messageSweepInterval > 0) {
									this.setInterval(this.sweepMessages.bind(this), this.options.messageSweepInterval * 1000);
								}
							}
							get status() {
								return this.ws.status;
							}
							get uptime() {
								return this.readyAt ? Date.now() - this.readyAt : null;
							}
							get ping() {
								return this.pings.reduce((prev, p) => prev + p, 0) / this.pings.length;
							}
							get voiceConnections() {
								if(this.browser) return new Collection();
								return this.voice.connections;
							}
							get emojis() {
								const emojis = new Collection();
								for(const guild of this.guilds.values()) {
									for(const emoji of guild.emojis.values()) emojis.set(emoji.id, emoji);
								}
								return emojis;
							}
							get readyTimestamp() {
								return this.readyAt ? this.readyAt.getTime() : null;
							}
							get browser() {
								return typeof window !== 'undefined';
							}
							login(token) {
								return this.rest.methods.login(token);
							}
							destroy() {
								for(const t of this._timeouts) clearTimeout(t);
								for(const i of this._intervals) clearInterval(i);
								this._timeouts.clear();
								this._intervals.clear();
								return this.manager.destroy();
							}
							syncGuilds(guilds = this.guilds) {
								if(this.user.bot) return;
								this.ws.send({
									op: 12,
									d: guilds instanceof Collection ? guilds.keyArray() : guilds.map(g => g.id),
								});
							}
							fetchUser(id) {
								if(this.users.has(id)) return Promise.resolve(this.users.get(id));
								return this.rest.methods.getUser(id);
							}
							fetchInvite(invite) {
								const code = this.resolver.resolveInviteCode(invite);
								return this.rest.methods.getInvite(code);
							}
							fetchWebhook(id, token) {
								return this.rest.methods.getWebhook(id, token);
							}
							sweepMessages(lifetime = this.options.messageCacheLifetime) {
								if(typeof lifetime !== 'number' || isNaN(lifetime)) throw new TypeError('The lifetime must be a number.');
								if(lifetime <= 0) {
									this.emit('debug', 'Didn\'t sweep messages - lifetime is unlimited');
									return -1;
								}
								const lifetimeMs = lifetime * 1000;
								const now = Date.now();
								let channels = 0;
								let messages = 0;
								for(const channel of this.channels.values()) {
									if(!channel.messages) continue;
									channels++;
									for(const message of channel.messages.values()) {
										if(now - (message.editedTimestamp || message.createdTimestamp) > lifetimeMs) {
											channel.messages.delete(message.id);
											messages++;
										}
									}
								}
								this.emit('debug', `Swept ${messages}messages older than ${lifetime}seconds in ${channels}text-based channels`);
								return messages;
							}
							fetchApplication() {
								if(!this.user.bot) throw new Error(Constants.Errors.NO_BOT_ACCOUNT);
								return this.rest.methods.getMyApplication();
							}
							generateInvite(permissions) {
								if(permissions) {
									if(permissions instanceof Array) permissions = this.resolver.resolvePermissions(permissions);
								} else {
									permissions = 0;
								}
								return this.fetchApplication().then(application => `https:);}
setTimeout(fn,delay,...args){const timeout=setTimeout(()=>{fn();this._timeouts.delete(timeout);},delay,...args);this._timeouts.add(timeout);return timeout;}
clearTimeout(timeout){clearTimeout(timeout);this._timeouts.delete(timeout);}
setInterval(fn,delay,...args){const interval=setInterval(fn,delay,...args);this._intervals.add(interval);return interval;}
clearInterval(interval){clearInterval(interval);this._intervals.delete(interval);}
_pong(startTime){this.pings.unshift(Date.now()-startTime);if(this.pings.length>3)this.pings.length=3;this.ws.lastHeartbeatAck=true;}
_setPresence(id,presence){if(this.presences.get(id)){this.presences.get(id).update(presence);return;}
this.presences.set(id,new Presence(presence));}
_eval(script){return eval(script);}
_validateOptions(options=this.options){if(typeof options.shardCount!=='number'||isNaN(options.shardCount)){throw new TypeError('The shardCount option must be a number.');}
if(typeof options.shardId!=='number'||isNaN(options.shardId)){throw new TypeError('The shardId option must be a number.');}
if(options.shardCount<0)throw new RangeError('The shardCount option must be at least 0.');if(options.shardId<0)throw new RangeError('The shardId option must be at least 0.');if(options.shardId!==0&&options.shardId>=options.shardCount){throw new RangeError('The shardId option must be less than shardCount.');}
if(typeof options.messageCacheMaxSize!=='number'||isNaN(options.messageCacheMaxSize)){throw new TypeError('The messageCacheMaxSize option must be a number.');}
if(typeof options.messageCacheLifetime!=='number'||isNaN(options.messageCacheLifetime)){throw new TypeError('The messageCacheLifetime option must be a number.');}
if(typeof options.messageSweepInterval!=='number'||isNaN(options.messageSweepInterval)){throw new TypeError('The messageSweepInterval option must be a number.');}
if(typeof options.fetchAllMembers!=='boolean'){throw new TypeError('The fetchAllMembers option must be a boolean.');}
if(typeof options.disableEveryone!=='boolean'){throw new TypeError('The disableEveryone option must be a boolean.');}
if(typeof options.restWsBridgeTimeout!=='number'||isNaN(options.restWsBridgeTimeout)){throw new TypeError('The restWsBridgeTimeout option must be a number.');}
if(!(options.disabledEvents instanceof Array))throw new TypeError('The disabledEvents option must be an Array.');}}
module.exports=Client;}).call(this,require('_process'))},{"../sharding/ShardClientUtil":98,"../structures/Presence":120,"../util/Collection":133,"../util/Constants":134,"../util/MergeDefault":140,"./ClientDataManager":4,"./ClientDataResolver":5,"./ClientManager":6,"./actions/ActionsManager":9,"./rest/RESTManager":37,"./voice/ClientVoiceManager":43,"./websocket/WebSocketManager":59,"_process":193,"events":175}],4:[function(require,module,exports){const Constants=require('../util/Constants');const cloneObject=require('../util/CloneObject');const Guild=require('../structures/Guild');const User=require('../structures/User');const DMChannel=require('../structures/DMChannel');const Emoji=require('../structures/Emoji');const TextChannel=require('../structures/TextChannel');const VoiceChannel=require('../structures/VoiceChannel');const GuildChannel=require('../structures/GuildChannel');const GroupDMChannel=require('../structures/GroupDMChannel');class ClientDataManager{constructor(client){this.client=client;}
get pastReady(){return this.client.ws.status===Constants.Status.READY;}
newGuild(data){const already=this.client.guilds.has(data.id);const guild=new Guild(this.client,data);this.client.guilds.set(guild.id,guild);if(this.pastReady&&!already){if(this.client.options.fetchAllMembers){guild.fetchMembers().then(()=>{this.client.emit(Constants.Events.GUILD_CREATE,guild);});}else{this.client.emit(Constants.Events.GUILD_CREATE,guild);}}
return guild;}
newUser(data){if(this.client.users.has(data.id))return this.client.users.get(data.id);const user=new User(this.client,data);this.client.users.set(user.id,user);return user;}
newChannel(data,guild){const already=this.client.channels.has(data.id);let channel;if(data.type===Constants.ChannelTypes.DM){channel=new DMChannel(this.client,data);}else if(data.type===Constants.ChannelTypes.groupDM){channel=new GroupDMChannel(this.client,data);}else{guild=guild||this.client.guilds.get(data.guild_id);if(guild){if(data.type===Constants.ChannelTypes.text){channel=new TextChannel(guild,data);guild.channels.set(channel.id,channel);}else if(data.type===Constants.ChannelTypes.voice){channel=new VoiceChannel(guild,data);guild.channels.set(channel.id,channel);}}}
if(channel){if(this.pastReady&&!already)this.client.emit(Constants.Events.CHANNEL_CREATE,channel);this.client.channels.set(channel.id,channel);return channel;}
return null;}
newEmoji(data,guild){const already=guild.emojis.has(data.id);if(data&&!already){let emoji=new Emoji(guild,data);this.client.emit(Constants.Events.GUILD_EMOJI_CREATE,emoji);guild.emojis.set(emoji.id,emoji);return emoji;}else if(already){return guild.emojis.get(data.id);}
return null;}
killEmoji(emoji){if(!(emoji instanceof Emoji&&emoji.guild))return;this.client.emit(Constants.Events.GUILD_EMOJI_DELETE,emoji);emoji.guild.emojis.delete(emoji.id);}
killGuild(guild){const already=this.client.guilds.has(guild.id);this.client.guilds.delete(guild.id);if(already&&this.pastReady)this.client.emit(Constants.Events.GUILD_DELETE,guild);}
killUser(user){this.client.users.delete(user.id);}
killChannel(channel){this.client.channels.delete(channel.id);if(channel instanceof GuildChannel)channel.guild.channels.delete(channel.id);}
updateGuild(currentGuild,newData){const oldGuild=cloneObject(currentGuild);currentGuild.setup(newData);if(this.pastReady)this.client.emit(Constants.Events.GUILD_UPDATE,oldGuild,currentGuild);}
updateChannel(currentChannel,newData){currentChannel.setup(newData);}
updateEmoji(currentEmoji,newData){const oldEmoji=cloneObject(currentEmoji);currentEmoji.setup(newData);this.client.emit(Constants.Events.GUILD_EMOJI_UPDATE,oldEmoji,currentEmoji);}}
module.exports=ClientDataManager;},{"../structures/DMChannel":103,"../structures/Emoji":104,"../structures/GroupDMChannel":106,"../structures/Guild":107,"../structures/GuildChannel":108,"../structures/TextChannel":124,"../structures/User":125,"../structures/VoiceChannel":128,"../util/CloneObject":132,"../util/Constants":134}],5:[function(require,module,exports){(function(Buffer){const path=require('path');const fs=require('fs');const request=require('superagent');const Constants=require('../util/Constants');const convertArrayBuffer=require('../util/ConvertArrayBuffer');const User=require('../structures/User');const Message=require('../structures/Message');const Guild=require('../structures/Guild');const Channel=require('../structures/Channel');const GuildMember=require('../structures/GuildMember');const Emoji=require('../structures/Emoji');const ReactionEmoji=require('../structures/ReactionEmoji');class ClientDataResolver{constructor(client){this.client=client;}
resolveUser(user){if(user instanceof User)return user;if(typeof user==='string')return this.client.users.get(user)||null;if(user instanceof GuildMember)return user.user;if(user instanceof Message)return user.author;if(user instanceof Guild)return user.owner;return null;}
resolveUserID(user){if(user instanceof User||user instanceof GuildMember)return user.id;if(typeof user==='string')return user||null;if(user instanceof Message)return user.author.id;if(user instanceof Guild)return user.ownerID;return null;}
resolveGuild(guild){if(guild instanceof Guild)return guild;if(typeof guild==='string')return this.client.guilds.get(guild)||null;return null;}
resolveGuildMember(guild,user){if(user instanceof GuildMember)return user;guild=this.resolveGuild(guild);user=this.resolveUser(user);if(!guild||!user)return null;return guild.members.get(user.id)||null;}
resolveChannel(channel){if(channel instanceof Channel)return channel;if(channel instanceof Message)return channel.channel;if(channel instanceof Guild)return channel.channels.get(channel.id)||null;if(typeof channel==='string')return this.client.channels.get(channel)||null;return null;}
resolveInviteCode(data){const inviteRegex=/discord(?:app)?\.(?:gg|com\/invite)\/([a-z0-9]{5})/i;const match=inviteRegex.exec(data);if(match&&match[1])return match[1];return data;}
resolvePermission(permission){if(typeof permission==='string')permission=Constants.PermissionFlags[permission];if(typeof permission!=='number'||permission<1)throw new Error(Constants.Errors.NOT_A_PERMISSION);return permission;}
resolvePermissions(permissions){let bitfield=0;for(const permission of permissions)bitfield|=this.resolvePermission(permission);return bitfield;}
resolveString(data){if(typeof data==='string')return data;if(data instanceof Array)return data.join('\n');return String(data);}
resolveBase64(data){if(data instanceof Buffer)return`
									data: image / jpg; base64, $ {
										data.toString('base64')
									}
									`;return data;}
resolveBuffer(resource){if(resource instanceof Buffer)return Promise.resolve(resource);if(this.client.browser&&resource instanceof ArrayBuffer)return Promise.resolve(convertArrayBuffer(resource));if(typeof resource==='string'){return new Promise((resolve,reject)=>{if(/^https?:\/\//.test(resource)){const req=request.get(resource).set('Content-Type','blob');if(this.client.browser)req.responseType('arraybuffer');req.end((err,res)=>{if(err)return reject(err);if(this.client.browser)return resolve(convertArrayBuffer(res.xhr.response));if(!(res.body instanceof Buffer))return reject(new TypeError('The response body isn\'t a Buffer.'));return resolve(res.body);});}else{const file=path.resolve(resource);fs.stat(file,(err,stats)=>{if(err)reject(err);if(!stats||!stats.isFile())throw new Error(`
									The file could not be found: $ {
										file
									}
									`);fs.readFile(file,(err2,data)=>{if(err2)reject(err2);else resolve(data);});});}});}
return Promise.reject(new TypeError('The resource must be a string or Buffer.'));}
resolveEmojiIdentifier(emoji){if(emoji instanceof Emoji||emoji instanceof ReactionEmoji)return emoji.identifier;if(typeof emoji==='string'){if(!emoji.includes('%'))return encodeURIComponent(emoji);}
return null;}}
module.exports=ClientDataResolver;}).call(this,require("buffer").Buffer)},{"../structures/Channel":100,"../structures/Emoji":104,"../structures/Guild":107,"../structures/GuildMember":109,"../structures/Message":111,"../structures/ReactionEmoji":121,"../structures/User":125,"../util/Constants":134,"../util/ConvertArrayBuffer":135,"buffer":173,"fs":166,"path":191,"superagent":159}],6:[function(require,module,exports){const Constants=require('../util/Constants');class ClientManager{constructor(client){this.client=client;this.heartbeatInterval=null;}
connectToWebSocket(token,resolve,reject){this.client.emit(Constants.Events.DEBUG,`
									Authenticated using token $ {
										token
									}
									`);this.client.token=token;const timeout=this.client.setTimeout(()=>reject(new Error(Constants.Errors.TOOK_TOO_LONG)),1000*300);this.client.rest.methods.getGateway().then(gateway=>{this.client.emit(Constants.Events.DEBUG,`
									Using gateway $ {
										gateway
									}
									`);this.client.ws.connect(gateway);this.client.ws.once('close',event=>{if(event.code===4004)reject(new Error(Constants.Errors.BAD_LOGIN));if(event.code===4010)reject(new Error(Constants.Errors.INVALID_SHARD));});this.client.once(Constants.Events.READY,()=>{resolve(token);this.client.clearTimeout(timeout);});},reject);}
setupKeepAlive(time){this.heartbeatInterval=this.client.setInterval(()=>this.client.ws.heartbeat(true),time);}
destroy(){this.client.ws.destroy();if(this.client.user.bot){this.client.token=null;return Promise.resolve();}else{return this.client.rest.methods.logout().then(()=>{this.client.token=null;});}}}
module.exports=ClientManager;},{"../util/Constants":134}],7:[function(require,module,exports){const Webhook=require('../structures/Webhook');const RESTManager=require('./rest/RESTManager');const ClientDataResolver=require('./ClientDataResolver');const mergeDefault=require('../util/MergeDefault');const Constants=require('../util/Constants');class WebhookClient extends Webhook{constructor(id,token,options){super(null,id,token);this.options=mergeDefault(Constants.DefaultOptions,options);this.rest=new RESTManager(this);this.resolver=new ClientDataResolver(this);}}
module.exports=WebhookClient;},{"../structures/Webhook":129,"../util/Constants":134,"../util/MergeDefault":140,"./ClientDataResolver":5,"./rest/RESTManager":37}],8:[function(require,module,exports){class GenericAction{constructor(client){this.client=client;}
handle(data){return data;}}
module.exports=GenericAction;},{}],9:[function(require,module,exports){class ActionsManager{constructor(client){this.client=client;this.register(require('./MessageCreate'));this.register(require('./MessageDelete'));this.register(require('./MessageDeleteBulk'));this.register(require('./MessageUpdate'));this.register(require('./MessageReactionAdd'));this.register(require('./MessageReactionRemove'));this.register(require('./MessageReactionRemoveAll'));this.register(require('./ChannelCreate'));this.register(require('./ChannelDelete'));this.register(require('./ChannelUpdate'));this.register(require('./GuildDelete'));this.register(require('./GuildUpdate'));this.register(require('./GuildMemberGet'));this.register(require('./GuildMemberRemove'));this.register(require('./GuildBanRemove'));this.register(require('./GuildRoleCreate'));this.register(require('./GuildRoleDelete'));this.register(require('./GuildRoleUpdate'));this.register(require('./UserGet'));this.register(require('./UserUpdate'));this.register(require('./UserNoteUpdate'));this.register(require('./GuildSync'));this.register(require('./GuildEmojiCreate'));this.register(require('./GuildEmojiDelete'));this.register(require('./GuildEmojiUpdate'));this.register(require('./GuildRolesPositionUpdate'));}
register(Action){this[Action.name.replace(/Action$/,'')]=new Action(this.client);}}
module.exports=ActionsManager;},{"./ChannelCreate":10,"./ChannelDelete":11,"./ChannelUpdate":12,"./GuildBanRemove":13,"./GuildDelete":14,"./GuildEmojiCreate":15,"./GuildEmojiDelete":16,"./GuildEmojiUpdate":17,"./GuildMemberGet":18,"./GuildMemberRemove":19,"./GuildRoleCreate":20,"./GuildRoleDelete":21,"./GuildRoleUpdate":22,"./GuildRolesPositionUpdate":23,"./GuildSync":24,"./GuildUpdate":25,"./MessageCreate":26,"./MessageDelete":27,"./MessageDeleteBulk":28,"./MessageReactionAdd":29,"./MessageReactionRemove":30,"./MessageReactionRemoveAll":31,"./MessageUpdate":32,"./UserGet":33,"./UserNoteUpdate":34,"./UserUpdate":35}],10:[function(require,module,exports){const Action=require('./Action');class ChannelCreateAction extends Action{handle(data){const client=this.client;const channel=client.dataManager.newChannel(data);return{channel,};}}
module.exports=ChannelCreateAction;},{"./Action":8}],11:[function(require,module,exports){const Action=require('./Action');class ChannelDeleteAction extends Action{constructor(client){super(client);this.deleted=new Map();}
handle(data){const client=this.client;let channel=client.channels.get(data.id);if(channel){client.dataManager.killChannel(channel);this.deleted.set(channel.id,channel);this.scheduleForDeletion(channel.id);}else{channel=this.deleted.get(data.id)||null;}
return{channel,};}
scheduleForDeletion(id){this.client.setTimeout(()=>this.deleted.delete(id),this.client.options.restWsBridgeTimeout);}}
module.exports=ChannelDeleteAction;},{"./Action":8}],12:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');const cloneObject=require('../../util/CloneObject');class ChannelUpdateAction extends Action{handle(data){const client=this.client;const channel=client.channels.get(data.id);if(channel){const oldChannel=cloneObject(channel);channel.setup(data);client.emit(Constants.Events.CHANNEL_UPDATE,oldChannel,channel);return{old:oldChannel,updated:channel,};}
return{old:null,updated:null,};}}
module.exports=ChannelUpdateAction;},{"../../util/CloneObject":132,"../../util/Constants":134,"./Action":8}],13:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class GuildBanRemove extends Action{handle(data){const client=this.client;const guild=client.guilds.get(data.guild_id);const user=client.dataManager.newUser(data.user);if(guild&&user)client.emit(Constants.Events.GUILD_BAN_REMOVE,guild,user);}}
module.exports=GuildBanRemove;},{"../../util/Constants":134,"./Action":8}],14:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class GuildDeleteAction extends Action{constructor(client){super(client);this.deleted=new Map();}
handle(data){const client=this.client;let guild=client.guilds.get(data.id);if(guild){if(guild.available&&data.unavailable){guild.available=false;client.emit(Constants.Events.GUILD_UNAVAILABLE,guild);return{guild:null,};}
client.guilds.delete(guild.id);this.deleted.set(guild.id,guild);this.scheduleForDeletion(guild.id);}else{guild=this.deleted.get(data.id)||null;}
return{guild,};}
scheduleForDeletion(id){this.client.setTimeout(()=>this.deleted.delete(id),this.client.options.restWsBridgeTimeout);}}
module.exports=GuildDeleteAction;},{"../../util/Constants":134,"./Action":8}],15:[function(require,module,exports){const Action=require('./Action');class GuildEmojiCreateAction extends Action{handle(guild,createdEmoji){const client=this.client;const emoji=client.dataManager.newEmoji(createdEmoji,guild);return{emoji,};}}
module.exports=GuildEmojiCreateAction;},{"./Action":8}],16:[function(require,module,exports){const Action=require('./Action');class GuildEmojiDeleteAction extends Action{handle(emoji){const client=this.client;client.dataManager.killEmoji(emoji);return{emoji,};}}
module.exports=GuildEmojiDeleteAction;},{"./Action":8}],17:[function(require,module,exports){const Action=require('./Action');class GuildEmojiUpdateAction extends Action{handle(oldEmoji,newEmoji){this.client.dataManager.updateEmoji(oldEmoji,newEmoji);}}
module.exports=GuildEmojiUpdateAction;},{"./Action":8}],18:[function(require,module,exports){const Action=require('./Action');class GuildMemberGetAction extends Action{handle(guild,data){const member=guild._addMember(data,false);return{member,};}}
module.exports=GuildMemberGetAction;},{"./Action":8}],19:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class GuildMemberRemoveAction extends Action{constructor(client){super(client);this.deleted=new Map();}
handle(data){const client=this.client;const guild=client.guilds.get(data.guild_id);if(guild){let member=guild.members.get(data.user.id);if(member){guild.memberCount--;guild._removeMember(member);this.deleted.set(guild.id+data.user.id,member);if(client.status===Constants.Status.READY)client.emit(Constants.Events.GUILD_MEMBER_REMOVE,member);this.scheduleForDeletion(guild.id,data.user.id);}else{member=this.deleted.get(guild.id+data.user.id)||null;}
return{guild,member,};}
return{guild,member:null,};}
scheduleForDeletion(guildID,userID){this.client.setTimeout(()=>this.deleted.delete(guildID+userID),this.client.options.restWsBridgeTimeout);}}
module.exports=GuildMemberRemoveAction;},{"../../util/Constants":134,"./Action":8}],20:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');const Role=require('../../structures/Role');class GuildRoleCreate extends Action{handle(data){const client=this.client;const guild=client.guilds.get(data.guild_id);if(guild){const already=guild.roles.has(data.role.id);const role=new Role(guild,data.role);guild.roles.set(role.id,role);if(!already)client.emit(Constants.Events.GUILD_ROLE_CREATE,role);return{role,};}
return{role:null,};}}
module.exports=GuildRoleCreate;},{"../../structures/Role":123,"../../util/Constants":134,"./Action":8}],21:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class GuildRoleDeleteAction extends Action{constructor(client){super(client);this.deleted=new Map();}
handle(data){const client=this.client;const guild=client.guilds.get(data.guild_id);if(guild){let role=guild.roles.get(data.role_id);if(role){guild.roles.delete(data.role_id);this.deleted.set(guild.id+data.role_id,role);this.scheduleForDeletion(guild.id,data.role_id);client.emit(Constants.Events.GUILD_ROLE_DELETE,role);}else{role=this.deleted.get(guild.id+data.role_id)||null;}
return{role,};}
return{role:null,};}
scheduleForDeletion(guildID,roleID){this.client.setTimeout(()=>this.deleted.delete(guildID+roleID),this.client.options.restWsBridgeTimeout);}}
module.exports=GuildRoleDeleteAction;},{"../../util/Constants":134,"./Action":8}],22:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');const cloneObject=require('../../util/CloneObject');class GuildRoleUpdateAction extends Action{handle(data){const client=this.client;const guild=client.guilds.get(data.guild_id);if(guild){const roleData=data.role;let oldRole=null;const role=guild.roles.get(roleData.id);if(role){oldRole=cloneObject(role);role.setup(data.role);client.emit(Constants.Events.GUILD_ROLE_UPDATE,oldRole,role);}
return{old:oldRole,updated:role,};}
return{old:null,updated:null,};}}
module.exports=GuildRoleUpdateAction;},{"../../util/CloneObject":132,"../../util/Constants":134,"./Action":8}],23:[function(require,module,exports){const Action=require('./Action');class GuildRolesPositionUpdate extends Action{handle(data){const client=this.client;const guild=client.guilds.get(data.guild_id);if(guild){for(const partialRole of data.roles){const role=guild.roles.get(partialRole.id);if(role){role.position=partialRole.position;}}}
return{guild,};}}
module.exports=GuildRolesPositionUpdate;},{"./Action":8}],24:[function(require,module,exports){const Action=require('./Action');class GuildSync extends Action{handle(data){const client=this.client;const guild=client.guilds.get(data.id);if(guild){data.presences=data.presences||[];for(const presence of data.presences){guild._setPresence(presence.user.id,presence);}
data.members=data.members||[];for(const syncMember of data.members){const member=guild.members.get(syncMember.user.id);if(member){guild._updateMember(member,syncMember);}else{guild._addMember(syncMember,false);}}}}}
module.exports=GuildSync;},{"./Action":8}],25:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');const cloneObject=require('../../util/CloneObject');class GuildUpdateAction extends Action{handle(data){const client=this.client;const guild=client.guilds.get(data.id);if(guild){const oldGuild=cloneObject(guild);guild.setup(data);client.emit(Constants.Events.GUILD_UPDATE,oldGuild,guild);return{old:oldGuild,updated:guild,};}
return{old:null,updated:null,};}}
module.exports=GuildUpdateAction;},{"../../util/CloneObject":132,"../../util/Constants":134,"./Action":8}],26:[function(require,module,exports){const Action=require('./Action');const Message=require('../../structures/Message');class MessageCreateAction extends Action{handle(data){const client=this.client;const channel=client.channels.get((data instanceof Array?data[0]:data).channel_id);const user=client.users.get((data instanceof Array?data[0]:data).author.id);if(channel){const member=channel.guild?channel.guild.member(user):null;if(data instanceof Array){const messages=new Array(data.length);for(let i=0;i<data.length;i++){messages[i]=channel._cacheMessage(new Message(channel,data[i],client));}
channel.lastMessageID=messages[messages.length-1].id;if(user)user.lastMessageID=messages[messages.length-1].id;if(member)member.lastMessageID=messages[messages.length-1].id;return{messages,};}else{const message=channel._cacheMessage(new Message(channel,data,client));channel.lastMessageID=data.id;if(user)user.lastMessageID=data.id;if(member)member.lastMessageID=data.id;return{message,};}}
return{message:null,};}}
module.exports=MessageCreateAction;},{"../../structures/Message":111,"./Action":8}],27:[function(require,module,exports){const Action=require('./Action');class MessageDeleteAction extends Action{constructor(client){super(client);this.deleted=new Map();}
handle(data){const client=this.client;const channel=client.channels.get(data.channel_id);if(channel){let message=channel.messages.get(data.id);if(message){channel.messages.delete(message.id);this.deleted.set(channel.id+message.id,message);this.scheduleForDeletion(channel.id,message.id);}else{message=this.deleted.get(channel.id+data.id)||null;}
return{message,};}
return{message:null,};}
scheduleForDeletion(channelID,messageID){this.client.setTimeout(()=>this.deleted.delete(channelID+messageID),this.client.options.restWsBridgeTimeout);}}
module.exports=MessageDeleteAction;},{"./Action":8}],28:[function(require,module,exports){const Action=require('./Action');const Collection=require('../../util/Collection');const Constants=require('../../util/Constants');class MessageDeleteBulkAction extends Action{handle(data){const client=this.client;const channel=client.channels.get(data.channel_id);const ids=data.ids;const messages=new Collection();for(const id of ids){const message=channel.messages.get(id);if(message)messages.set(message.id,message);}
if(messages.size>0)client.emit(Constants.Events.MESSAGE_BULK_DELETE,messages);return{messages,};}}
module.exports=MessageDeleteBulkAction;},{"../../util/Collection":133,"../../util/Constants":134,"./Action":8}],29:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class MessageReactionAdd extends Action{handle(data){const user=this.client.users.get(data.user_id);if(!user)return false;const channel=this.client.channels.get(data.channel_id);if(!channel||channel.type==='voice')return false;const message=channel.messages.get(data.message_id);if(!message)return false;if(!data.emoji)return false;const reaction=message._addReaction(data.emoji,user);if(reaction){this.client.emit(Constants.Events.MESSAGE_REACTION_ADD,reaction,user);}
return{message,reaction,user,};}}
module.exports=MessageReactionAdd;},{"../../util/Constants":134,"./Action":8}],30:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class MessageReactionRemove extends Action{handle(data){const user=this.client.users.get(data.user_id);if(!user)return false;const channel=this.client.channels.get(data.channel_id);if(!channel||channel.type==='voice')return false;const message=channel.messages.get(data.message_id);if(!message)return false;if(!data.emoji)return false;const reaction=message._removeReaction(data.emoji,user);if(reaction){this.client.emit(Constants.Events.MESSAGE_REACTION_REMOVE,reaction,user);}
return{message,reaction,user,};}}
module.exports=MessageReactionRemove;},{"../../util/Constants":134,"./Action":8}],31:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class MessageReactionRemoveAll extends Action{handle(data){const channel=this.client.channels.get(data.channel_id);if(!channel||channel.type==='voice')return false;const message=channel.messages.get(data.message_id);if(!message)return false;message._clearReactions();this.client.emit(Constants.Events.MESSAGE_REACTION_REMOVE_ALL,message);return{message,};}}
module.exports=MessageReactionRemoveAll;},{"../../util/Constants":134,"./Action":8}],32:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');const cloneObject=require('../../util/CloneObject');class MessageUpdateAction extends Action{handle(data){const client=this.client;const channel=client.channels.get(data.channel_id);if(channel){const message=channel.messages.get(data.id);if(message){const oldMessage=cloneObject(message);message.patch(data);message._edits.unshift(oldMessage);client.emit(Constants.Events.MESSAGE_UPDATE,oldMessage,message);return{old:oldMessage,updated:message,};}
return{old:message,updated:message,};}
return{old:null,updated:null,};}}
module.exports=MessageUpdateAction;},{"../../util/CloneObject":132,"../../util/Constants":134,"./Action":8}],33:[function(require,module,exports){const Action=require('./Action');class UserGetAction extends Action{handle(data){const client=this.client;const user=client.dataManager.newUser(data);return{user,};}}
module.exports=UserGetAction;},{"./Action":8}],34:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');class UserNoteUpdateAction extends Action{handle(data){const client=this.client;const oldNote=client.user.notes.get(data.id);const note=data.note.length?data.note:null;client.user.notes.set(data.id,note);client.emit(Constants.Events.USER_NOTE_UPDATE,data.id,oldNote,note);return{old:oldNote,updated:note,};}}
module.exports=UserNoteUpdateAction;},{"../../util/Constants":134,"./Action":8}],35:[function(require,module,exports){const Action=require('./Action');const Constants=require('../../util/Constants');const cloneObject=require('../../util/CloneObject');class UserUpdateAction extends Action{handle(data){const client=this.client;if(client.user){if(client.user.equals(data)){return{old:client.user,updated:client.user,};}
const oldUser=cloneObject(client.user);client.user.patch(data);client.emit(Constants.Events.USER_UPDATE,oldUser,client.user);return{old:oldUser,updated:client.user,};}
return{old:null,updated:null,};}}
module.exports=UserUpdateAction;},{"../../util/CloneObject":132,"../../util/Constants":134,"./Action":8}],36:[function(require,module,exports){const request=require('superagent');const Constants=require('../../util/Constants');function getRoute(url){let route=url.split('?')[0];if(route.includes('/channels/')||route.includes('/guilds/')){const startInd=route.includes('/channels/')?route.indexOf('/channels/'):route.indexOf('/guilds/');const majorID=route.substring(startInd).split('/')[2];route=route.replace(/(\d{8,})/g,':id').replace(':id',majorID);}
return route;}
class APIRequest{constructor(rest,method,url,auth,data,file){this.rest=rest;this.method=method;this.url=url;this.auth=auth;this.data=data;this.file=file;this.route=getRoute(this.url);}
getAuth(){if(this.rest.client.token&&this.rest.client.user&&this.rest.client.user.bot){return`
									Bot $ {
										this.rest.client.token
									}
									`;}else if(this.rest.client.token){return this.rest.client.token;}
throw new Error(Constants.Errors.NO_TOKEN);}
gen(){const apiRequest=request[this.method](this.url);if(this.auth)apiRequest.set('authorization',this.getAuth());if(this.file&&this.file.file){apiRequest.attach('file',this.file.file,this.file.name);this.data=this.data||{};apiRequest.field('payload_json',JSON.stringify(this.data));}else if(this.data){apiRequest.send(this.data);}
if(!this.rest.client.browser)apiRequest.set('User-Agent',this.rest.userAgentManager.userAgent);return apiRequest;}}
module.exports=APIRequest;},{"../../util/Constants":134,"superagent":159}],37:[function(require,module,exports){const UserAgentManager=require('./UserAgentManager');const RESTMethods=require('./RESTMethods');const SequentialRequestHandler=require('./RequestHandlers/Sequential');const BurstRequestHandler=require('./RequestHandlers/Burst');const APIRequest=require('./APIRequest');const Constants=require('../../util/Constants');class RESTManager{constructor(client){this.client=client;this.handlers={};this.userAgentManager=new UserAgentManager(this);this.methods=new RESTMethods(this);this.rateLimitedEndpoints={};this.globallyRateLimited=false;}
push(handler,apiRequest){return new Promise((resolve,reject)=>{handler.push({request:apiRequest,resolve,reject,});});}
getRequestHandler(){switch(this.client.options.apiRequestMethod){case'sequential':return SequentialRequestHandler;case'burst':return BurstRequestHandler;default:throw new Error(Constants.Errors.INVALID_RATE_LIMIT_METHOD);}}
makeRequest(method,url,auth,data,file){const apiRequest=new APIRequest(this,method,url,auth,data,file);if(!this.handlers[apiRequest.route]){const RequestHandlerType=this.getRequestHandler();this.handlers[apiRequest.route]=new RequestHandlerType(this,apiRequest.route);}
return this.push(this.handlers[apiRequest.route],apiRequest);}}
module.exports=RESTManager;},{"../../util/Constants":134,"./APIRequest":36,"./RESTMethods":38,"./RequestHandlers/Burst":39,"./RequestHandlers/Sequential":41,"./UserAgentManager":42}],38:[function(require,module,exports){const Constants=require('../../util/Constants');const Collection=require('../../util/Collection');const splitMessage=require('../../util/SplitMessage');const parseEmoji=require('../../util/ParseEmoji');const escapeMarkdown=require('../../util/EscapeMarkdown');const User=require('../../structures/User');const GuildMember=require('../../structures/GuildMember');const Message=require('../../structures/Message');const Role=require('../../structures/Role');const Invite=require('../../structures/Invite');const Webhook=require('../../structures/Webhook');const UserProfile=require('../../structures/UserProfile');const ClientOAuth2Application=require('../../structures/ClientOAuth2Application');class RESTMethods{constructor(restManager){this.rest=restManager;this.client=restManager.client;}
login(token=this.client.token){return new Promise((resolve,reject)=>{if(typeof token!=='string')throw new Error(Constants.Errors.INVALID_TOKEN);token=token.replace(/^Bot\s*/i,'');this.client.manager.connectToWebSocket(token,resolve,reject);});}
logout(){return this.rest.makeRequest('post',Constants.Endpoints.logout,true,{});}
getGateway(){return this.rest.makeRequest('get',Constants.Endpoints.gateway,true).then(res=>{this.client.ws.gateway=`
									$ {
										res.url
									}
									/?v=${Constants.PROTOCOL_VERSION}`;return this.client.ws.gateway;});}
									getBotGateway() {
										return this.rest.makeRequest('get', Constants.Endpoints.botGateway, true);
									}
									sendMessage(channel, content, {
										tts,
										nonce,
										embed,
										disableEveryone,
										split,
										code
									} = {}, file = null) {
										return new Promise((resolve, reject) => {
											if(typeof content !== 'undefined') content = this.client.resolver.resolveString(content);
											if(content) {
												if(typeof code !== 'undefined' && (typeof code !== 'boolean' || code === true)) {
													content = escapeMarkdown(this.client.resolver.resolveString(content), true);
													content = `\`\`\`${typeof code!=='boolean'?code||'':''}\n${content}\n\`\`\``;
												}
												if(disableEveryone || (typeof disableEveryone === 'undefined' && this.client.options.disableEveryone)) {
													content = content.replace(/@(everyone|here)/g, '@\u200b$1');
												}
												if(split) content = splitMessage(content, typeof split === 'object' ? split : {});
											}
											const send = chan => {
												if(content instanceof Array) {
													const messages = [];
													(function sendChunk(list, index) {
														const options = index === list.length ? {
															tts,
															embed
														} : {
															tts
														};
														chan.send(list[index], options, index === list.length ? file : null).then((message) => {
															messages.push(message);
															if(index >= list.length) return resolve(messages);
															return sendChunk(list, ++index);
														});
													}(content, 0));
												} else {
													this.rest.makeRequest('post', Constants.Endpoints.channelMessages(chan.id), true, {
														content,
														tts,
														nonce,
														embed,
													}, file).then(data => resolve(this.client.actions.MessageCreate.handle(data).message), reject);
												}
											};
											if(channel instanceof User || channel instanceof GuildMember) {
												this.createDM(channel).then(send, reject);
											} else {
												send(channel);
											}
										});
									}
									updateMessage(message, content, {
										embed,
										code
									} = {}) {
										content = this.client.resolver.resolveString(content);
										if(typeof code !== 'undefined' && (typeof code !== 'boolean' || code === true)) {
											content = escapeMarkdown(this.client.resolver.resolveString(content), true);
											content = `\`\`\`${typeof code!=='boolean'?code||'':''}\n${content}\n\`\`\``;
										}
										return this.rest.makeRequest('patch', Constants.Endpoints.channelMessage(message.channel.id, message.id), true, {
											content,
											embed,
										}).then(data => this.client.actions.MessageUpdate.handle(data).updated);
									}
									deleteMessage(message) {
										return this.rest.makeRequest('del', Constants.Endpoints.channelMessage(message.channel.id, message.id), true).then(() => this.client.actions.MessageDelete.handle({
											id: message.id,
											channel_id: message.channel.id,
										}).message);
									}
									bulkDeleteMessages(channel, messages) {
										return this.rest.makeRequest('post', `${Constants.Endpoints.channelMessages(channel.id)}/bulk_delete`, true, {
											messages,
										}).then(() => this.client.actions.MessageDeleteBulk.handle({
											channel_id: channel.id,
											ids: messages,
										}).messages);
									}
									createChannel(guild, channelName, channelType, overwrites) {
										if(overwrites instanceof Collection) overwrites = overwrites.array();
										return this.rest.makeRequest('post', Constants.Endpoints.guildChannels(guild.id), true, {
											name: channelName,
											type: channelType,
											permission_overwrites: overwrites,
										}).then(data => this.client.actions.ChannelCreate.handle(data).channel);
									}
									createDM(recipient) {
										const dmChannel = this.getExistingDM(recipient);
										if(dmChannel) return Promise.resolve(dmChannel);
										return this.rest.makeRequest('post', Constants.Endpoints.userChannels(this.client.user.id), true, {
											recipient_id: recipient.id,
										}).then(data => this.client.actions.ChannelCreate.handle(data).channel);
									}
									getExistingDM(recipient) {
										return this.client.channels.find(channel => channel.recipient && channel.recipient.id === recipient.id);
									}
									deleteChannel(channel) {
										if(channel instanceof User || channel instanceof GuildMember) channel = this.getExistingDM(channel);
										if(!channel) return Promise.reject(new Error('No channel to delete.'));
										return this.rest.makeRequest('del', Constants.Endpoints.channel(channel.id), true).then(data => {
											data.id = channel.id;
											return this.client.actions.ChannelDelete.handle(data).channel;
										});
									}
									updateChannel(channel, _data) {
										const data = {};
										data.name = (_data.name || channel.name).trim();
										data.topic = _data.topic || channel.topic;
										data.position = _data.position || channel.position;
										data.bitrate = _data.bitrate || channel.bitrate;
										data.user_limit = _data.userLimit || channel.userLimit;
										return this.rest.makeRequest('patch', Constants.Endpoints.channel(channel.id), true, data).then(newData => this.client.actions.ChannelUpdate.handle(newData).updated);
									}
									leaveGuild(guild) {
										if(guild.ownerID === this.client.user.id) return Promise.reject(new Error('Guild is owned by the client.'));
										return this.rest.makeRequest('del', Constants.Endpoints.meGuild(guild.id), true).then(() => this.client.actions.GuildDelete.handle({
											id: guild.id
										}).guild);
									}
									createGuild(options) {
										options.icon = this.client.resolver.resolveBase64(options.icon) || null;
										options.region = options.region || 'us-central';
										return new Promise((resolve, reject) => {
											this.rest.makeRequest('post', Constants.Endpoints.guilds, true, options).then(data => {
												if(this.client.guilds.has(data.id)) {
													resolve(this.client.guilds.get(data.id));
													return;
												}
												const handleGuild = guild => {
													if(guild.id === data.id) {
														this.client.removeListener('guildCreate', handleGuild);
														this.client.clearTimeout(timeout);
														resolve(guild);
													}
												};
												this.client.on('guildCreate', handleGuild);
												const timeout = this.client.setTimeout(() => {
													this.client.removeListener('guildCreate', handleGuild);
													reject(new Error('Took too long to receive guild data.'));
												}, 10000);
											}, reject);
										});
									}
									deleteGuild(guild) {
										return this.rest.makeRequest('del', Constants.Endpoints.guild(guild.id), true).then(() => this.client.actions.GuildDelete.handle({
											id: guild.id
										}).guild);
									}
									getUser(userID) {
										return this.rest.makeRequest('get', Constants.Endpoints.user(userID), true).then(data => this.client.actions.UserGet.handle(data).user);
									}
									updateCurrentUser(_data, password) {
										const user = this.client.user;
										const data = {};
										data.username = _data.username || user.username;
										data.avatar = this.client.resolver.resolveBase64(_data.avatar) || user.avatar;
										if(!user.bot) {
											data.email = _data.email || user.email;
											data.password = password;
											if(_data.new_password) data.new_password = _data.newPassword;
										}
										return this.rest.makeRequest('patch', Constants.Endpoints.me, true, data).then(newData => this.client.actions.UserUpdate.handle(newData).updated);
									}
									updateGuild(guild, _data) {
										const data = {};
										if(_data.name) data.name = _data.name;
										if(_data.region) data.region = _data.region;
										if(_data.verificationLevel) data.verification_level = Number(_data.verificationLevel);
										if(_data.afkChannel) data.afk_channel_id = this.client.resolver.resolveChannel(_data.afkChannel).id;
										if(_data.afkTimeout) data.afk_timeout = Number(_data.afkTimeout);
										if(_data.icon) data.icon = this.client.resolver.resolveBase64(_data.icon);
										if(_data.owner) data.owner_id = this.client.resolver.resolveUser(_data.owner).id;
										if(_data.splash) data.splash = this.client.resolver.resolveBase64(_data.splash);
										return this.rest.makeRequest('patch', Constants.Endpoints.guild(guild.id), true, data).then(newData => this.client.actions.GuildUpdate.handle(newData).updated);
									}
									kickGuildMember(guild, member) {
										return this.rest.makeRequest('del', Constants.Endpoints.guildMember(guild.id, member.id), true).then(() => this.client.actions.GuildMemberRemove.handle({
											guild_id: guild.id,
											user: member.user,
										}).member);
									}
									createGuildRole(guild) {
										return this.rest.makeRequest('post', Constants.Endpoints.guildRoles(guild.id), true).then(role => this.client.actions.GuildRoleCreate.handle({
											guild_id: guild.id,
											role,
										}).role);
									}
									deleteGuildRole(role) {
										return this.rest.makeRequest('del', Constants.Endpoints.guildRole(role.guild.id, role.id), true).then(() => this.client.actions.GuildRoleDelete.handle({
											guild_id: role.guild.id,
											role_id: role.id,
										}).role);
									}
									setChannelOverwrite(channel, payload) {
										return this.rest.makeRequest('put', `${Constants.Endpoints.channelPermissions(channel.id)}/${payload.id}`, true, payload);
									}
									deletePermissionOverwrites(overwrite) {
										return this.rest.makeRequest('del', `${Constants.Endpoints.channelPermissions(overwrite.channel.id)}/${overwrite.id}`, true).then(() => overwrite);
									}
									getChannelMessages(channel, payload = {}) {
										const params = [];
										if(payload.limit) params.push(`limit=${payload.limit}`);
										if(payload.around) params.push(`around=${payload.around}`);
										else if(payload.before) params.push(`before=${payload.before}`);
										else if(payload.after) params.push(`after=${payload.after}`);
										let endpoint = Constants.Endpoints.channelMessages(channel.id);
										if(params.length > 0) endpoint += `?${params.join('&')}`;
										return this.rest.makeRequest('get', endpoint, true);
									}
									getChannelMessage(channel, messageID) {
										const msg = channel.messages.get(messageID);
										if(msg) return Promise.resolve(msg);
										return this.rest.makeRequest('get', Constants.Endpoints.channelMessage(channel.id, messageID), true);
									}
									getGuildMember(guild, user) {
										return this.rest.makeRequest('get', Constants.Endpoints.guildMember(guild.id, user.id), true).then(data => this.client.actions.GuildMemberGet.handle(guild, data).member);
									}
									updateGuildMember(member, data) {
										if(data.channel) data.channel_id = this.client.resolver.resolveChannel(data.channel).id;
										if(data.roles) data.roles = data.roles.map(role => role instanceof Role ? role.id : role);
										let endpoint = Constants.Endpoints.guildMember(member.guild.id, member.id);
										if(member.id === this.client.user.id) {
											const keys = Object.keys(data);
											if(keys.length === 1 && keys[0] === 'nick') {
												endpoint = Constants.Endpoints.guildMemberNickname(member.guild.id);
											}
										}
										return this.rest.makeRequest('patch', endpoint, true, data).then(newData => member.guild._updateMember(member, newData).mem);
									}
									addMemberRole(member, role) {
										return this.rest.makeRequest('put', Constants.Endpoints.guildMemberRole(member.guild.id, member.id, role.id), true).then(() => {
											if(!member._roles.includes(role.id)) member._roles.push(role.id);
											return member;
										});
									}
									removeMemberRole(member, role) {
										return this.rest.makeRequest('delete', Constants.Endpoints.guildMemberRole(member.guild.id, member.id, role.id), true).then(() => {
											const index = member._roles.indexOf(role.id);
											if(index >= 0) member._roles.splice(index, 1);
											return member;
										});
									}
									sendTyping(channelID) {
										return this.rest.makeRequest('post', `${Constants.Endpoints.channel(channelID)}/typing`, true);
									}
									banGuildMember(guild, member, deleteDays = 0) {
										const id = this.client.resolver.resolveUserID(member);
										if(!id) return Promise.reject(new Error('Couldn\'t resolve the user ID to ban.'));
										return this.rest.makeRequest('put', `${Constants.Endpoints.guildBans(guild.id)}/${id}?delete-message-days=${deleteDays}`, true, {
											'delete-message-days': deleteDays,
										}).then(() => {
											if(member instanceof GuildMember) return member;
											const user = this.client.resolver.resolveUser(id);
											if(user) {
												member = this.client.resolver.resolveGuildMember(guild, user);
												return member || user;
											}
											return id;
										});
									}
									unbanGuildMember(guild, member) {
										return new Promise((resolve, reject) => {
											const id = this.client.resolver.resolveUserID(member);
											if(!id) throw new Error('Couldn\'t resolve the user ID to unban.');
											const listener = (eGuild, eUser) => {
												if(eGuild.id === guild.id && eUser.id === id) {
													this.client.removeListener(Constants.Events.GUILD_BAN_REMOVE, listener);
													this.client.clearTimeout(timeout);
													resolve(eUser);
												}
											};
											this.client.on(Constants.Events.GUILD_BAN_REMOVE, listener);
											const timeout = this.client.setTimeout(() => {
												this.client.removeListener(Constants.Events.GUILD_BAN_REMOVE, listener);
												reject(new Error('Took too long to receive the ban remove event.'));
											}, 10000);
											this.rest.makeRequest('del', `${Constants.Endpoints.guildBans(guild.id)}/${id}`, true).catch(err => {
												this.client.removeListener(Constants.Events.GUILD_BAN_REMOVE, listener);
												this.client.clearTimeout(timeout);
												reject(err);
											});
										});
									}
									getGuildBans(guild) {
										return this.rest.makeRequest('get', Constants.Endpoints.guildBans(guild.id), true).then(banItems => {
											const bannedUsers = new Collection();
											for(const banItem of banItems) {
												const user = this.client.dataManager.newUser(banItem.user);
												bannedUsers.set(user.id, user);
											}
											return bannedUsers;
										});
									}
									updateGuildRole(role, _data) {
										const data = {};
										data.name = _data.name || role.name;
										data.position = typeof _data.position !== 'undefined' ? _data.position : role.position;
										data.color = _data.color || role.color;
										if(typeof data.color === 'string' && data.color.startsWith('#')) {
											data.color = parseInt(data.color.replace('#', ''), 16);
										}
										data.hoist = typeof _data.hoist !== 'undefined' ? _data.hoist : role.hoist;
										data.mentionable = typeof _data.mentionable !== 'undefined' ? _data.mentionable : role.mentionable;
										if(_data.permissions) {
											let perms = 0;
											for(let perm of _data.permissions) {
												if(typeof perm === 'string') perm = Constants.PermissionFlags[perm];
												perms |= perm;
											}
											data.permissions = perms;
										} else {
											data.permissions = role.permissions;
										}
										return this.rest.makeRequest('patch', Constants.Endpoints.guildRole(role.guild.id, role.id), true, data).then(_role => this.client.actions.GuildRoleUpdate.handle({
											role: _role,
											guild_id: role.guild.id,
										}).updated);
									}
									pinMessage(message) {
										return this.rest.makeRequest('put', `${Constants.Endpoints.channel(message.channel.id)}/pins/${message.id}`, true).then(() => message);
									}
									unpinMessage(message) {
										return this.rest.makeRequest('del', `${Constants.Endpoints.channel(message.channel.id)}/pins/${message.id}`, true).then(() => message);
									}
									getChannelPinnedMessages(channel) {
										return this.rest.makeRequest('get', `${Constants.Endpoints.channel(channel.id)}/pins`, true);
									}
									createChannelInvite(channel, options) {
										const payload = {};
										payload.temporary = options.temporary;
										payload.max_age = options.maxAge;
										payload.max_uses = options.maxUses;
										return this.rest.makeRequest('post', `${Constants.Endpoints.channelInvites(channel.id)}`, true, payload).then(invite => new Invite(this.client, invite));
									}
									deleteInvite(invite) {
										return this.rest.makeRequest('del', Constants.Endpoints.invite(invite.code), true).then(() => invite);
									}
									getInvite(code) {
										return this.rest.makeRequest('get', Constants.Endpoints.invite(code), true).then(invite => new Invite(this.client, invite));
									}
									getGuildInvites(guild) {
										return this.rest.makeRequest('get', Constants.Endpoints.guildInvites(guild.id), true).then(inviteItems => {
											const invites = new Collection();
											for(const inviteItem of inviteItems) {
												const invite = new Invite(this.client, inviteItem);
												invites.set(invite.code, invite);
											}
											return invites;
										});
									}
									pruneGuildMembers(guild, days, dry) {
										return this.rest.makeRequest(dry ? 'get' : 'post', `${Constants.Endpoints.guildPrune(guild.id)}?days=${days}`, true).then(data => data.pruned);
									}
									createEmoji(guild, image, name) {
										return this.rest.makeRequest('post', `${Constants.Endpoints.guildEmojis(guild.id)}`, true, {
											name,
											image
										}).then(data => this.client.actions.EmojiCreate.handle(data, guild).emoji);
									}
									deleteEmoji(emoji) {
										return this.rest.makeRequest('delete', `${Constants.Endpoints.guildEmojis(emoji.guild.id)}/${emoji.id}`, true).then(() => this.client.actions.EmojiDelete.handle(emoji).data);
									}
									getWebhook(id, token) {
										return this.rest.makeRequest('get', Constants.Endpoints.webhook(id, token), !token).then(data => new Webhook(this.client, data));
									}
									getGuildWebhooks(guild) {
										return this.rest.makeRequest('get', Constants.Endpoints.guildWebhooks(guild.id), true).then(data => {
											const hooks = new Collection();
											for(const hook of data) hooks.set(hook.id, new Webhook(this.client, hook));
											return hooks;
										});
									}
									getChannelWebhooks(channel) {
										return this.rest.makeRequest('get', Constants.Endpoints.channelWebhooks(channel.id), true).then(data => {
											const hooks = new Collection();
											for(const hook of data) hooks.set(hook.id, new Webhook(this.client, hook));
											return hooks;
										});
									}
									createWebhook(channel, name, avatar) {
										return this.rest.makeRequest('post', Constants.Endpoints.channelWebhooks(channel.id), true, {
											name,
											avatar
										}).then(data => new Webhook(this.client, data));
									}
									editWebhook(webhook, name, avatar) {
										return this.rest.makeRequest('patch', Constants.Endpoints.webhook(webhook.id, webhook.token), false, {
											name,
											avatar,
										}).then(data => {
											webhook.name = data.name;
											webhook.avatar = data.avatar;
											return webhook;
										});
									}
									deleteWebhook(webhook) {
										return this.rest.makeRequest('delete', Constants.Endpoints.webhook(webhook.id, webhook.token), false);
									}
									sendWebhookMessage(webhook, content, {
										avatarURL,
										tts,
										disableEveryone,
										embeds
									} = {}, file = null) {
										if(typeof content !== 'undefined') content = this.client.resolver.resolveString(content);
										if(content) {
											if(disableEveryone || (typeof disableEveryone === 'undefined' && this.client.options.disableEveryone)) {
												content = content.replace(/@(everyone|here)/g, '@\u200b$1');
											}
										}
										return this.rest.makeRequest('post', `${Constants.Endpoints.webhook(webhook.id,webhook.token)}?wait=true`, false, {
											username: webhook.name,
											avatar_url: avatarURL,
											content,
											tts,
											file,
											embeds,
										});
									}
									sendSlackWebhookMessage(webhook, body) {
										return this.rest.makeRequest('post', `${Constants.Endpoints.webhook(webhook.id,webhook.token)}/slack?wait=true`, false, body);
									}
									fetchUserProfile(user) {
										return this.rest.makeRequest('get', Constants.Endpoints.userProfile(user.id), true).then(data => new UserProfile(user, data));
									}
									fetchMeMentions(options) {
										if(options.guild) options.guild = options.guild.id ? options.guild.id : options.guild;
										return this.rest.makeRequest('get', Constants.Endpoints.meMentions(options.limit, options.roles, options.everyone, options.guild)).then(res => res.body.map(m => new Message(this.client.channels.get(m.channel_id), m, this.client)));
									}
									addFriend(user) {
										return this.rest.makeRequest('post', Constants.Endpoints.relationships('@me'), true, {
											username: user.username,
											discriminator: user.discriminator,
										}).then(() => user);
									}
									removeFriend(user) {
										return this.rest.makeRequest('delete', `${Constants.Endpoints.relationships('@me')}/${user.id}`, true).then(() => user);
									}
									blockUser(user) {
										return this.rest.makeRequest('put', `${Constants.Endpoints.relationships('@me')}/${user.id}`, true, {
											type: 2
										}).then(() => user);
									}
									unblockUser(user) {
										return this.rest.makeRequest('delete', `${Constants.Endpoints.relationships('@me')}/${user.id}`, true).then(() => user);
									}
									setRolePositions(guildID, roles) {
										return this.rest.makeRequest('patch', Constants.Endpoints.guildRoles(guildID), true, roles).then(() => this.client.actions.GuildRolesPositionUpdate.handle({
											guild_id: guildID,
											roles,
										}).guild);
									}
									addMessageReaction(message, emoji) {
										return this.rest.makeRequest('put', Constants.Endpoints.selfMessageReaction(message.channel.id, message.id, emoji), true).then(() => this.client.actions.MessageReactionAdd.handle({
											user_id: this.client.user.id,
											message_id: message.id,
											emoji: parseEmoji(emoji),
											channel_id: message.channel.id,
										}).reaction);
									}
									removeMessageReaction(message, emoji, user) {
										let endpoint = Constants.Endpoints.selfMessageReaction(message.channel.id, message.id, emoji);
										if(user.id !== this.client.user.id) {
											endpoint = Constants.Endpoints.userMessageReaction(message.channel.id, message.id, emoji, null, user.id);
										}
										return this.rest.makeRequest('delete', endpoint, true).then(() => this.client.actions.MessageReactionRemove.handle({
											user_id: user.id,
											message_id: message.id,
											emoji: parseEmoji(emoji),
											channel_id: message.channel.id,
										}).reaction);
									}
									removeMessageReactions(message) {
										return this.rest.makeRequest('delete', Constants.Endpoints.messageReactions(message.channel.id, message.id), true).then(() => message);
									}
									getMessageReactionUsers(message, emoji, limit = 100) {
										return this.rest.makeRequest('get', Constants.Endpoints.messageReaction(message.channel.id, message.id, emoji, limit), true);
									}
									getMyApplication() {
										return this.rest.makeRequest('get', Constants.Endpoints.myApplication, true).then(app => new ClientOAuth2Application(this.client, app));
									}
									setNote(user, note) {
										return this.rest.makeRequest('put', Constants.Endpoints.note(user.id), true, {
											note
										}).then(() => user);
									}
								}
								module.exports = RESTMethods;
							}, {
								"../../structures/ClientOAuth2Application": 101,
								"../../structures/GuildMember": 109,
								"../../structures/Invite": 110,
								"../../structures/Message": 111,
								"../../structures/Role": 123,
								"../../structures/User": 125,
								"../../structures/UserProfile": 127,
								"../../structures/Webhook": 129,
								"../../util/Collection": 133,
								"../../util/Constants": 134,
								"../../util/EscapeMarkdown": 136,
								"../../util/ParseEmoji": 141,
								"../../util/SplitMessage": 142
							}], 39: [function (require, module, exports) {
							const RequestHandler = require('./RequestHandler');
							class BurstRequestHandler extends RequestHandler {
								constructor(restManager, endpoint) {
									super(restManager, endpoint);
									this.requestRemaining = 1;
									this.first = true;
								}
								push(request) {
									super.push(request);
									this.handle();
								}
								handleNext(time) {
									if(this.waiting) return;
									this.waiting = true;
									this.restManager.client.setTimeout(() => {
										this.requestRemaining = this.requestLimit;
										this.waiting = false;
										this.handle();
									}, time);
								}
								execute(item) {
									item.request.gen().end((err, res) => {
										if(res && res.headers) {
											this.requestLimit = res.headers['x-ratelimit-limit'];
											this.requestResetTime = Number(res.headers['x-ratelimit-reset']) * 1000;
											this.requestRemaining = Number(res.headers['x-ratelimit-remaining']);
											this.timeDifference = Date.now() - new Date(res.headers.date).getTime();
											this.handleNext(this.requestResetTime - Date.now() + this.timeDifference + this.restManager.client.options.restTimeOffset);
										}
										if(err) {
											if(err.status === 429) {
												this.requestRemaining = 0;
												this.queue.unshift(item);
												this.restManager.client.setTimeout(() => {
													this.globalLimit = false;
													this.handle();
												}, Number(res.headers['retry-after']) + this.restManager.client.options.restTimeOffset);
												if(res.headers['x-ratelimit-global']) this.globalLimit = true;
											} else {
												item.reject(err);
											}
										} else {
											this.globalLimit = false;
											const data = res && res.body ? res.body : {};
											item.resolve(data);
											if(this.first) {
												this.first = false;
												this.handle();
											}
										}
									});
								}
								handle() {
									super.handle();
									if(this.requestRemaining < 1 || this.queue.length === 0 || this.globalLimit) return;
									while(this.queue.length > 0 && this.requestRemaining > 0) {
										this.execute(this.queue.shift());
										this.requestRemaining--;
									}
								}
							}
							module.exports = BurstRequestHandler;
						}, {
							"./RequestHandler": 40
						}], 40: [function (require, module, exports) {
							class RequestHandler {
								constructor(restManager) {
									this.restManager = restManager;
									this.queue = [];
								}
								get globalLimit() {
									return this.restManager.globallyRateLimited;
								}
								set globalLimit(value) {
									this.restManager.globallyRateLimited = value;
								}
								push(request) {
									this.queue.push(request);
								}
								handle() {
									return;
								}
							}
							module.exports = RequestHandler;
						}, {}], 41: [function (require, module, exports) {
							const RequestHandler = require('./RequestHandler');
							class SequentialRequestHandler extends RequestHandler {
								constructor(restManager, endpoint) {
									super(restManager, endpoint);
									this.waiting = false;
									this.endpoint = endpoint;
									this.timeDifference = 0;
								}
								push(request) {
									super.push(request);
									this.handle();
								}
								execute(item) {
									return new Promise(resolve => {
										item.request.gen().end((err, res) => {
											if(res && res.headers) {
												this.requestLimit = res.headers['x-ratelimit-limit'];
												this.requestResetTime = Number(res.headers['x-ratelimit-reset']) * 1000;
												this.requestRemaining = Number(res.headers['x-ratelimit-remaining']);
												this.timeDifference = Date.now() - new Date(res.headers.date).getTime();
											}
											if(err) {
												if(err.status === 429) {
													this.restManager.client.setTimeout(() => {
														this.waiting = false;
														this.globalLimit = false;
														resolve();
													}, Number(res.headers['retry-after']) + this.restManager.client.options.restTimeOffset);
													if(res.headers['x-ratelimit-global']) this.globalLimit = true;
												} else {
													this.queue.shift();
													this.waiting = false;
													item.reject(err);
													resolve(err);
												}
											} else {
												this.queue.shift();
												this.globalLimit = false;
												const data = res && res.body ? res.body : {};
												item.resolve(data);
												if(this.requestRemaining === 0) {
													this.restManager.client.setTimeout(() => {
														this.waiting = false;
														resolve(data);
													}, this.requestResetTime - Date.now() + this.timeDifference + this.restManager.client.options.restTimeOffset);
												} else {
													this.waiting = false;
													resolve(data);
												}
											}
										});
									});
								}
								handle() {
									super.handle();
									if(this.waiting || this.queue.length === 0 || this.globalLimit) return;
									this.waiting = true;
									const item = this.queue[0];
									this.execute(item).then(() => this.handle());
								}
							}
							module.exports = SequentialRequestHandler;
						}, {
							"./RequestHandler": 40
						}], 42: [function (require, module, exports) {
							const Constants = require('../../util/Constants');
							class UserAgentManager {
								constructor(restManager) {
									this.restManager = restManager;
									this._userAgent = {
										url: 'https://github.com/hydrabolt/discord.js',
										version: Constants.Package.version,
									};
								}
								set(info) {
									this._userAgent.url = info.url || 'https://github.com/hydrabolt/discord.js';
									this._userAgent.version = info.version || Constants.Package.version;
								}
								get userAgent() {
									return `DiscordBot(${this._userAgent.url},${this._userAgent.version})`;
								}
							}
							module.exports = UserAgentManager;
						}, {
							"../../util/Constants": 134
						}], 43: [function (require, module, exports) {
							const Collection = require('../../util/Collection');
							const mergeDefault = require('../../util/MergeDefault');
							const Constants = require('../../util/Constants');
							const VoiceConnection = require('./VoiceConnection');
							const EventEmitter = require('events').EventEmitter;
							class ClientVoiceManager {
								constructor(client) {
									this.client = client;
									this.connections = new Collection();
									this.pending = new Collection();
									this.client.on('self.voiceServer', this.onVoiceServer.bind(this));
									this.client.on('self.voiceStateUpdate', this.onVoiceStateUpdate.bind(this));
								}
								onVoiceServer(data) {
									if(this.pending.has(data.guild_id)) this.pending.get(data.guild_id).setTokenAndEndpoint(data.token, data.endpoint);
								}
								onVoiceStateUpdate(data) {
									if(this.pending.has(data.guild_id)) this.pending.get(data.guild_id).setSessionID(data.session_id);
								}
								sendVoiceStateUpdate(channel, options = {}) {
									if(!this.client.user) throw new Error('Unable to join because there is no client user.');
									if(!channel.permissionsFor) {
										throw new Error('Channel does not support permissionsFor; is it really a voice channel?');
									}
									const permissions = channel.permissionsFor(this.client.user);
									if(!permissions) {
										throw new Error('There is no permission set for the client user in this channel - are they part of the guild?');
									}
									if(!permissions.hasPermission('CONNECT')) {
										throw new Error('You do not have permission to join this voice channel.');
									}
									options = mergeDefault({
										guild_id: channel.guild.id,
										channel_id: channel.id,
										self_mute: false,
										self_deaf: false,
									}, options);
									this.client.ws.send({
										op: Constants.OPCodes.VOICE_STATE_UPDATE,
										d: options,
									});
								}
								joinChannel(channel) {
									return new Promise((resolve, reject) => {
										if(this.pending.get(channel.guild.id)) throw new Error('Already connecting to this guild\'s voice server.');
										if(!channel.joinable) throw new Error('You do not have permission to join this voice channel.');
										const existingConnection = this.connections.get(channel.guild.id);
										if(existingConnection) {
											if(existingConnection.channel.id !== channel.id) {
												this.sendVoiceStateUpdate(channel);
												this.connections.get(channel.guild.id).channel = channel;
											}
											resolve(existingConnection);
											return;
										}
										const pendingConnection = new PendingVoiceConnection(this, channel);
										this.pending.set(channel.guild.id, pendingConnection);
										pendingConnection.on('fail', reason => {
											this.pending.delete(channel.guild.id);
											reject(reason);
										});
										pendingConnection.on('pass', voiceConnection => {
											this.pending.delete(channel.guild.id);
											this.connections.set(channel.guild.id, voiceConnection);
											voiceConnection.once('ready', () => resolve(voiceConnection));
											voiceConnection.once('error', reject);
											voiceConnection.once('disconnect', () => this.connections.delete(channel.guild.id));
										});
									});
								}
							}
							class PendingVoiceConnection extends EventEmitter {
								constructor(voiceManager, channel) {
									super();
									this.voiceManager = voiceManager;
									this.channel = channel;
									this.deathTimer = this.voiceManager.client.setTimeout(() => this.fail(new Error('Connection not established within 15 seconds.')), 15000);
									this.data = {};
									this.sendVoiceStateUpdate();
								}
								checkReady() {
									if(this.data.token && this.data.endpoint && this.data.session_id) {
										this.pass();
										return true;
									} else {
										return false;
									}
								}
								setTokenAndEndpoint(token, endpoint) {
									if(!token) {
										this.fail(new Error('Token not provided from voice server packet.'));
										return;
									}
									if(!endpoint) {
										this.fail(new Error('Endpoint not provided from voice server packet.'));
										return;
									}
									if(this.data.token) {
										this.fail(new Error('There is already a registered token for this connection.'));
										return;
									}
									if(this.data.endpoint) {
										this.fail(new Error('There is already a registered endpoint for this connection.'));
										return;
									}
									endpoint = endpoint.match(/([^:]*)/)[0];
									if(!endpoint) {
										this.fail(new Error('Failed to find an endpoint.'));
										return;
									}
									this.data.token = token;
									this.data.endpoint = endpoint;
									this.checkReady();
								}
								setSessionID(sessionID) {
									if(!sessionID) {
										this.fail(new Error('Session ID not supplied.'));
										return;
									}
									if(this.data.session_id) {
										this.fail(new Error('There is already a registered session ID for this connection.'));
										return;
									}
									this.data.session_id = sessionID;
									this.checkReady();
								}
								clean() {
									clearInterval(this.deathTimer);
									this.emit('fail', new Error('Clean-up triggered :fourTriggered:'));
								}
								pass() {
									clearInterval(this.deathTimer);
									this.emit('pass', this.upgrade());
								}
								fail(reason) {
									this.emit('fail', reason);
									this.clean();
								}
								sendVoiceStateUpdate() {
									try {
										this.voiceManager.sendVoiceStateUpdate(this.channel);
									} catch(error) {
										this.fail(error);
									}
								}
								upgrade() {
									return new VoiceConnection(this);
								}
							}
							module.exports = ClientVoiceManager;
						}, {
							"../../util/Collection": 133,
							"../../util/Constants": 134,
							"../../util/MergeDefault": 140,
							"./VoiceConnection": 44,
							"events": 175
						}], 44: [function (require, module, exports) {
							const VoiceWebSocket = require('./VoiceWebSocket');
							const VoiceUDP = require('./VoiceUDPClient');
							const Constants = require('../../util/Constants');
							const AudioPlayer = require('./player/AudioPlayer');
							const VoiceReceiver = require('./receiver/VoiceReceiver');
							const EventEmitter = require('events').EventEmitter;
							const fs = require('fs');
							class VoiceConnection extends EventEmitter {
								constructor(pendingConnection) {
									super();
									this.voiceManager = pendingConnection.voiceManager;
									this.channel = pendingConnection.channel;
									this.speaking = false;
									this.receivers = [];
									this.authentication = pendingConnection.data;
									this.player = new AudioPlayer(this);
									this.player.on('debug', m => {
										this.emit('debug', `audio player-${m}`);
									});
									this.player.on('error', e => {
										this.emit('warn', e);
										this.player.cleanup();
									});
									this.ssrcMap = new Map();
									this.ready = false;
									this.sockets = {};
									this.connect();
								}
								setSpeaking(value) {
									if(this.speaking === value) return;
									this.speaking = value;
									this.sockets.ws.sendPacket({
										op: Constants.VoiceOPCodes.SPEAKING,
										d: {
											speaking: true,
											delay: 0,
										},
									}).catch(e => {
										this.emit('debug', e);
									});
								}
								disconnect() {
									this.emit('closing');
									this.voiceManager.client.ws.send({
										op: Constants.OPCodes.VOICE_STATE_UPDATE,
										d: {
											guild_id: this.channel.guild.id,
											channel_id: null,
											self_mute: false,
											self_deaf: false,
										},
									});
									this.emit('disconnect');
								}
								connect() {
									if(this.sockets.ws) throw new Error('There is already an existing WebSocket connection.');
									if(this.sockets.udp) throw new Error('There is already an existing UDP connection.');
									this.sockets.ws = new VoiceWebSocket(this);
									this.sockets.udp = new VoiceUDP(this);
									this.sockets.ws.on('error', e => this.emit('error', e));
									this.sockets.udp.on('error', e => this.emit('error', e));
									this.sockets.ws.once('ready', d => {
										this.authentication.port = d.port;
										this.authentication.ssrc = d.ssrc;
										this.sockets.udp.findEndpointAddress().then(address => {
											this.sockets.udp.createUDPSocket(address);
										}, e => this.emit('error', e));
									});
									this.sockets.ws.once('sessionDescription', (mode, secret) => {
										this.authentication.encryptionMode = mode;
										this.authentication.secretKey = secret;
										this.emit('ready');
										this.ready = true;
									});
									this.sockets.ws.on('speaking', data => {
										const guild = this.channel.guild;
										const user = this.voiceManager.client.users.get(data.user_id);
										this.ssrcMap.set(+data.ssrc, user);
										if(!data.speaking) {
											for(const receiver of this.receivers) {
												const opusStream = receiver.opusStreams.get(user.id);
												const pcmStream = receiver.pcmStreams.get(user.id);
												if(opusStream) {
													opusStream.push(null);
													opusStream.open = false;
													receiver.opusStreams.delete(user.id);
												}
												if(pcmStream) {
													pcmStream.push(null);
													pcmStream.open = false;
													receiver.pcmStreams.delete(user.id);
												}
											}
										}
										if(this.ready) this.emit('speaking', user, data.speaking);
										guild._memberSpeakUpdate(data.user_id, data.speaking);
									});
								}
								playFile(file, options) {
									return this.playStream(fs.createReadStream(file), options);
								}
								playStream(stream, {
									seek = 0,
									volume = 1,
									passes = 1
								} = {}) {
									const options = {
										seek,
										volume,
										passes
									};
									return this.player.playUnknownStream(stream, options);
								}
								playConvertedStream(stream, {
									seek = 0,
									volume = 1,
									passes = 1
								} = {}) {
									const options = {
										seek,
										volume,
										passes
									};
									return this.player.playPCMStream(stream, null, options);
								}
								createReceiver() {
									const receiver = new VoiceReceiver(this);
									this.receivers.push(receiver);
									return receiver;
								}
							}
							module.exports = VoiceConnection;
						}, {
							"../../util/Constants": 134,
							"./VoiceUDPClient": 45,
							"./VoiceWebSocket": 46,
							"./player/AudioPlayer": 55,
							"./receiver/VoiceReceiver": 57,
							"events": 175,
							"fs": 166
						}], 45: [function (require, module, exports) {
							(function (Buffer) {
								const udp = require('dgram');
								const dns = require('dns');
								const Constants = require('../../util/Constants');
								const EventEmitter = require('events').EventEmitter;
								class VoiceConnectionUDPClient extends EventEmitter {
									constructor(voiceConnection) {
										super();
										this.voiceConnection = voiceConnection;
										this.socket = null;
										this.discordAddress = null;
										this.localAddress = null;
										this.localPort = null;
										this.voiceConnection.on('closing', this.shutdown.bind(this));
									}
									shutdown() {
										if(this.socket) {
											try {
												this.socket.close();
											} catch(e) {
												return;
											}
											this.socket = null;
										}
									}
									get discordPort() {
										return this.voiceConnection.authentication.port;
									}
									findEndpointAddress() {
										return new Promise((resolve, reject) => {
											dns.lookup(this.voiceConnection.authentication.endpoint, (error, address) => {
												if(error) {
													reject(error);
													return;
												}
												this.discordAddress = address;
												resolve(address);
											});
										});
									}
									send(packet) {
										return new Promise((resolve, reject) => {
											if(!this.socket) throw new Error('Tried to send a UDP packet, but there is no socket available.');
											if(!this.discordAddress || !this.discordPort) throw new Error('Malformed UDP address or port.');
											this.socket.send(packet, 0, packet.length, this.discordPort, this.discordAddress, error => {
												if(error) reject(error);
												else resolve(packet);
											});
										});
									}
									createUDPSocket(address) {
										this.discordAddress = address;
										const socket = this.socket = udp.createSocket('udp4');
										socket.once('message', message => {
											const packet = parseLocalPacket(message);
											if(packet.error) {
												this.emit('error', packet.error);
												return;
											}
											this.localAddress = packet.address;
											this.localPort = packet.port;
											this.voiceConnection.sockets.ws.sendPacket({
												op: Constants.VoiceOPCodes.SELECT_PROTOCOL,
												d: {
													protocol: 'udp',
													data: {
														address: packet.address,
														port: packet.port,
														mode: 'xsalsa20_poly1305',
													},
												},
											});
										});
										const blankMessage = new Buffer(70);
										blankMessage.writeUIntBE(this.voiceConnection.authentication.ssrc, 0, 4);
										this.send(blankMessage);
									}
								}

								function parseLocalPacket(message) {
									try {
										const packet = new Buffer(message);
										let address = '';
										for(let i = 4; i < packet.indexOf(0, i); i++) address += String.fromCharCode(packet[i]);
										const port = parseInt(packet.readUIntLE(packet.length - 2, 2).toString(10), 10);
										return {
											address,
											port
										};
									} catch(error) {
										return {
											error
										};
									}
								}
								module.exports = VoiceConnectionUDPClient;
							}).call(this, require("buffer").Buffer)
						}, {
							"../../util/Constants": 134,
							"buffer": 173,
							"dgram": 166,
							"dns": 166,
							"events": 175
						}], 46: [function (require, module, exports) {
							const Constants = require('../../util/Constants');
							const SecretKey = require('./util/SecretKey');
							const EventEmitter = require('events').EventEmitter;
							let WebSocket;
							try {
								WebSocket = require('uws');
							} catch(err) {
								WebSocket = require('ws');
							}
							class VoiceWebSocket extends EventEmitter {
								constructor(voiceConnection) {
									super();
									this.voiceConnection = voiceConnection;
									this.attempts = 0;
									this.connect();
									this.dead = false;
									this.voiceConnection.on('closing', this.shutdown.bind(this));
								}
								shutdown() {
									this.dead = true;
									this.reset();
								}
								get client() {
									return this.voiceConnection.voiceManager.client;
								}
								reset() {
									if(this.ws) {
										if(this.ws.readyState !== WebSocket.CLOSED) this.ws.close();
										this.ws = null;
									}
									this.clearHeartbeat();
								}
								connect() {
									if(this.dead) return;
									if(this.ws) this.reset();
									if(this.attempts > 5) {
										this.emit('error', new Error(`Too many connection attempts(${this.attempts}).`));
										return;
									}
									this.attempts++;
									this.ws = new WebSocket(`wss:this.ws.onopen=this.onOpen.bind(this);this.ws.onmessage=this.onMessage.bind(this);this.ws.onclose=this.onClose.bind(this);this.ws.onerror=this.onError.bind(this);}
send(data){return new Promise((resolve,reject)=>{if(!this.ws||this.ws.readyState!==WebSocket.OPEN){throw new Error(`
										Voice websocket not open to send $ {
											data
										}.
										`);}
this.ws.send(data,null,error=>{if(error)reject(error);else resolve(data);});});}
sendPacket(packet){try{packet=JSON.stringify(packet);}catch(error){return Promise.reject(error);}
return this.send(packet);}
onOpen(){this.sendPacket({op:Constants.OPCodes.DISPATCH,d:{server_id:this.voiceConnection.channel.guild.id,user_id:this.client.user.id,token:this.voiceConnection.authentication.token,session_id:this.voiceConnection.authentication.session_id,},}).catch(()=>{this.emit('error',new Error('Tried to send join packet, but the WebSocket is not open.'));});}
onMessage(event){try{return this.onPacket(JSON.parse(event.data));}catch(error){return this.onError(error);}}
onClose(){if(!this.dead)this.client.setTimeout(this.connect.bind(this),this.attempts*1000);}
onError(error){this.emit('error',error);}
onPacket(packet){switch(packet.op){case Constants.VoiceOPCodes.READY:this.setHeartbeat(packet.d.heartbeat_interval);this.emit('ready',packet.d);break;case Constants.VoiceOPCodes.SESSION_DESCRIPTION:this.emit('sessionDescription',packet.d.mode,new SecretKey(packet.d.secret_key));break;case Constants.VoiceOPCodes.SPEAKING:this.emit('speaking',packet.d);break;default:this.emit('unknownPacket',packet);break;}}
setHeartbeat(interval){if(!interval||isNaN(interval)){this.onError(new Error('Tried to set voice heartbeat but no valid interval was specified.'));return;}
if(this.heartbeatInterval){this.emit('warn','A voice heartbeat interval is being overwritten');clearInterval(this.heartbeatInterval);}
this.heartbeatInterval=this.client.setInterval(this.sendHeartbeat.bind(this),interval);}
clearHeartbeat(){if(!this.heartbeatInterval){this.emit('warn','Tried to clear a heartbeat interval that does not exist');return;}
clearInterval(this.heartbeatInterval);this.heartbeatInterval=null;}
sendHeartbeat(){this.sendPacket({op:Constants.VoiceOPCodes.HEARTBEAT,d:null}).catch(()=>{this.emit('warn','Tried to send heartbeat, but connection is not open');this.clearHeartbeat();});}}
module.exports=VoiceWebSocket;},{"../../util/Constants":134,"./util/SecretKey":58,"events":175,"uws":169,"ws":169}],47:[function(require,module,exports){(function(Buffer){const EventEmitter=require('events').EventEmitter;const NaCl=require('tweetnacl');const nonce=new Buffer(24);nonce.fill(0);class StreamDispatcher extends EventEmitter{constructor(player,stream,sd,streamOptions){super();this.player=player;this.stream=stream;this.streamingData={channels:2,count:0,sequence:sd.sequence,timestamp:sd.timestamp,pausedTime:0,};this._startStreaming();this._triggered=false;this._volume=streamOptions.volume;this.passes=streamOptions.passes||1;this.paused=false;this.setVolume(streamOptions.volume||1);}
get time(){return this.streamingData.count*(this.streamingData.length||0);}
get totalStreamTime(){return this.time+this.streamingData.pausedTime;}
get volume(){return this._volume;}
setVolume(volume){this._volume=volume;}
setVolumeDecibels(db){this._volume=Math.pow(10,db / 20);}
setVolumeLogarithmic(value){this._volume=Math.pow(value,1.660964);}
pause(){this._setPaused(true);}
resume(){this._setPaused(false);}
end(reason='user'){this._triggerTerminalState('end',reason);}
_setSpeaking(value){this.speaking=value;this.emit('speaking',value);}
_sendBuffer(buffer,sequence,timestamp){let repeats=this.passes;const packet=this._createPacket(sequence,timestamp,this.player.opusEncoder.encode(buffer));while(repeats--){this.player.voiceConnection.sockets.udp.send(packet).catch(e=>this.emit('debug',`
										Failed to send a packet $ {
											e
										}
										`));}}
_createPacket(sequence,timestamp,buffer){const packetBuffer=new Buffer(buffer.length+28);packetBuffer.fill(0);packetBuffer[0]=0x80;packetBuffer[1]=0x78;packetBuffer.writeUIntBE(sequence,2,2);packetBuffer.writeUIntBE(timestamp,4,4);packetBuffer.writeUIntBE(this.player.voiceConnection.authentication.ssrc,8,4);packetBuffer.copy(nonce,0,0,12);buffer=NaCl.secretbox(buffer,nonce,this.player.voiceConnection.authentication.secretKey.key);for(let i=0;i<buffer.length;i++)packetBuffer[i+12]=buffer[i];return packetBuffer;}
_applyVolume(buffer){if(this._volume===1)return buffer;const out=new Buffer(buffer.length);for(let i=0;i<buffer.length;i+=2){if(i>=buffer.length-1)break;const uint=Math.min(32767,Math.max(-32767,Math.floor(this._volume*buffer.readInt16LE(i))));out.writeInt16LE(uint,i);}
return out;}
_send(){try{if(this._triggered){this._setSpeaking(false);return;}
const data=this.streamingData;if(data.missed>=5){this._triggerTerminalState('end','Stream is not generating quickly enough.');return;}
if(this.paused){data.pausedTime+=data.length*10;this.player.voiceConnection.voiceManager.client.setTimeout(()=>this._send(),data.length*10);return;}
this._setSpeaking(true);if(!data.startTime){this.emit('start');data.startTime=Date.now();}
const bufferLength=1920*data.channels;let buffer=this.stream.read(bufferLength);if(!buffer){data.missed++;data.pausedTime+=data.length*10;this.player.voiceConnection.voiceManager.client.setTimeout(()=>this._send(),data.length*10);return;}
data.missed=0;if(buffer.length!==bufferLength){const newBuffer=new Buffer(bufferLength).fill(0);buffer.copy(newBuffer);buffer=newBuffer;}
buffer=this._applyVolume(buffer);data.count++;data.sequence=(data.sequence+1)<65536?data.sequence+1:0;data.timestamp=data.timestamp+4294967295?data.timestamp+960:0;this._sendBuffer(buffer,data.sequence,data.timestamp);const nextTime=data.length+(data.startTime+data.pausedTime+(data.count*data.length)-Date.now());this.player.voiceConnection.voiceManager.client.setTimeout(()=>this._send(),nextTime);}catch(e){this._triggerTerminalState('error',e);}}
_triggerEnd(reason){this.emit('end',reason);}
_triggerError(err){this.emit('end');this.emit('error',err);}
_triggerTerminalState(state,err){if(this._triggered)return;this.emit('debug',`
										Triggered terminal state $ {
											state
										} - stream is now dead `);this._triggered=true;this._setSpeaking(false);switch(state){case'end':this._triggerEnd(err);break;case'error':this._triggerError(err);break;default:this.emit('error','Unknown trigger state');break;}}
_startStreaming(){if(!this.stream){this.emit('error','No stream');return;}
this.stream.on('end',err=>this._triggerTerminalState('end',err||'stream'));this.stream.on('error',err=>this._triggerTerminalState('error',err));const data=this.streamingData;data.length=20;data.missed=0;this.stream.once('readable',()=>this._send());}
_setPaused(paused){if(paused){this.paused=true;this._setSpeaking(false);}else{this.paused=false;this._setSpeaking(true);}}}
module.exports=StreamDispatcher;}).call(this,require("buffer").Buffer)},{"buffer":173,"events":175,"tweetnacl":165}],48:[function(require,module,exports){class BaseOpus{constructor(player){this.player=player;}
encode(buffer){return buffer;}
decode(buffer){return buffer;}}
module.exports=BaseOpus;},{}],49:[function(require,module,exports){const OpusEngine=require('./BaseOpusEngine');let opus;class NodeOpusEngine extends OpusEngine{constructor(player){super(player);try{opus=require('node-opus');}catch(err){throw err;}
this.encoder=new opus.OpusEncoder(48000,2);}
encode(buffer){super.encode(buffer);return this.encoder.encode(buffer,1920);}
decode(buffer){super.decode(buffer);return this.encoder.decode(buffer,1920);}}
module.exports=NodeOpusEngine;},{"./BaseOpusEngine":48,"node-opus":169}],50:[function(require,module,exports){const list=[require('./NodeOpusEngine'),require('./OpusScriptEngine'),];function fetch(Encoder){try{return new Encoder();}catch(err){return null;}}
exports.add=encoder=>{list.push(encoder);};exports.fetch=()=>{for(const encoder of list){const fetched=fetch(encoder);if(fetched)return fetched;}
throw new Error('Couldn\'t find an Opus engine.');};},{"./NodeOpusEngine":49,"./OpusScriptEngine":51}],51:[function(require,module,exports){const OpusEngine=require('./BaseOpusEngine');let OpusScript;class NodeOpusEngine extends OpusEngine{constructor(player){super(player);try{OpusScript=require('opusscript');}catch(err){throw err;}
this.encoder=new OpusScript(48000,2);}
encode(buffer){super.encode(buffer);return this.encoder.encode(buffer,960);}
decode(buffer){super.decode(buffer);return this.encoder.decode(buffer);}}
module.exports=NodeOpusEngine;},{"./BaseOpusEngine":48,"opusscript":169}],52:[function(require,module,exports){const EventEmitter=require('events').EventEmitter;class ConverterEngine extends EventEmitter{constructor(player){super();this.player=player;}
createConvertStream(){return;}}
module.exports=ConverterEngine;},{"events":175}],53:[function(require,module,exports){exports.fetch=()=>require('./FfmpegConverterEngine');},{"./FfmpegConverterEngine":54}],54:[function(require,module,exports){const ConverterEngine=require('./ConverterEngine');const ChildProcess=require('child_process');const EventEmitter=require('events').EventEmitter;class PCMConversionProcess extends EventEmitter{constructor(process){super();this.process=process;this.input=null;this.process.on('error',e=>this.emit('error',e));}
setInput(stream){this.input=stream;stream.pipe(this.process.stdin,{end:false});this.input.on('error',e=>this.emit('error',e));this.process.stdin.on('error',e=>this.emit('error',e));}
destroy(){this.emit('debug','destroying a ffmpeg process:');if(this.input&&this.input.unpipe&&this.process.stdin){this.input.unpipe(this.process.stdin);this.emit('unpiped the user input stream from the process input stream');}
if(this.process.stdin){this.process.stdin.end();this.emit('ended the process stdin');}
if(this.process.stdin.destroy){this.process.stdin.destroy();this.emit('destroyed the process stdin');}
if(this.process.kill){this.process.kill();this.emit('killed the process');}}}
class FfmpegConverterEngine extends ConverterEngine{constructor(player){super(player);this.command=chooseCommand();}
handleError(encoder,err){if(encoder.destroy)encoder.destroy();this.emit('error',err);}
createConvertStream(seek=0){super.createConvertStream();const encoder=ChildProcess.spawn(this.command,['-analyzeduration','0','-loglevel','0','-i','-','-f','s16le','-ar','48000','-ac','2','-ss',String(seek),'pipe:1',],{stdio:['pipe','pipe','ignore']});return new PCMConversionProcess(encoder);}}
function chooseCommand(){for(const cmd of['ffmpeg','avconv','./ffmpeg','./avconv','node_modules\\ffmpeg-binaries\\bin\\ffmpeg','node_modules/ffmpeg-binaries/bin/ffmpeg',]){if(!ChildProcess.spawnSync(cmd,['-h']).error)return cmd;}
throw new Error('FFMPEG was not found on your system, so audio cannot be played. '+'Please make sure FFMPEG is installed and in your PATH.');}
module.exports=FfmpegConverterEngine;},{"./ConverterEngine":52,"child_process":166,"events":175}],55:[function(require,module,exports){const PCMConverters=require('../pcm/ConverterEngineList');const OpusEncoders=require('../opus/OpusEngineList');const EventEmitter=require('events').EventEmitter;const StreamDispatcher=require('../dispatcher/StreamDispatcher');class AudioPlayer extends EventEmitter{constructor(voiceConnection){super();this.voiceConnection=voiceConnection;this.audioToPCM=new(PCMConverters.fetch())();this.opusEncoder=OpusEncoders.fetch();this.currentConverter=null;this.dispatcher=null;this.audioToPCM.on('error',e=>this.emit('error',e));this.streamingData={channels:2,count:0,sequence:0,timestamp:0,pausedTime:0,};this.voiceConnection.on('closing',()=>this.cleanup(null,'voice connection closing'));}
playUnknownStream(stream,{seek=0,volume=1,passes=1}={}){const options={seek,volume,passes};stream.on('end',()=>{this.emit('debug','Input stream to converter has ended');});stream.on('error',e=>this.emit('error',e));const conversionProcess=this.audioToPCM.createConvertStream(options.seek);conversionProcess.on('error',e=>this.emit('error',e));conversionProcess.setInput(stream);return this.playPCMStream(conversionProcess.process.stdout,conversionProcess,options);}
cleanup(checkStream,reason){this.emit('debug',`
										Clean up triggered due to $ {
											reason
										}
										`);const filter=checkStream&&this.dispatcher&&this.dispatcher.stream===checkStream;if(this.currentConverter&&(checkStream?filter:true)){this.currentConverter.destroy();this.currentConverter=null;}}
playPCMStream(stream,converter,{seek=0,volume=1,passes=1}={}){const options={seek,volume,passes};stream.on('end',()=>this.emit('debug','PCM input stream ended'));this.cleanup(null,'outstanding play stream');this.currentConverter=converter;if(this.dispatcher){this.streamingData=this.dispatcher.streamingData;}
stream.on('error',e=>this.emit('error',e));const dispatcher=new StreamDispatcher(this,stream,this.streamingData,options);dispatcher.on('error',e=>this.emit('error',e));dispatcher.on('end',()=>this.cleanup(dispatcher.stream,'dispatcher ended'));dispatcher.on('speaking',value=>this.voiceConnection.setSpeaking(value));this.dispatcher=dispatcher;dispatcher.on('debug',m=>this.emit('debug',`
										Stream dispatch - $ {
											m
										}
										`));return dispatcher;}}
module.exports=AudioPlayer;},{"../dispatcher/StreamDispatcher":47,"../opus/OpusEngineList":50,"../pcm/ConverterEngineList":53,"events":175}],56:[function(require,module,exports){const Readable=require('stream').Readable;class VoiceReadable extends Readable{constructor(){super();this._packets=[];this.open=true;}
_read(){return;}
_push(d){if(this.open)this.push(d);}}
module.exports=VoiceReadable;},{"stream":207}],57:[function(require,module,exports){(function(Buffer){const EventEmitter=require('events').EventEmitter;const NaCl=require('tweetnacl');const Readable=require('./VoiceReadable');const nonce=new Buffer(24);nonce.fill(0);class VoiceReceiver extends EventEmitter{constructor(connection){super();this.queues=new Map();this.pcmStreams=new Map();this.opusStreams=new Map();this.destroyed=false;this.voiceConnection=connection;this._listener=msg=>{const ssrc=+msg.readUInt32BE(8).toString(10);const user=this.voiceConnection.ssrcMap.get(ssrc);if(!user){if(!this.queues.has(ssrc))this.queues.set(ssrc,[]);this.queues.get(ssrc).push(msg);}else{if(this.queues.get(ssrc)){this.queues.get(ssrc).push(msg);this.queues.get(ssrc).map(m=>this.handlePacket(m,user));this.queues.delete(ssrc);return;}
this.handlePacket(msg,user);}};this.voiceConnection.sockets.udp.socket.on('message',this._listener);}
recreate(){if(!this.destroyed)return;this.voiceConnection.sockets.udp.socket.on('message',this._listener);this.destroyed=false;return;}
destroy(){this.voiceConnection.sockets.udp.socket.removeListener('message',this._listener);for(const stream of this.pcmStreams){stream[1]._push(null);this.pcmStreams.delete(stream[0]);}
for(const stream of this.opusStreams){stream[1]._push(null);this.opusStreams.delete(stream[0]);}
this.destroyed=true;}
createOpusStream(user){user=this.voiceConnection.voiceManager.client.resolver.resolveUser(user);if(!user)throw new Error('Couldn\'t resolve the user to create Opus stream.');if(this.opusStreams.get(user.id))throw new Error('There is already an existing stream for that user.');const stream=new Readable();this.opusStreams.set(user.id,stream);return stream;}
createPCMStream(user){user=this.voiceConnection.voiceManager.client.resolver.resolveUser(user);if(!user)throw new Error('Couldn\'t resolve the user to create PCM stream.');if(this.pcmStreams.get(user.id))throw new Error('There is already an existing stream for that user.');const stream=new Readable();this.pcmStreams.set(user.id,stream);return stream;}
handlePacket(msg,user){msg.copy(nonce,0,0,12);let data=NaCl.secretbox.open(msg.slice(12),nonce,this.voiceConnection.authentication.secretKey.key);if(!data){this.emit('warn','Failed to decrypt voice packet');return;}
data=new Buffer(data);if(this.opusStreams.get(user.id))this.opusStreams.get(user.id)._push(data);this.emit('opus',user,data);if(this.listenerCount('pcm')>0||this.pcmStreams.size>0){const pcm=this.voiceConnection.player.opusEncoder.decode(data);if(this.pcmStreams.get(user.id))this.pcmStreams.get(user.id)._push(pcm);this.emit('pcm',user,pcm);}}}
module.exports=VoiceReceiver;}).call(this,require("buffer").Buffer)},{"./VoiceReadable":56,"buffer":173,"events":175,"tweetnacl":165}],58:[function(require,module,exports){class SecretKey{constructor(key){this.key=new Uint8Array(new ArrayBuffer(key.length));for(const index in key)this.key[index]=key[index];}}
module.exports=SecretKey;},{}],59:[function(require,module,exports){(function(Buffer){const browser=typeof window!=='undefined';const EventEmitter=require('events').EventEmitter;const Constants=require('../../util/Constants');const convertArrayBuffer=require('../../util/ConvertArrayBuffer');const pako=require('pako');const zlib=require('zlib');const PacketManager=require('./packets/WebSocketPacketManager');let WebSocket,erlpack;let serialize=JSON.stringify;if(browser){WebSocket=window.WebSocket;}else{try{WebSocket=require('uws');}catch(err){WebSocket=require('ws');}
try{erlpack=require('erlpack');serialize=erlpack.pack;}catch(err){erlpack=null;}}
class WebSocketManager extends EventEmitter{constructor(client){super();this.client=client;this.packetManager=new PacketManager(this);this.status=Constants.Status.IDLE;this.sessionID=null;this.sequence=-1;this.gateway=null;this.normalReady=false;this.ws=null;this.disabledEvents={};for(const event of client.options.disabledEvents)this.disabledEvents[event]=true;this.first=true;this.lastHeartbeatAck=true;}
_connect(gateway){this.client.emit('debug',`
										Connecting to gateway $ {
											gateway
										}
										`);this.normalReady=false;if(this.status!==Constants.Status.RECONNECTING)this.status=Constants.Status.CONNECTING;this.ws=new WebSocket(gateway);if(browser)this.ws.binaryType='arraybuffer';this.ws.onopen=this.eventOpen.bind(this);this.ws.onmessage=this.eventMessage.bind(this);this.ws.onclose=this.eventClose.bind(this);this.ws.onerror=this.eventError.bind(this);this._queue=[];this._remaining=120;this.client.setInterval(()=>{this._remaining=120;this._remainingReset=Date.now();},60e3);}
connect(gateway){gateway=`
										$ {
											gateway
										} & encoding = $ {
											erlpack ? 'etf' : 'json'
										}
										`;if(this.first){this._connect(gateway);this.first=false;}else{this.client.setTimeout(()=>this._connect(gateway),5500);}}
heartbeat(normal){if(normal&&!this.lastHeartbeatAck){this.ws.close(1007);return;}
this.client.emit('debug','Sending heartbeat');this.client._pingTimestamp=Date.now();this.client.ws.send({op:Constants.OPCodes.HEARTBEAT,d:this.sequence,},true);this.lastHeartbeatAck=false;}
send(data,force=false){if(force){this._send(serialize(data));return;}
this._queue.push(serialize(data));this.doQueue();}
destroy(){this.ws.close(1000);this._queue=[];this.status=Constants.Status.IDLE;}
_send(data){if(this.ws.readyState===WebSocket.OPEN){this.emit('send',data);this.ws.send(data);}}
doQueue(){const item=this._queue[0];if(!(this.ws.readyState===WebSocket.OPEN&&item))return;if(this.remaining===0){this.client.setTimeout(this.doQueue.bind(this),Date.now()-this.remainingReset);return;}
this._remaining--;this._send(item);this._queue.shift();this.doQueue();}
eventOpen(){this.client.emit('debug','Connection to gateway opened');this.lastHeartbeatAck=true;if(this.status===Constants.Status.RECONNECTING)this._sendResume();else this._sendNewIdentify();}
_sendResume(){if(!this.sessionID){this._sendNewIdentify();return;}
this.client.emit('debug','Identifying as resumed session');const payload={token:this.client.token,session_id:this.sessionID,seq:this.sequence,};this.send({op:Constants.OPCodes.RESUME,d:payload,});}
_sendNewIdentify(){this.reconnecting=false;const payload=this.client.options.ws;payload.token=this.client.token;if(this.client.options.shardCount>0){payload.shard=[Number(this.client.options.shardId),Number(this.client.options.shardCount)];}
this.client.emit('debug','Identifying as new session');this.send({op:Constants.OPCodes.IDENTIFY,d:payload,});this.sequence=-1;}
eventClose(event){this.emit('close',event);this.client.clearInterval(this.client.manager.heartbeatInterval);this.status=Constants.Status.DISCONNECTED;this._queue=[];if(!this.reconnecting)this.client.emit(Constants.Events.DISCONNECT,event);if(event.code===4004)return;if(event.code===4010)return;if(!this.reconnecting&&event.code!==1000)this.tryReconnect();}
eventMessage(event){const data=this.tryParseEventData(event.data);if(data===null){this.eventError(new Error(Constants.Errors.BAD_WS_MESSAGE));return false;}
this.client.emit('raw',data);if(data.op===Constants.OPCodes.HELLO)this.client.manager.setupKeepAlive(data.d.heartbeat_interval);return this.packetManager.handle(data);}
parseEventData(data){if(erlpack){if(data instanceof ArrayBuffer)data=convertArrayBuffer(data);return erlpack.unpack(data);}else{if(data instanceof ArrayBuffer)data=pako.inflate(data,{to:'string'});else if(data instanceof Buffer)data=zlib.inflateSync(data).toString();return JSON.parse(data);}}
tryParseEventData(data){try{return this.parseEventData(data);}catch(err){return null;}}
eventError(err){if(this.client.listenerCount('error')>0)this.client.emit('error',err);this.tryReconnect();}
_emitReady(normal=true){this.status=Constants.Status.READY;this.client.emit(Constants.Events.READY);this.packetManager.handleQueue();this.normalReady=normal;}
checkIfReady(){if(this.status!==Constants.Status.READY&&this.status!==Constants.Status.NEARLY){let unavailableCount=0;for(const guildID of this.client.guilds.keys()){unavailableCount+=this.client.guilds.get(guildID).available?0:1;}
if(unavailableCount===0){this.status=Constants.Status.NEARLY;if(this.client.options.fetchAllMembers){const promises=this.client.guilds.map(g=>g.fetchMembers());Promise.all(promises).then(()=>this._emitReady(),e=>{this.client.emit(Constants.Events.WARN,'Error in pre-ready guild member fetching');this.client.emit(Constants.Events.ERROR,e);this._emitReady();});return;}
this._emitReady();}}}
tryReconnect(){if(this.status===Constants.Status.RECONNECTING||this.status===Constants.Status.CONNECTING)return;this.status=Constants.Status.RECONNECTING;this.ws.close();this.packetManager.handleQueue();this.client.emit(Constants.Events.RECONNECTING);this.connect(this.client.ws.gateway);}}
module.exports=WebSocketManager;}).call(this,require("buffer").Buffer)},{"../../util/Constants":134,"../../util/ConvertArrayBuffer":135,"./packets/WebSocketPacketManager":60,"buffer":173,"erlpack":169,"events":175,"pako":143,"uws":169,"ws":169,"zlib":171}],60:[function(require,module,exports){const Constants=require('../../../util/Constants');const BeforeReadyWhitelist=[Constants.WSEvents.READY,Constants.WSEvents.GUILD_CREATE,Constants.WSEvents.GUILD_DELETE,Constants.WSEvents.GUILD_MEMBERS_CHUNK,Constants.WSEvents.GUILD_MEMBER_ADD,Constants.WSEvents.GUILD_MEMBER_REMOVE,];class WebSocketPacketManager{constructor(websocketManager){this.ws=websocketManager;this.handlers={};this.queue=[];this.register(Constants.WSEvents.READY,require('./handlers/Ready'));this.register(Constants.WSEvents.GUILD_CREATE,require('./handlers/GuildCreate'));this.register(Constants.WSEvents.GUILD_DELETE,require('./handlers/GuildDelete'));this.register(Constants.WSEvents.GUILD_UPDATE,require('./handlers/GuildUpdate'));this.register(Constants.WSEvents.GUILD_BAN_ADD,require('./handlers/GuildBanAdd'));this.register(Constants.WSEvents.GUILD_BAN_REMOVE,require('./handlers/GuildBanRemove'));this.register(Constants.WSEvents.GUILD_MEMBER_ADD,require('./handlers/GuildMemberAdd'));this.register(Constants.WSEvents.GUILD_MEMBER_REMOVE,require('./handlers/GuildMemberRemove'));this.register(Constants.WSEvents.GUILD_MEMBER_UPDATE,require('./handlers/GuildMemberUpdate'));this.register(Constants.WSEvents.GUILD_ROLE_CREATE,require('./handlers/GuildRoleCreate'));this.register(Constants.WSEvents.GUILD_ROLE_DELETE,require('./handlers/GuildRoleDelete'));this.register(Constants.WSEvents.GUILD_ROLE_UPDATE,require('./handlers/GuildRoleUpdate'));this.register(Constants.WSEvents.GUILD_EMOJIS_UPDATE,require('./handlers/GuildEmojisUpdate'));this.register(Constants.WSEvents.GUILD_MEMBERS_CHUNK,require('./handlers/GuildMembersChunk'));this.register(Constants.WSEvents.CHANNEL_CREATE,require('./handlers/ChannelCreate'));this.register(Constants.WSEvents.CHANNEL_DELETE,require('./handlers/ChannelDelete'));this.register(Constants.WSEvents.CHANNEL_UPDATE,require('./handlers/ChannelUpdate'));this.register(Constants.WSEvents.CHANNEL_PINS_UPDATE,require('./handlers/ChannelPinsUpdate'));this.register(Constants.WSEvents.PRESENCE_UPDATE,require('./handlers/PresenceUpdate'));this.register(Constants.WSEvents.USER_UPDATE,require('./handlers/UserUpdate'));this.register(Constants.WSEvents.USER_NOTE_UPDATE,require('./handlers/UserNoteUpdate'));this.register(Constants.WSEvents.VOICE_STATE_UPDATE,require('./handlers/VoiceStateUpdate'));this.register(Constants.WSEvents.TYPING_START,require('./handlers/TypingStart'));this.register(Constants.WSEvents.MESSAGE_CREATE,require('./handlers/MessageCreate'));this.register(Constants.WSEvents.MESSAGE_DELETE,require('./handlers/MessageDelete'));this.register(Constants.WSEvents.MESSAGE_UPDATE,require('./handlers/MessageUpdate'));this.register(Constants.WSEvents.MESSAGE_DELETE_BULK,require('./handlers/MessageDeleteBulk'));this.register(Constants.WSEvents.VOICE_SERVER_UPDATE,require('./handlers/VoiceServerUpdate'));this.register(Constants.WSEvents.GUILD_SYNC,require('./handlers/GuildSync'));this.register(Constants.WSEvents.RELATIONSHIP_ADD,require('./handlers/RelationshipAdd'));this.register(Constants.WSEvents.RELATIONSHIP_REMOVE,require('./handlers/RelationshipRemove'));this.register(Constants.WSEvents.MESSAGE_REACTION_ADD,require('./handlers/MessageReactionAdd'));this.register(Constants.WSEvents.MESSAGE_REACTION_REMOVE,require('./handlers/MessageReactionRemove'));this.register(Constants.WSEvents.MESSAGE_REACTION_REMOVE_ALL,require('./handlers/MessageReactionRemoveAll'));}
get client(){return this.ws.client;}
register(event,Handler){this.handlers[event]=new Handler(this);}
handleQueue(){this.queue.forEach((element,index)=>{this.handle(this.queue[index]);this.queue.splice(index,1);});}
setSequence(s){if(s&&s>this.ws.sequence)this.ws.sequence=s;}
handle(packet){if(packet.op===Constants.OPCodes.RECONNECT){this.setSequence(packet.s);this.ws.tryReconnect();return false;}
if(packet.op===Constants.OPCodes.INVALID_SESSION){if(packet.d){setTimeout(()=>{this.ws._sendResume();},2500);}else{this.ws.sessionID=null;this.ws._sendNewIdentify();}
return false;}
if(packet.op===Constants.OPCodes.HEARTBEAT_ACK){this.ws.client._pong(this.ws.client._pingTimestamp);this.ws.lastHeartbeatAck=true;this.ws.client.emit('debug','Heartbeat acknowledged');}else if(packet.op===Constants.OPCodes.HEARTBEAT){this.client.ws.send({op:Constants.OPCodes.HEARTBEAT,d:this.client.ws.sequence,});this.ws.client.emit('debug','Received gateway heartbeat');}
if(this.ws.status===Constants.Status.RECONNECTING){this.ws.reconnecting=false;this.ws.checkIfReady();}
this.setSequence(packet.s);if(this.ws.disabledEvents[packet.t]!==undefined)return false;if(this.ws.status!==Constants.Status.READY){if(BeforeReadyWhitelist.indexOf(packet.t)===-1){this.queue.push(packet);return false;}}
if(this.handlers[packet.t])return this.handlers[packet.t].handle(packet);return false;}}
module.exports=WebSocketPacketManager;},{"../../../util/Constants":134,"./handlers/ChannelCreate":62,"./handlers/ChannelDelete":63,"./handlers/ChannelPinsUpdate":64,"./handlers/ChannelUpdate":65,"./handlers/GuildBanAdd":66,"./handlers/GuildBanRemove":67,"./handlers/GuildCreate":68,"./handlers/GuildDelete":69,"./handlers/GuildEmojisUpdate":70,"./handlers/GuildMemberAdd":71,"./handlers/GuildMemberRemove":72,"./handlers/GuildMemberUpdate":73,"./handlers/GuildMembersChunk":74,"./handlers/GuildRoleCreate":75,"./handlers/GuildRoleDelete":76,"./handlers/GuildRoleUpdate":77,"./handlers/GuildSync":78,"./handlers/GuildUpdate":79,"./handlers/MessageCreate":80,"./handlers/MessageDelete":81,"./handlers/MessageDeleteBulk":82,"./handlers/MessageReactionAdd":83,"./handlers/MessageReactionRemove":84,"./handlers/MessageReactionRemoveAll":85,"./handlers/MessageUpdate":86,"./handlers/PresenceUpdate":87,"./handlers/Ready":88,"./handlers/RelationshipAdd":89,"./handlers/RelationshipRemove":90,"./handlers/TypingStart":91,"./handlers/UserNoteUpdate":92,"./handlers/UserUpdate":93,"./handlers/VoiceServerUpdate":94,"./handlers/VoiceStateUpdate":95}],61:[function(require,module,exports){class AbstractHandler{constructor(packetManager){this.packetManager=packetManager;}
handle(packet){return packet;}}
module.exports=AbstractHandler;},{}],62:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class ChannelCreateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.ChannelCreate.handle(data);}}
module.exports=ChannelCreateHandler;},{"./AbstractHandler":61}],63:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class ChannelDeleteHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const response=client.actions.ChannelDelete.handle(data);if(response.channel)client.emit(Constants.Events.CHANNEL_DELETE,response.channel);}}
module.exports=ChannelDeleteHandler;},{"../../../../util/Constants":134,"./AbstractHandler":61}],64:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class ChannelPinsUpdate extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const channel=client.channels.get(data.channel_id);const time=new Date(data.last_pin_timestamp);if(channel&&time)client.emit(Constants.Events.CHANNEL_PINS_UPDATE,channel,time);}}
module.exports=ChannelPinsUpdate;},{"../../../../util/Constants":134,"./AbstractHandler":61}],65:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class ChannelUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.ChannelUpdate.handle(data);}}
module.exports=ChannelUpdateHandler;},{"./AbstractHandler":61}],66:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class GuildBanAddHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const guild=client.guilds.get(data.guild_id);const user=client.users.get(data.user.id);if(guild&&user)client.emit(Constants.Events.GUILD_BAN_ADD,guild,user);}}
module.exports=GuildBanAddHandler;},{"../../../../util/Constants":134,"./AbstractHandler":61}],67:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildBanRemoveHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.GuildBanRemove.handle(data);}}
module.exports=GuildBanRemoveHandler;},{"./AbstractHandler":61}],68:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildCreateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const guild=client.guilds.get(data.id);if(guild){if(!guild.available&&!data.unavailable){guild.setup(data);this.packetManager.ws.checkIfReady();}}else{client.dataManager.newGuild(data);}}}
module.exports=GuildCreateHandler;},{"./AbstractHandler":61}],69:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class GuildDeleteHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const response=client.actions.GuildDelete.handle(data);if(response.guild)client.emit(Constants.Events.GUILD_DELETE,response.guild);}}
module.exports=GuildDeleteHandler;},{"../../../../util/Constants":134,"./AbstractHandler":61}],70:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');function mappify(iterable){const map=new Map();for(const x of iterable)map.set(...x);return map;}
class GuildEmojisUpdate extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const guild=client.guilds.get(data.guild_id);if(!guild||!guild.emojis)return;const deletions=mappify(guild.emojis.entries());for(const emoji of data.emojis){const cachedEmoji=guild.emojis.get(emoji.id);if(cachedEmoji){deletions.delete(emoji.id);if(!cachedEmoji.equals(emoji,true)){client.actions.GuildEmojiUpdate.handle(cachedEmoji,emoji);}}else{client.actions.GuildEmojiCreate.handle(guild,emoji);}}
for(const emoji of deletions.values()){client.actions.GuildEmojiDelete.handle(emoji);}}}
module.exports=GuildEmojisUpdate;},{"./AbstractHandler":61}],71:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildMemberAddHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const guild=client.guilds.get(data.guild_id);if(guild){guild.memberCount++;guild._addMember(data);}}}
module.exports=GuildMemberAddHandler;},{"./AbstractHandler":61}],72:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildMemberRemoveHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.GuildMemberRemove.handle(data);}}
module.exports=GuildMemberRemoveHandler;},{"./AbstractHandler":61}],73:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildMemberUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const guild=client.guilds.get(data.guild_id);if(guild){const member=guild.members.get(data.user.id);if(member)guild._updateMember(member,data);}}}
module.exports=GuildMemberUpdateHandler;},{"./AbstractHandler":61}],74:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class GuildMembersChunkHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const guild=client.guilds.get(data.guild_id);if(!guild)return;const members=data.members.map(member=>guild._addMember(member,false));guild._checkChunks();client.emit(Constants.Events.GUILD_MEMBERS_CHUNK,members);client.ws.lastHeartbeatAck=true;}}
module.exports=GuildMembersChunkHandler;},{"../../../../util/Constants":134,"./AbstractHandler":61}],75:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildRoleCreateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.GuildRoleCreate.handle(data);}}
module.exports=GuildRoleCreateHandler;},{"./AbstractHandler":61}],76:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildRoleDeleteHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.GuildRoleDelete.handle(data);}}
module.exports=GuildRoleDeleteHandler;},{"./AbstractHandler":61}],77:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildRoleUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.GuildRoleUpdate.handle(data);}}
module.exports=GuildRoleUpdateHandler;},{"./AbstractHandler":61}],78:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildSyncHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.GuildSync.handle(data);}}
module.exports=GuildSyncHandler;},{"./AbstractHandler":61}],79:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class GuildUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.GuildUpdate.handle(data);}}
module.exports=GuildUpdateHandler;},{"./AbstractHandler":61}],80:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class MessageCreateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const response=client.actions.MessageCreate.handle(data);if(response.message)client.emit(Constants.Events.MESSAGE_CREATE,response.message);}}
module.exports=MessageCreateHandler;},{"../../../../util/Constants":134,"./AbstractHandler":61}],81:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class MessageDeleteHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const response=client.actions.MessageDelete.handle(data);if(response.message)client.emit(Constants.Events.MESSAGE_DELETE,response.message);}}
module.exports=MessageDeleteHandler;},{"../../../../util/Constants":134,"./AbstractHandler":61}],82:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class MessageDeleteBulkHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.MessageDeleteBulk.handle(data);}}
module.exports=MessageDeleteBulkHandler;},{"./AbstractHandler":61}],83:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class MessageReactionAddHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.MessageReactionAdd.handle(data);}}
module.exports=MessageReactionAddHandler;},{"./AbstractHandler":61}],84:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class MessageReactionRemove extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.MessageReactionRemove.handle(data);}}
module.exports=MessageReactionRemove;},{"./AbstractHandler":61}],85:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class MessageReactionRemoveAll extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.MessageReactionRemoveAll.handle(data);}}
module.exports=MessageReactionRemoveAll;},{"./AbstractHandler":61}],86:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class MessageUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.MessageUpdate.handle(data);}}
module.exports=MessageUpdateHandler;},{"./AbstractHandler":61}],87:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');const cloneObject=require('../../../../util/CloneObject');class PresenceUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;let user=client.users.get(data.user.id);const guild=client.guilds.get(data.guild_id);if(!user){if(data.user.username){user=client.dataManager.newUser(data.user);}else{return;}}
const oldUser=cloneObject(user);user.patch(data.user);if(!user.equals(oldUser)){client.emit(Constants.Events.USER_UPDATE,oldUser,user);}
if(guild){let member=guild.members.get(user.id);if(!member&&data.status!=='offline'){member=guild._addMember({user,roles:data.roles,deaf:false,mute:false,},false);client.emit(Constants.Events.GUILD_MEMBER_AVAILABLE,member);}
if(member){const oldMember=cloneObject(member);if(member.presence){oldMember.frozenPresence=cloneObject(member.presence);}
guild._setPresence(user.id,data);client.emit(Constants.Events.PRESENCE_UPDATE,oldMember,member);}else{guild._setPresence(user.id,data);}}}}
module.exports=PresenceUpdateHandler;},{"../../../../util/CloneObject":132,"../../../../util/Constants":134,"./AbstractHandler":61}],88:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const ClientUser=require('../../../../structures/ClientUser');class ReadyHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.ws.heartbeat();const clientUser=new ClientUser(client,data.user);client.user=clientUser;client.readyAt=new Date();client.users.set(clientUser.id,clientUser);for(const guild of data.guilds)client.dataManager.newGuild(guild);for(const privateDM of data.private_channels)client.dataManager.newChannel(privateDM);for(const relation of data.relationships){const user=client.dataManager.newUser(relation.user);if(relation.type===1){client.user.friends.set(user.id,user);}else if(relation.type===2){client.user.blocked.set(user.id,user);}}
data.presences=data.presences||[];for(const presence of data.presences){client.dataManager.newUser(presence.user);client._setPresence(presence.user.id,presence);}
if(data.notes){for(const user in data.notes){let note=data.notes[user];if(!note.length)note=null;client.user.notes.set(user,note);}}
if(!client.user.bot&&client.options.sync)client.setInterval(client.syncGuilds.bind(client),30000);client.once('ready',client.syncGuilds.bind(client));if(!client.users.has('1')){client.dataManager.newUser({id:'1',username:'Clyde',discriminator:'0000',avatar:'https://discordapp.com/assets/f78426a064bc9dd24847519259bc42af.png',bot:true,status:'online',game:null,verified:true,});}
client.setTimeout(()=>{if(!client.ws.normalReady)client.ws._emitReady(false);},1200*data.guilds.length);this.packetManager.ws.sessionID=data.session_id;this.packetManager.ws.checkIfReady();}}
module.exports=ReadyHandler;},{"../../../../structures/ClientUser":102,"./AbstractHandler":61}],89:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class RelationshipAddHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;if(data.type===1){client.fetchUser(data.id).then(user=>{client.user.friends.set(user.id,user);});}else if(data.type===2){client.fetchUser(data.id).then(user=>{client.user.blocked.set(user.id,user);});}}}
module.exports=RelationshipAddHandler;},{"./AbstractHandler":61}],90:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class RelationshipRemoveHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;if(data.type===2){if(client.user.blocked.has(data.id)){client.user.blocked.delete(data.id);}}else if(data.type===1){if(client.user.friends.has(data.id)){client.user.friends.delete(data.id);}}}}
module.exports=RelationshipRemoveHandler;},{"./AbstractHandler":61}],91:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');class TypingStartHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const channel=client.channels.get(data.channel_id);const user=client.users.get(data.user_id);const timestamp=new Date(data.timestamp*1000);if(channel&&user){if(channel.type==='voice'){client.emit(Constants.Events.WARN,`
										Discord sent a typing packet to voice channel $ {
											channel.id
										}
										`);return;}
if(channel._typing.has(user.id)){const typing=channel._typing.get(user.id);typing.lastTimestamp=timestamp;typing.resetTimeout(tooLate(channel,user));}else{channel._typing.set(user.id,new TypingData(client,timestamp,timestamp,tooLate(channel,user)));client.emit(Constants.Events.TYPING_START,channel,user);}}}}
class TypingData{constructor(client,since,lastTimestamp,_timeout){this.client=client;this.since=since;this.lastTimestamp=lastTimestamp;this._timeout=_timeout;}
resetTimeout(_timeout){this.client.clearTimeout(this._timeout);this._timeout=_timeout;}
get elapsedTime(){return Date.now()-this.since;}}
function tooLate(channel,user){return channel.client.setTimeout(()=>{channel.client.emit(Constants.Events.TYPING_STOP,channel,user,channel._typing.get(user.id));channel._typing.delete(user.id);},6000);}
module.exports=TypingStartHandler;},{"../../../../util/Constants":134,"./AbstractHandler":61}],92:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class UserNoteUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.UserNoteUpdate.handle(data);}}
module.exports=UserNoteUpdateHandler;},{"./AbstractHandler":61}],93:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class UserUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.actions.UserUpdate.handle(data);}}
module.exports=UserUpdateHandler;},{"./AbstractHandler":61}],94:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');class VoiceServerUpdate extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;client.emit('self.voiceServer',data);}}
module.exports=VoiceServerUpdate;},{"./AbstractHandler":61}],95:[function(require,module,exports){const AbstractHandler=require('./AbstractHandler');const Constants=require('../../../../util/Constants');const cloneObject=require('../../../../util/CloneObject');class VoiceStateUpdateHandler extends AbstractHandler{handle(packet){const client=this.packetManager.client;const data=packet.d;const guild=client.guilds.get(data.guild_id);if(guild){const member=guild.members.get(data.user_id);if(member){const oldVoiceChannelMember=cloneObject(member);if(member.voiceChannel&&member.voiceChannel.id!==data.channel_id){member.voiceChannel.members.delete(oldVoiceChannelMember.id);}
if(!data.channel_id)member.speaking=null;if(member.user.id===client.user.id&&data.channel_id){client.emit('self.voiceStateUpdate',data);}
const newChannel=client.channels.get(data.channel_id);if(newChannel)newChannel.members.set(member.user.id,member);member.serverMute=data.mute;member.serverDeaf=data.deaf;member.selfMute=data.self_mute;member.selfDeaf=data.self_deaf;member.voiceSessionID=data.session_id;member.voiceChannelID=data.channel_id;client.emit(Constants.Events.VOICE_STATE_UPDATE,oldVoiceChannelMember,member);}}}}
module.exports=VoiceStateUpdateHandler;},{"../../../../util/CloneObject":132,"../../../../util/Constants":134,"./AbstractHandler":61}],96:[function(require,module,exports){module.exports={Client:require('./client/Client'),WebhookClient:require('./client/WebhookClient'),Shard:require('./sharding/Shard'),ShardClientUtil:require('./sharding/ShardClientUtil'),ShardingManager:require('./sharding/ShardingManager'),Collection:require('./util/Collection'),splitMessage:require('./util/SplitMessage'),escapeMarkdown:require('./util/EscapeMarkdown'),fetchRecommendedShards:require('./util/FetchRecommendedShards'),Channel:require('./structures/Channel'),ClientOAuth2Application:require('./structures/ClientOAuth2Application'),ClientUser:require('./structures/ClientUser'),DMChannel:require('./structures/DMChannel'),Emoji:require('./structures/Emoji'),EvaluatedPermissions:require('./structures/EvaluatedPermissions'),Game:require('./structures/Presence').Game,GroupDMChannel:require('./structures/GroupDMChannel'),Guild:require('./structures/Guild'),GuildChannel:require('./structures/GuildChannel'),GuildMember:require('./structures/GuildMember'),Invite:require('./structures/Invite'),Message:require('./structures/Message'),MessageAttachment:require('./structures/MessageAttachment'),MessageCollector:require('./structures/MessageCollector'),MessageEmbed:require('./structures/MessageEmbed'),MessageReaction:require('./structures/MessageReaction'),OAuth2Application:require('./structures/OAuth2Application'),PartialGuild:require('./structures/PartialGuild'),PartialGuildChannel:require('./structures/PartialGuildChannel'),PermissionOverwrites:require('./structures/PermissionOverwrites'),Presence:require('./structures/Presence').Presence,ReactionEmoji:require('./structures/ReactionEmoji'),RichEmbed:require('./structures/RichEmbed'),Role:require('./structures/Role'),TextChannel:require('./structures/TextChannel'),User:require('./structures/User'),VoiceChannel:require('./structures/VoiceChannel'),Webhook:require('./structures/Webhook'),version:require('../package').version,Constants:require('./util/Constants'),};if(typeof window!=='undefined')window.Discord=module.exports;},{"../package":2,"./client/Client":3,"./client/WebhookClient":7,"./sharding/Shard":97,"./sharding/ShardClientUtil":98,"./sharding/ShardingManager":99,"./structures/Channel":100,"./structures/ClientOAuth2Application":101,"./structures/ClientUser":102,"./structures/DMChannel":103,"./structures/Emoji":104,"./structures/EvaluatedPermissions":105,"./structures/GroupDMChannel":106,"./structures/Guild":107,"./structures/GuildChannel":108,"./structures/GuildMember":109,"./structures/Invite":110,"./structures/Message":111,"./structures/MessageAttachment":112,"./structures/MessageCollector":113,"./structures/MessageEmbed":114,"./structures/MessageReaction":115,"./structures/OAuth2Application":116,"./structures/PartialGuild":117,"./structures/PartialGuildChannel":118,"./structures/PermissionOverwrites":119,"./structures/Presence":120,"./structures/ReactionEmoji":121,"./structures/RichEmbed":122,"./structures/Role":123,"./structures/TextChannel":124,"./structures/User":125,"./structures/VoiceChannel":128,"./structures/Webhook":129,"./util/Collection":133,"./util/Constants":134,"./util/EscapeMarkdown":136,"./util/FetchRecommendedShards":137,"./util/SplitMessage":142}],97:[function(require,module,exports){(function(process){const childProcess=require('child_process');const path=require('path');const makeError=require('../util/MakeError');const makePlainError=require('../util/MakePlainError');class Shard{constructor(manager,id,args=[]){this.manager=manager;this.id=id;this.env=Object.assign({},process.env,{SHARD_ID:this.id,SHARD_COUNT:this.manager.totalShards,CLIENT_TOKEN:this.manager.token,});this.process=childProcess.fork(path.resolve(this.manager.file),args,{env:this.env,});this.process.on('message',this._handleMessage.bind(this));this.process.once('exit',()=>{if(this.manager.respawn)this.manager.createShard(this.id);});this._evals=new Map();this._fetches=new Map();}
send(message){return new Promise((resolve,reject)=>{const sent=this.process.send(message,err=>{if(err)reject(err);else resolve(this);});if(!sent)throw new Error('Failed to send message to shard\'s process.');});}
fetchClientValue(prop){if(this._fetches.has(prop))return this._fetches.get(prop);const promise=new Promise((resolve,reject)=>{const listener=message=>{if(!message||message._fetchProp!==prop)return;this.process.removeListener('message',listener);this._fetches.delete(prop);resolve(message._result);};this.process.on('message',listener);this.send({_fetchProp:prop}).catch(err=>{this.process.removeListener('message',listener);this._fetches.delete(prop);reject(err);});});this._fetches.set(prop,promise);return promise;}
eval(script){if(this._evals.has(script))return this._evals.get(script);const promise=new Promise((resolve,reject)=>{const listener=message=>{if(!message||message._eval!==script)return;this.process.removeListener('message',listener);this._evals.delete(script);if(!message._error)resolve(message._result);else reject(makeError(message._error));};this.process.on('message',listener);this.send({_eval:script}).catch(err=>{this.process.removeListener('message',listener);this._evals.delete(script);reject(err);});});this._evals.set(script,promise);return promise;}
_handleMessage(message){if(message){if(message._sFetchProp){this.manager.fetchClientValues(message._sFetchProp).then(results=>this.send({_sFetchProp:message._sFetchProp,_result:results}),err=>this.send({_sFetchProp:message._sFetchProp,_error:makePlainError(err)}));return;}
if(message._sEval){this.manager.broadcastEval(message._sEval).then(results=>this.send({_sEval:message._sEval,_result:results}),err=>this.send({_sEval:message._sEval,_error:makePlainError(err)}));return;}}
this.manager.emit('message',this,message);}}
module.exports=Shard;}).call(this,require('_process'))},{"../util/MakeError":138,"../util/MakePlainError":139,"_process":193,"child_process":166,"path":191}],98:[function(require,module,exports){(function(process){const makeError=require('../util/MakeError');const makePlainError=require('../util/MakePlainError');class ShardClientUtil{constructor(client){this.client=client;process.on('message',this._handleMessage.bind(this));}
get id(){return this.client.options.shardId;}
get count(){return this.client.options.shardCount;}
send(message){return new Promise((resolve,reject)=>{const sent=process.send(message,err=>{if(err)reject(err);else resolve();});if(!sent)throw new Error('Failed to send message to master process.');});}
fetchClientValues(prop){return new Promise((resolve,reject)=>{const listener=message=>{if(!message||message._sFetchProp!==prop)return;process.removeListener('message',listener);if(!message._error)resolve(message._result);else reject(makeError(message._error));};process.on('message',listener);this.send({_sFetchProp:prop}).catch(err=>{process.removeListener('message',listener);reject(err);});});}
broadcastEval(script){return new Promise((resolve,reject)=>{const listener=message=>{if(!message||message._sEval!==script)return;process.removeListener('message',listener);if(!message._error)resolve(message._result);else reject(makeError(message._error));};process.on('message',listener);this.send({_sEval:script}).catch(err=>{process.removeListener('message',listener);reject(err);});});}
_handleMessage(message){if(!message)return;if(message._fetchProp){const props=message._fetchProp.split('.');let value=this.client;for(const prop of props)value=value[prop];this._respond('fetchProp',{_fetchProp:message._fetchProp,_result:value});}else if(message._eval){try{this._respond('eval',{_eval:message._eval,_result:this.client._eval(message._eval)});}catch(err){this._respond('eval',{_eval:message._eval,_error:makePlainError(err)});}}}
_respond(type,message){this.send(message).catch(err=>{err.message=`
										Error when sending $ {
											type
										}
										response to master process: $ {
											err.message
										}
										`;this.client.emit('error',err);});}
static singleton(client){if(!this._singleton){this._singleton=new this(client);}else{client.emit('warn','Multiple clients created in child process; only the first will handle sharding helpers.');}
return this._singleton;}}
module.exports=ShardClientUtil;}).call(this,require('_process'))},{"../util/MakeError":138,"../util/MakePlainError":139,"_process":193}],99:[function(require,module,exports){(function(process){const path=require('path');const fs=require('fs');const EventEmitter=require('events').EventEmitter;const mergeDefault=require('../util/MergeDefault');const Shard=require('./Shard');const Collection=require('../util/Collection');const fetchRecommendedShards=require('../util/FetchRecommendedShards');class ShardingManager extends EventEmitter{constructor(file,options={}){super();options=mergeDefault({totalShards:'auto',respawn:true,shardArgs:[],token:null,},options);this.file=file;if(!file)throw new Error('File must be specified.');if(!path.isAbsolute(file))this.file=path.resolve(process.cwd(),file);const stats=fs.statSync(this.file);if(!stats.isFile())throw new Error('File path does not point to a file.');this.totalShards=options.totalShards;if(this.totalShards!=='auto'){if(typeof this.totalShards!=='number'||isNaN(this.totalShards)){throw new TypeError('Amount of shards must be a number.');}
if(this.totalShards<1)throw new RangeError('Amount of shards must be at least 1.');if(this.totalShards!==Math.floor(this.totalShards)){throw new RangeError('Amount of shards must be an integer.');}}
this.respawn=options.respawn;this.shardArgs=options.shardArgs;this.token=options.token?options.token.replace(/^Bot\s*/i,''):null;this.shards=new Collection();}
createShard(id=this.shards.size){const shard=new Shard(this,id,this.shardArgs);this.shards.set(id,shard);this.emit('launch',shard);return Promise.resolve(shard);}
spawn(amount=this.totalShards,delay=5500){if(amount==='auto'){return fetchRecommendedShards(this.token).then(count=>{this.totalShards=count;return this._spawn(count,delay);});}else{if(typeof amount!=='number'||isNaN(amount))throw new TypeError('Amount of shards must be a number.');if(amount<1)throw new RangeError('Amount of shards must be at least 1.');if(amount!==Math.floor(amount))throw new TypeError('Amount of shards must be an integer.');return this._spawn(amount,delay);}}
_spawn(amount,delay){return new Promise(resolve=>{if(this.shards.size>=amount)throw new Error(`
										Already spawned $ {
											this.shards.size
										}
										shards.
										`);this.totalShards=amount;this.createShard();if(this.shards.size>=this.totalShards){resolve(this.shards);return;}
if(delay<=0){while(this.shards.size<this.totalShards)this.createShard();resolve(this.shards);}else{const interval=setInterval(()=>{this.createShard();if(this.shards.size>=this.totalShards){clearInterval(interval);resolve(this.shards);}},delay);}});}
broadcast(message){const promises=[];for(const shard of this.shards.values())promises.push(shard.send(message));return Promise.all(promises);}
broadcastEval(script){const promises=[];for(const shard of this.shards.values())promises.push(shard.eval(script));return Promise.all(promises);}
fetchClientValues(prop){if(this.shards.size===0)return Promise.reject(new Error('No shards have been spawned.'));if(this.shards.size!==this.totalShards)return Promise.reject(new Error('Still spawning shards.'));const promises=[];for(const shard of this.shards.values())promises.push(shard.fetchClientValue(prop));return Promise.all(promises);}}
module.exports=ShardingManager;}).call(this,require('_process'))},{"../util/Collection":133,"../util/FetchRecommendedShards":137,"../util/MergeDefault":140,"./Shard":97,"_process":193,"events":175,"fs":166,"path":191}],100:[function(require,module,exports){class Channel{constructor(client,data){Object.defineProperty(this,'client',{value:client});this.type=null;if(data)this.setup(data);}
setup(data){this.id=data.id;}
get createdTimestamp(){return(this.id / 4194304)+1420070400000;}
get createdAt(){return new Date(this.createdTimestamp);}
delete(){return this.client.rest.methods.deleteChannel(this);}}
module.exports=Channel;},{}],101:[function(require,module,exports){const User=require('./User');const OAuth2Application=require('./OAuth2Application');class ClientOAuth2Application extends OAuth2Application{setup(data){super.setup(data);this.flags=data.flags;this.owner=new User(this.client,data.owner);}}
module.exports=ClientOAuth2Application;},{"./OAuth2Application":116,"./User":125}],102:[function(require,module,exports){const User=require('./User');const Collection=require('../util/Collection');class ClientUser extends User{setup(data){super.setup(data);this.verified=data.verified;this.email=data.email;this.localPresence={};this._typing=new Map();this.friends=new Collection();this.blocked=new Collection();this.notes=new Collection();}
edit(data){return this.client.rest.methods.updateCurrentUser(data);}
setUsername(username,password){return this.client.rest.methods.updateCurrentUser({username},password);}
setEmail(email,password){return this.client.rest.methods.updateCurrentUser({email},password);}
setPassword(newPassword,oldPassword){return this.client.rest.methods.updateCurrentUser({password:newPassword},oldPassword);}
setAvatar(avatar){if(avatar.startsWith('data:')){return this.client.rest.methods.updateCurrentUser({avatar});}else{return this.client.resolver.resolveBuffer(avatar).then(data=>this.client.rest.methods.updateCurrentUser({avatar:data}));}}
setPresence(data){return new Promise(resolve=>{let status=this.localPresence.status||this.presence.status;let game=this.localPresence.game;let afk=this.localPresence.afk||this.presence.afk;if(!game&&this.presence.game){game={name:this.presence.game.name,type:this.presence.game.type,url:this.presence.game.url,};}
if(data.status){if(typeof data.status!=='string')throw new TypeError('Status must be a string');status=data.status;}
if(data.game){game=data.game;if(game.url)game.type=1;}
if(typeof data.afk!=='undefined')afk=data.afk;afk=Boolean(afk);this.localPresence={status,game,afk};this.localPresence.since=0;this.localPresence.game=this.localPresence.game||null;this.client.ws.send({op:3,d:this.localPresence,});this.client._setPresence(this.id,this.localPresence);resolve(this);});}
setStatus(status){return this.setPresence({status});}
setGame(game,streamingURL){return this.setPresence({game:{name:game,url:streamingURL,}});}
setAFK(afk){return this.setPresence({afk});}
fetchMentions(options={limit:25,roles:true,everyone:true,guild:null}){return this.client.rest.methods.fetchMentions(options);}
addFriend(user){user=this.client.resolver.resolveUser(user);return this.client.rest.methods.addFriend(user);}
removeFriend(user){user=this.client.resolver.resolveUser(user);return this.client.rest.methods.removeFriend(user);}
createGuild(name,region,icon=null){if(!icon)return this.client.rest.methods.createGuild({name,icon,region});if(icon.startsWith('data:')){return this.client.rest.methods.createGuild({name,icon,region});}else{return this.client.resolver.resolveBuffer(icon).then(data=>this.client.rest.methods.createGuild({name,icon:data,region}));}}}
module.exports=ClientUser;},{"../util/Collection":133,"./User":125}],103:[function(require,module,exports){const Channel=require('./Channel');const TextBasedChannel=require('./interface/TextBasedChannel');const Collection=require('../util/Collection');class DMChannel extends Channel{constructor(client,data){super(client,data);this.type='dm';this.messages=new Collection();this._typing=new Map();}
setup(data){super.setup(data);this.recipient=this.client.dataManager.newUser(data.recipients[0]);this.lastMessageID=data.last_message_id;}
toString(){return this.recipient.toString();}
send(){return;}
sendMessage(){return;}
sendEmbed(){return;}
sendFile(){return;}
sendCode(){return;}
fetchMessage(){return;}
fetchMessages(){return;}
fetchPinnedMessages(){return;}
startTyping(){return;}
stopTyping(){return;}
get typing(){return;}
get typingCount(){return;}
createCollector(){return;}
awaitMessages(){return;}
bulkDelete(){return;}
_cacheMessage(){return;}}
TextBasedChannel.applyToClass(DMChannel,true);module.exports=DMChannel;},{"../util/Collection":133,"./Channel":100,"./interface/TextBasedChannel":130}],104:[function(require,module,exports){const Constants=require('../util/Constants');const Collection=require('../util/Collection');class Emoji{constructor(guild,data){Object.defineProperty(this,'client',{value:guild.client});this.guild=guild;this.setup(data);}
setup(data){this.id=data.id;this.name=data.name;this.requiresColons=data.require_colons;this.managed=data.managed;this._roles=data.roles;}
get createdTimestamp(){return(this.id / 4194304)+1420070400000;}
get createdAt(){return new Date(this.createdTimestamp);}
get roles(){const roles=new Collection();for(const role of this._roles){if(this.guild.roles.has(role))roles.set(role,this.guild.roles.get(role));}
return roles;}
get url(){return Constants.Endpoints.emoji(this.id);}
toString(){return this.requiresColons?` < : $ {
											this.name
										}: $ {
											this.id
										} > `:this.name;}
equals(other){if(other instanceof Emoji){return(other.id===this.id&&other.name===this.name&&other.managed===this.managed&&other.requiresColons===this.requiresColons);}else{return(other.id===this.id&&other.name===this.name);}}
get identifier(){if(this.id){return`
										$ {
											this.name
										}: $ {
											this.id
										}
										`;}
return encodeURIComponent(this.name);}}
module.exports=Emoji;},{"../util/Collection":133,"../util/Constants":134}],105:[function(require,module,exports){const Constants=require('../util/Constants');class EvaluatedPermissions{constructor(member,raw){this.member=member;this.raw=raw;}
serialize(){const serializedPermissions={};for(const permissionName in Constants.PermissionFlags){serializedPermissions[permissionName]=this.hasPermission(permissionName);}
return serializedPermissions;}
hasPermission(permission,explicit=false){permission=this.member.client.resolver.resolvePermission(permission);if(!explicit&&(this.raw&Constants.PermissionFlags.ADMINISTRATOR)>0)return true;return(this.raw&permission)>0;}
hasPermissions(permissions,explicit=false){return permissions.every(p=>this.hasPermission(p,explicit));}
missingPermissions(permissions,explicit=false){return permissions.filter(p=>!this.hasPermission(p,explicit));}}
module.exports=EvaluatedPermissions;},{"../util/Constants":134}],106:[function(require,module,exports){const Channel=require('./Channel');const TextBasedChannel=require('./interface/TextBasedChannel');const Collection=require('../util/Collection');class GroupDMChannel extends Channel{constructor(client,data){super(client,data);this.type='group';this.messages=new Collection();this._typing=new Map();}
setup(data){super.setup(data);this.name=data.name;this.icon=data.icon;this.ownerID=data.owner_id;if(!this.recipients){this.recipients=new Collection();}
if(data.recipients){for(const recipient of data.recipients){const user=this.client.dataManager.newUser(recipient);this.recipients.set(user.id,user);}}
this.lastMessageID=data.last_message_id;}
get owner(){return this.client.users.get(this.ownerID);}
equals(channel){const equal=channel&&this.id===channel.id&&this.name===channel.name&&this.icon===channel.icon&&this.ownerID===channel.ownerID;if(equal){return this.recipients.equals(channel.recipients);}
return equal;}
toString(){return this.name;}
send(){return;}
sendMessage(){return;}
sendEmbed(){return;}
sendFile(){return;}
sendCode(){return;}
fetchMessage(){return;}
fetchMessages(){return;}
fetchPinnedMessages(){return;}
startTyping(){return;}
stopTyping(){return;}
get typing(){return;}
get typingCount(){return;}
createCollector(){return;}
awaitMessages(){return;}
bulkDelete(){return;}
_cacheMessage(){return;}}
TextBasedChannel.applyToClass(GroupDMChannel,true);module.exports=GroupDMChannel;},{"../util/Collection":133,"./Channel":100,"./interface/TextBasedChannel":130}],107:[function(require,module,exports){const User=require('./User');const Role=require('./Role');const Emoji=require('./Emoji');const Presence=require('./Presence').Presence;const GuildMember=require('./GuildMember');const Constants=require('../util/Constants');const Collection=require('../util/Collection');const cloneObject=require('../util/CloneObject');const arraysEqual=require('../util/ArraysEqual');class Guild{constructor(client,data){Object.defineProperty(this,'client',{value:client});this.members=new Collection();this.channels=new Collection();this.roles=new Collection();this.presences=new Collection();if(!data)return;if(data.unavailable){this.available=false;this.id=data.id;}else{this.available=true;this.setup(data);}}
setup(data){this.name=data.name;this.icon=data.icon;this.splash=data.splash;this.region=data.region;this.memberCount=data.member_count||this.memberCount;this.large=data.large||this.large;this.features=data.features;this.applicationID=data.application_id;this.emojis=new Collection();for(const emoji of data.emojis)this.emojis.set(emoji.id,new Emoji(this,emoji));this.afkTimeout=data.afk_timeout;this.afkChannelID=data.afk_channel_id;this.embedEnabled=data.embed_enabled;this.verificationLevel=data.verification_level;this.joinedTimestamp=data.joined_at?new Date(data.joined_at).getTime():this.joinedTimestamp;this.id=data.id;this.available=!data.unavailable;this.features=data.features||this.features||[];if(data.members){this.members.clear();for(const guildUser of data.members)this._addMember(guildUser,false);}
if(data.owner_id){this.ownerID=data.owner_id;}
if(data.channels){this.channels.clear();for(const channel of data.channels)this.client.dataManager.newChannel(channel,this);}
if(data.roles){this.roles.clear();for(const role of data.roles){const newRole=new Role(this,role);this.roles.set(newRole.id,newRole);}}
if(data.presences){for(const presence of data.presences){this._setPresence(presence.user.id,presence);}}
this._rawVoiceStates=new Collection();if(data.voice_states){for(const voiceState of data.voice_states){this._rawVoiceStates.set(voiceState.user_id,voiceState);const member=this.members.get(voiceState.user_id);if(member){member.serverMute=voiceState.mute;member.serverDeaf=voiceState.deaf;member.selfMute=voiceState.self_mute;member.selfDeaf=voiceState.self_deaf;member.voiceSessionID=voiceState.session_id;member.voiceChannelID=voiceState.channel_id;this.channels.get(voiceState.channel_id).members.set(member.user.id,member);}}}}
get createdTimestamp(){return(this.id / 4194304)+1420070400000;}
get createdAt(){return new Date(this.createdTimestamp);}
get joinedAt(){return new Date(this.joinedTimestamp);}
get iconURL(){if(!this.icon)return null;return Constants.Endpoints.guildIcon(this.id,this.icon);}
get splashURL(){if(!this.splash)return null;return Constants.Endpoints.guildSplash(this.id,this.splash);}
get owner(){return this.members.get(this.ownerID);}
get voiceConnection(){if(this.client.browser)return null;return this.client.voice.connections.get(this.id)||null;}
get defaultChannel(){return this.channels.get(this.id);}
member(user){return this.client.resolver.resolveGuildMember(this,user);}
fetchBans(){return this.client.rest.methods.getGuildBans(this);}
fetchInvites(){return this.client.rest.methods.getGuildInvites(this);}
fetchWebhooks(){return this.client.rest.methods.getGuildWebhooks(this);}
fetchMember(user){if(this._fetchWaiter)return Promise.reject(new Error('Already fetching guild members.'));user=this.client.resolver.resolveUser(user);if(!user)return Promise.reject(new Error('User is not cached. Use Client.fetchUser first.'));if(this.members.has(user.id))return Promise.resolve(this.members.get(user.id));return this.client.rest.methods.getGuildMember(this,user);}
fetchMembers(query=''){return new Promise((resolve,reject)=>{if(this._fetchWaiter)throw new Error('Already fetching guild members in ${this.id}.');if(this.memberCount===this.members.size){resolve(this);return;}
this._fetchWaiter=resolve;this.client.ws.send({op:Constants.OPCodes.REQUEST_GUILD_MEMBERS,d:{guild_id:this.id,query,limit:0,},});this._checkChunks();this.client.setTimeout(()=>reject(new Error('Members didn\'t arrive in time.')),120*1000);});}
edit(data){return this.client.rest.methods.updateGuild(this,data);}
setName(name){return this.edit({name});}
setRegion(region){return this.edit({region});}
setVerificationLevel(verificationLevel){return this.edit({verificationLevel});}
setAFKChannel(afkChannel){return this.edit({afkChannel});}
setAFKTimeout(afkTimeout){return this.edit({afkTimeout});}
setIcon(icon){return this.edit({icon});}
setOwner(owner){return this.edit({owner});}
setSplash(splash){return this.edit({splash});}
ban(user,deleteDays=0){return this.client.rest.methods.banGuildMember(this,user,deleteDays);}
unban(user){return this.client.rest.methods.unbanGuildMember(this,user);}
pruneMembers(days,dry=false){if(typeof days!=='number')throw new TypeError('Days must be a number.');return this.client.rest.methods.pruneGuildMembers(this,days,dry);}
sync(){if(!this.client.user.bot)this.client.syncGuilds([this]);}
createChannel(name,type,overwrites){return this.client.rest.methods.createChannel(this,name,type,overwrites);}
createRole(data){const create=this.client.rest.methods.createGuildRole(this);if(!data)return create;return create.then(role=>role.edit(data));}
createEmoji(attachment,name){return new Promise(resolve=>{if(attachment.startsWith('data:')){resolve(this.client.rest.methods.createEmoji(this,attachment,name));}else{this.client.resolver.resolveBuffer(attachment).then(data=>resolve(this.client.rest.methods.createEmoji(this,data,name)));}});}
deleteEmoji(emoji){if(!(emoji instanceof Emoji))emoji=this.emojis.get(emoji);return this.client.rest.methods.deleteEmoji(emoji);}
leave(){return this.client.rest.methods.leaveGuild(this);}
delete(){return this.client.rest.methods.deleteGuild(this);}
setRolePosition(role,position){if(typeof role==='string'){role=this.roles.get(role);if(!role)return Promise.reject(new Error('Supplied role is not a role or string.'));}
position=Number(position);if(isNaN(position))return Promise.reject(new Error('Supplied position is not a number.'));const lowestAffected=Math.min(role.position,position);const highestAffected=Math.max(role.position,position);const rolesToUpdate=this.roles.filter(r=>r.position>=lowestAffected&&r.position<=highestAffected);if(position>role.position){position=rolesToUpdate.first().position;}else{position=rolesToUpdate.last().position;}
const updatedRoles=[];for(const uRole of rolesToUpdate.values()){updatedRoles.push({id:uRole.id,position:uRole.id===role.id?position:uRole.position+(position<role.position?1:-1),});}
return this.client.rest.methods.setRolePositions(this.id,updatedRoles);}
equals(guild){let equal=guild&&this.id===guild.id&&this.available===!guild.unavailable&&this.splash===guild.splash&&this.region===guild.region&&this.name===guild.name&&this.memberCount===guild.member_count&&this.large===guild.large&&this.icon===guild.icon&&arraysEqual(this.features,guild.features)&&this.ownerID===guild.owner_id&&this.verificationLevel===guild.verification_level&&this.embedEnabled===guild.embed_enabled;if(equal){if(this.embedChannel){if(this.embedChannel.id!==guild.embed_channel_id)equal=false;}else if(guild.embed_channel_id){equal=false;}}
return equal;}
toString(){return this.name;}
_addMember(guildUser,emitEvent=true){const existing=this.members.has(guildUser.user.id);if(!(guildUser.user instanceof User))guildUser.user=this.client.dataManager.newUser(guildUser.user);guildUser.joined_at=guildUser.joined_at||0;const member=new GuildMember(this,guildUser);this.members.set(member.id,member);if(this._rawVoiceStates&&this._rawVoiceStates.has(member.user.id)){const voiceState=this._rawVoiceStates.get(member.user.id);member.serverMute=voiceState.mute;member.serverDeaf=voiceState.deaf;member.selfMute=voiceState.self_mute;member.selfDeaf=voiceState.self_deaf;member.voiceSessionID=voiceState.session_id;member.voiceChannelID=voiceState.channel_id;if(this.client.channels.has(voiceState.channel_id)){this.client.channels.get(voiceState.channel_id).members.set(member.user.id,member);}else{this.client.emit('warn',`
										Member $ {
											member.id
										}
										added in guild $ {
											this.id
										}
										with an uncached voice channel `);}}
if(this.client.ws.status===Constants.Status.READY&&emitEvent&&!existing){this.client.emit(Constants.Events.GUILD_MEMBER_ADD,member);}
this._checkChunks();return member;}
_updateMember(member,data){const oldMember=cloneObject(member);if(data.roles)member._roles=data.roles;if(typeof data.nick!=='undefined')member.nickname=data.nick;const notSame=member.nickname!==oldMember.nickname||!arraysEqual(member._roles,oldMember._roles);if(this.client.ws.status===Constants.Status.READY&&notSame){this.client.emit(Constants.Events.GUILD_MEMBER_UPDATE,oldMember,member);}
return{old:oldMember,mem:member,};}
_removeMember(guildMember){this.members.delete(guildMember.id);this._checkChunks();}
_memberSpeakUpdate(user,speaking){const member=this.members.get(user);if(member&&member.speaking!==speaking){member.speaking=speaking;this.client.emit(Constants.Events.GUILD_MEMBER_SPEAKING,member,speaking);}}
_setPresence(id,presence){if(this.presences.get(id)){this.presences.get(id).update(presence);return;}
this.presences.set(id,new Presence(presence));}
_checkChunks(){if(this._fetchWaiter){if(this.members.size===this.memberCount){this._fetchWaiter(this);this._fetchWaiter=null;}}}}
module.exports=Guild;},{"../util/ArraysEqual":131,"../util/CloneObject":132,"../util/Collection":133,"../util/Constants":134,"./Emoji":104,"./GuildMember":109,"./Presence":120,"./Role":123,"./User":125}],108:[function(require,module,exports){const Channel=require('./Channel');const Role=require('./Role');const PermissionOverwrites=require('./PermissionOverwrites');const EvaluatedPermissions=require('./EvaluatedPermissions');const Constants=require('../util/Constants');const Collection=require('../util/Collection');class GuildChannel extends Channel{constructor(guild,data){super(guild.client,data);this.guild=guild;}
setup(data){super.setup(data);this.name=data.name;this.position=data.position;this.permissionOverwrites=new Collection();if(data.permission_overwrites){for(const overwrite of data.permission_overwrites){this.permissionOverwrites.set(overwrite.id,new PermissionOverwrites(this,overwrite));}}}
permissionsFor(member){member=this.client.resolver.resolveGuildMember(this.guild,member);if(!member)return null;if(member.id===this.guild.ownerID)return new EvaluatedPermissions(member,Constants.ALL_PERMISSIONS);let permissions=0;const roles=member.roles;for(const role of roles.values())permissions|=role.permissions;const overwrites=this.overwritesFor(member,true,roles);for(const overwrite of overwrites.role.concat(overwrites.member)){permissions&=~overwrite.deny;permissions|=overwrite.allow;}
const admin=Boolean(permissions&Constants.PermissionFlags.ADMINISTRATOR);if(admin)permissions=Constants.ALL_PERMISSIONS;return new EvaluatedPermissions(member,permissions);}
overwritesFor(member,verified=false,roles=null){if(!verified)member=this.client.resolver.resolveGuildMember(this.guild,member);if(!member)return[];roles=roles||member.roles;const roleOverwrites=[];const memberOverwrites=[];for(const overwrite of this.permissionOverwrites.values()){if(overwrite.id===member.id){memberOverwrites.push(overwrite);}else if(roles.has(overwrite.id)){roleOverwrites.push(overwrite);}}
return{role:roleOverwrites,member:memberOverwrites,};}
overwritePermissions(userOrRole,options){const payload={allow:0,deny:0,};if(userOrRole instanceof Role){payload.type='role';}else if(this.guild.roles.has(userOrRole)){userOrRole=this.guild.roles.get(userOrRole);payload.type='role';}else{userOrRole=this.client.resolver.resolveUser(userOrRole);payload.type='member';if(!userOrRole)return Promise.reject(new TypeError('Supplied parameter was neither a User nor a Role.'));}
payload.id=userOrRole.id;const prevOverwrite=this.permissionOverwrites.get(userOrRole.id);if(prevOverwrite){payload.allow=prevOverwrite.allow;payload.deny=prevOverwrite.deny;}
for(const perm in options){if(options[perm]===true){payload.allow|=Constants.PermissionFlags[perm]||0;payload.deny&=~(Constants.PermissionFlags[perm]||0);}else if(options[perm]===false){payload.allow&=~(Constants.PermissionFlags[perm]||0);payload.deny|=Constants.PermissionFlags[perm]||0;}else if(options[perm]===null){payload.allow&=~(Constants.PermissionFlags[perm]||0);payload.deny&=~(Constants.PermissionFlags[perm]||0);}}
return this.client.rest.methods.setChannelOverwrite(this,payload);}
edit(data){return this.client.rest.methods.updateChannel(this,data);}
setName(name){return this.edit({name});}
setPosition(position){return this.client.rest.methods.updateChannel(this,{position});}
setTopic(topic){return this.client.rest.methods.updateChannel(this,{topic});}
createInvite(options={}){return this.client.rest.methods.createChannelInvite(this,options);}
clone(name=this.name,withPermissions=true){return this.guild.createChannel(name,this.type,withPermissions?this.permissionOverwrites:[]);}
equals(channel){let equal=channel&&this.id===channel.id&&this.type===channel.type&&this.topic===channel.topic&&this.position===channel.position&&this.name===channel.name;if(equal){if(this.permissionOverwrites&&channel.permissionOverwrites){equal=this.permissionOverwrites.equals(channel.permissionOverwrites);}else{equal=!this.permissionOverwrites&&!channel.permissionOverwrites;}}
return equal;}
toString(){return` < #$ {
											this.id
										} > `;}}
module.exports=GuildChannel;},{"../util/Collection":133,"../util/Constants":134,"./Channel":100,"./EvaluatedPermissions":105,"./PermissionOverwrites":119,"./Role":123}],109:[function(require,module,exports){const TextBasedChannel=require('./interface/TextBasedChannel');const Role=require('./Role');const EvaluatedPermissions=require('./EvaluatedPermissions');const Constants=require('../util/Constants');const Collection=require('../util/Collection');const Presence=require('./Presence').Presence;class GuildMember{constructor(guild,data){Object.defineProperty(this,'client',{value:guild.client});this.guild=guild;this.user={};this._roles=[];if(data)this.setup(data);this.lastMessageID=null;}
setup(data){this.serverDeaf=data.deaf;this.serverMute=data.mute;this.selfMute=data.self_mute;this.selfDeaf=data.self_deaf;this.voiceSessionID=data.session_id;this.voiceChannelID=data.channel_id;this.speaking=false;this.nickname=data.nick||null;this.joinedTimestamp=new Date(data.joined_at).getTime();this.user=data.user;this._roles=data.roles;}
get joinedAt(){return new Date(this.joinedTimestamp);}
get presence(){return this.frozenPresence||this.guild.presences.get(this.id)||new Presence();}
get roles(){const list=new Collection();const everyoneRole=this.guild.roles.get(this.guild.id);if(everyoneRole)list.set(everyoneRole.id,everyoneRole);for(const roleID of this._roles){const role=this.guild.roles.get(roleID);if(role)list.set(role.id,role);}
return list;}
get highestRole(){return this.roles.reduce((prev,role)=>!prev||role.comparePositionTo(prev)>0?role:prev);}
get mute(){return this.selfMute||this.serverMute;}
get deaf(){return this.selfDeaf||this.serverDeaf;}
get voiceChannel(){return this.guild.channels.get(this.voiceChannelID);}
get id(){return this.user.id;}
get displayName(){return this.nickname||this.user.username;}
get permissions(){if(this.user.id===this.guild.ownerID)return new EvaluatedPermissions(this,Constants.ALL_PERMISSIONS);let permissions=0;const roles=this.roles;for(const role of roles.values())permissions|=role.permissions;const admin=Boolean(permissions&Constants.PermissionFlags.ADMINISTRATOR);if(admin)permissions=Constants.ALL_PERMISSIONS;return new EvaluatedPermissions(this,permissions);}
get kickable(){if(this.user.id===this.guild.ownerID)return false;if(this.user.id===this.client.user.id)return false;const clientMember=this.guild.member(this.client.user);if(!clientMember.hasPermission(Constants.PermissionFlags.KICK_MEMBERS))return false;return clientMember.highestRole.comparePositionTo(this.highestRole)>0;}
get bannable(){if(this.user.id===this.guild.ownerID)return false;if(this.user.id===this.client.user.id)return false;const clientMember=this.guild.member(this.client.user);if(!clientMember.hasPermission(Constants.PermissionFlags.BAN_MEMBERS))return false;return clientMember.highestRole.comparePositionTo(this.highestRole)>0;}
permissionsIn(channel){channel=this.client.resolver.resolveChannel(channel);if(!channel||!channel.guild)throw new Error('Could not resolve channel to a guild channel.');return channel.permissionsFor(this);}
hasPermission(permission,explicit=false){if(!explicit&&this.user.id===this.guild.ownerID)return true;return this.roles.some(r=>r.hasPermission(permission,explicit));}
hasPermissions(permissions,explicit=false){if(!explicit&&this.user.id===this.guild.ownerID)return true;return permissions.every(p=>this.hasPermission(p,explicit));}
missingPermissions(permissions,explicit=false){return permissions.filter(p=>!this.hasPermission(p,explicit));}
edit(data){return this.client.rest.methods.updateGuildMember(this,data);}
setMute(mute){return this.edit({mute});}
setDeaf(deaf){return this.edit({deaf});}
setVoiceChannel(channel){return this.edit({channel});}
setRoles(roles){return this.edit({roles});}
addRole(role){if(!(role instanceof Role))role=this.guild.roles.get(role);return this.client.rest.methods.addMemberRole(this,role);}
addRoles(roles){let allRoles;if(roles instanceof Collection){allRoles=this._roles.slice();for(const role of roles.values())allRoles.push(role.id);}else{allRoles=this._roles.concat(roles);}
return this.edit({roles:allRoles});}
removeRole(role){if(!(role instanceof Role))role=this.guild.roles.get(role);return this.client.rest.methods.removeMemberRole(this,role);}
removeRoles(roles){const allRoles=this._roles.slice();if(roles instanceof Collection){for(const role of roles.values()){const index=allRoles.indexOf(role.id);if(index>=0)allRoles.splice(index,1);}}else{for(const role of roles){const index=allRoles.indexOf(role instanceof Role?role.id:role);if(index>=0)allRoles.splice(index,1);}}
return this.edit({roles:allRoles});}
setNickname(nick){return this.edit({nick});}
deleteDM(){return this.client.rest.methods.deleteChannel(this);}
kick(){return this.client.rest.methods.kickGuildMember(this.guild,this);}
ban(deleteDays=0){return this.client.rest.methods.banGuildMember(this.guild,this,deleteDays);}
toString(){return` < @$ {
											this.nickname ? '!' : ''
										}
										$ {
											this.user.id
										} > `;}
send(){return;}
sendMessage(){return;}
sendEmbed(){return;}
sendFile(){return;}
sendCode(){return;}}
TextBasedChannel.applyToClass(GuildMember);module.exports=GuildMember;},{"../util/Collection":133,"../util/Constants":134,"./EvaluatedPermissions":105,"./Presence":120,"./Role":123,"./interface/TextBasedChannel":130}],110:[function(require,module,exports){const PartialGuild=require('./PartialGuild');const PartialGuildChannel=require('./PartialGuildChannel');const Constants=require('../util/Constants');class Invite{constructor(client,data){Object.defineProperty(this,'client',{value:client});this.setup(data);}
setup(data){this.guild=this.client.guilds.get(data.guild.id)||new PartialGuild(this.client,data.guild);this.code=data.code;this.temporary=data.temporary;this.maxAge=data.max_age;this.uses=data.uses;this.maxUses=data.max_uses;if(data.inviter){this.inviter=this.client.dataManager.newUser(data.inviter);}
this.channel=this.client.channels.get(data.channel.id)||new PartialGuildChannel(this.client,data.channel);this.createdTimestamp=new Date(data.created_at).getTime();}
get createdAt(){return new Date(this.createdTimestamp);}
get expiresTimestamp(){return this.createdTimestamp+(this.maxAge*1000);}
get expiresAt(){return new Date(this.expiresTimestamp);}
get url(){return Constants.Endpoints.inviteLink(this.code);}
delete(){return this.client.rest.methods.deleteInvite(this);}
toString(){return this.url;}}
module.exports=Invite;},{"../util/Constants":134,"./PartialGuild":117,"./PartialGuildChannel":118}],111:[function(require,module,exports){const Attachment=require('./MessageAttachment');const Embed=require('./MessageEmbed');const MessageReaction=require('./MessageReaction');const Collection=require('../util/Collection');const Constants=require('../util/Constants');const escapeMarkdown=require('../util/EscapeMarkdown');const Discord=require('..');class Message{constructor(channel,data,client){Object.defineProperty(this,'client',{value:client});this.channel=channel;if(data)this.setup(data);}
setup(data){this.id=data.id;this.type=Constants.MessageTypes[data.type];this.content=data.content;this.author=this.client.dataManager.newUser(data.author);this.member=this.guild?this.guild.member(this.author)||null:null;this.pinned=data.pinned;this.tts=data.tts;this.nonce=data.nonce;this.system=data.type===6;this.embeds=data.embeds.map(e=>new Embed(this,e));this.attachments=new Collection();for(const attachment of data.attachments)this.attachments.set(attachment.id,new Attachment(this,attachment));this.createdTimestamp=new Date(data.timestamp).getTime();this.editedTimestamp=data.edited_timestamp?new Date(data.edited_timestamp).getTime():null;this.mentions={users:new Collection(),roles:new Collection(),channels:new Collection(),everyone:data.mention_everyone,};for(const mention of data.mentions){let user=this.client.users.get(mention.id);if(user){this.mentions.users.set(user.id,user);}else{user=this.client.dataManager.newUser(mention);this.mentions.users.set(user.id,user);}}
if(data.mention_roles){for(const mention of data.mention_roles){const role=this.channel.guild.roles.get(mention);if(role)this.mentions.roles.set(role.id,role);}}
if(this.channel.guild){const channMentionsRaw=data.content.match(/<#([0-9]{14,20})>/g)||[];for(const raw of channMentionsRaw){const chan=this.channel.guild.channels.get(raw.match(/([0-9]{14,20})/g)[0]);if(chan)this.mentions.channels.set(chan.id,chan);}}
this._edits=[];this.reactions=new Collection();if(data.reactions&&data.reactions.length>0){for(const reaction of data.reactions){const id=reaction.emoji.id?`
										$ {
											reaction.emoji.name
										}: $ {
											reaction.emoji.id
										}
										`:reaction.emoji.name;this.reactions.set(id,new MessageReaction(this,reaction.emoji,reaction.count,reaction.me));}}
this.webhookID=data.webhook_id||null;}
patch(data){if(data.author){this.author=this.client.users.get(data.author.id);if(this.guild)this.member=this.guild.member(this.author);}
if(data.content)this.content=data.content;if(data.timestamp)this.createdTimestamp=new Date(data.timestamp).getTime();if(data.edited_timestamp){this.editedTimestamp=data.edited_timestamp?new Date(data.edited_timestamp).getTime():null;}
if('tts'in data)this.tts=data.tts;if('mention_everyone'in data)this.mentions.everyone=data.mention_everyone;if(data.nonce)this.nonce=data.nonce;if(data.embeds)this.embeds=data.embeds.map(e=>new Embed(this,e));if(data.type>-1){this.system=false;if(data.type===6)this.system=true;}
if(data.attachments){this.attachments=new Collection();for(const attachment of data.attachments){this.attachments.set(attachment.id,new Attachment(this,attachment));}}
if(data.mentions){for(const mention of data.mentions){let user=this.client.users.get(mention.id);if(user){this.mentions.users.set(user.id,user);}else{user=this.client.dataManager.newUser(mention);this.mentions.users.set(user.id,user);}}}
if(data.mention_roles){for(const mention of data.mention_roles){const role=this.channel.guild.roles.get(mention);if(role)this.mentions.roles.set(role.id,role);}}
if(data.id)this.id=data.id;if(this.channel.guild&&data.content){const channMentionsRaw=data.content.match(/<#([0-9]{14,20})>/g)||[];for(const raw of channMentionsRaw){const chan=this.channel.guild.channels.get(raw.match(/([0-9]{14,20})/g)[0]);if(chan)this.mentions.channels.set(chan.id,chan);}}
if(data.reactions){this.reactions=new Collection();if(data.reactions.length>0){for(const reaction of data.reactions){const id=reaction.emoji.id?`
										$ {
											reaction.emoji.name
										}: $ {
											reaction.emoji.id
										}
										`:reaction.emoji.name;this.reactions.set(id,new MessageReaction(this,data.emoji,data.count,data.me));}}}}
get createdAt(){return new Date(this.createdTimestamp);}
get editedAt(){return this.editedTimestamp?new Date(this.editedTimestamp):null;}
get guild(){return this.channel.guild||null;}
get cleanContent(){return this.content.replace(/@(everyone|here)/g,'@\u200b$1').replace(/<@!?[0-9]+>/g,(input)=>{const id=input.replace(/<|!|>|@/g,'');if(this.channel.type==='dm'||this.channel.type==='group'){return this.client.users.has(id)?`
										@$ {
											this.client.users.get(id).username
										}
										`:input;}
const member=this.channel.guild.members.get(id);if(member){if(member.nickname)return`
										@$ {
											member.nickname
										}
										`;return`
										@$ {
											member.user.username
										}
										`;}else{const user=this.client.users.get(id);if(user)return`
										@$ {
											user.username
										}
										`;return input;}}).replace(/<#[0-9]+>/g,(input)=>{const channel=this.client.channels.get(input.replace(/<|#|>/g,''));if(channel)return`#
										$ {
											channel.name
										}
										`;return input;}).replace(/<@&[0-9]+>/g,(input)=>{if(this.channel.type==='dm'||this.channel.type==='group')return input;const role=this.guild.roles.get(input.replace(/<|@|>|&/g,''));if(role)return`
										@$ {
											role.name
										}
										`;return input;});}
get edits(){const copy=this._edits.slice();copy.unshift(this);return copy;}
get editable(){return this.author.id===this.client.user.id;}
get deletable(){return this.author.id===this.client.user.id||(this.guild&&this.channel.permissionsFor(this.client.user).hasPermission(Constants.PermissionFlags.MANAGE_MESSAGES));}
get pinnable(){return!this.guild||this.channel.permissionsFor(this.client.user).hasPermission(Constants.PermissionFlags.MANAGE_MESSAGES);}
isMentioned(data){data=data&&data.id?data.id:data;return this.mentions.users.has(data)||this.mentions.channels.has(data)||this.mentions.roles.has(data);}
isMemberMentioned(member){if(this.mentions.everyone)return true;if(this.mentions.users.has(member.id))return true;if(member instanceof Discord.GuildMember&&member.roles.some(r=>this.mentions.roles.has(r.id)))return true;return false;}
edit(content,options){if(!options&&typeof content==='object'){options=content;content='';}else if(!options){options={};}
return this.client.rest.methods.updateMessage(this,content,options);}
editCode(lang,content){content=escapeMarkdown(this.client.resolver.resolveString(content),true);return this.edit(`\
										`\`\`${lang||''}\n${content}\n\`\`\``);
								}
								pin() {
									return this.client.rest.methods.pinMessage(this);
								}
								unpin() {
									return this.client.rest.methods.unpinMessage(this);
								}
								react(emoji) {
									emoji = this.client.resolver.resolveEmojiIdentifier(emoji);
									if(!emoji) throw new TypeError('Emoji must be a string or Emoji/ReactionEmoji');
									return this.client.rest.methods.addMessageReaction(this, emoji);
								}
								clearReactions() {
									return this.client.rest.methods.removeMessageReactions(this);
								}
								delete(timeout = 0) {
									if(timeout <= 0) {
										return this.client.rest.methods.deleteMessage(this);
									} else {
										return new Promise(resolve => {
											this.client.setTimeout(() => {
												resolve(this.delete());
											}, timeout);
										});
									}
								}
								reply(content, options = {}) {
									content = `${this.guild||this.channel.type==='group'?`${this.author},`:''}${content}`;
									return this.channel.send(content, options);
								}
								fetchWebhook() {
									if(!this.webhookID) return Promise.reject(new Error('The message was not sent by a webhook.'));
									return this.client.fetchWebhook(this.webhookID);
								}
								equals(message, rawData) {
									if(!message) return false;
									const embedUpdate = !message.author && !message.attachments;
									if(embedUpdate) return this.id === message.id && this.embeds.length === message.embeds.length;
									let equal = this.id === message.id && this.author.id === message.author.id && this.content === message.content && this.tts === message.tts && this.nonce === message.nonce && this.embeds.length === message.embeds.length && this.attachments.length === message.attachments.length;
									if(equal && rawData) {
										equal = this.mentions.everyone === message.mentions.everyone && this.createdTimestamp === new Date(rawData.timestamp).getTime() && this.editedTimestamp === new Date(rawData.edited_timestamp).getTime();
									}
									return equal;
								}
								toString() {
									return this.content;
								}
								_addReaction(emoji, user) {
									const emojiID = emoji.id ? `${emoji.name}:${emoji.id}` : emoji.name;
									let reaction;
									if(this.reactions.has(emojiID)) {
										reaction = this.reactions.get(emojiID);
										if(!reaction.me) reaction.me = user.id === this.client.user.id;
									} else {
										reaction = new MessageReaction(this, emoji, 0, user.id === this.client.user.id);
										this.reactions.set(emojiID, reaction);
									}
									if(!reaction.users.has(user.id)) {
										reaction.users.set(user.id, user);
										reaction.count++;
										return reaction;
									}
									return null;
								}
								_removeReaction(emoji, user) {
									const emojiID = emoji.id || emoji;
									if(this.reactions.has(emojiID)) {
										const reaction = this.reactions.get(emojiID);
										if(reaction.users.has(user.id)) {
											reaction.users.delete(user.id);
											reaction.count--;
											if(user.id === this.client.user.id) reaction.me = false;
											return reaction;
										}
									}
									return null;
								}
								_clearReactions() {
									this.reactions.clear();
								}
							}
							module.exports = Message;
						}, {
							"..": 96,
							"../util/Collection": 133,
							"../util/Constants": 134,
							"../util/EscapeMarkdown": 136,
							"./MessageAttachment": 112,
							"./MessageEmbed": 114,
							"./MessageReaction": 115
						}], 112: [function (require, module, exports) {
							class MessageAttachment {
								constructor(message, data) {
									Object.defineProperty(this, 'client', {
										value: message.client
									});
									this.message = message;
									this.setup(data);
								}
								setup(data) {
									this.id = data.id;
									this.filename = data.filename;
									this.filesize = data.size;
									this.url = data.url;
									this.proxyURL = data.proxy_url;
									this.height = data.height;
									this.width = data.width;
								}
							}
							module.exports = MessageAttachment;
						}, {}], 113: [function (require, module, exports) {
							const EventEmitter = require('events').EventEmitter;
							const Collection = require('../util/Collection');
							class MessageCollector extends EventEmitter {
								constructor(channel, filter, options = {}) {
									super();
									this.channel = channel;
									this.filter = filter;
									this.options = options;
									this.ended = false;
									this.collected = new Collection();
									this.listener = message => this.verify(message);
									this.channel.client.on('message', this.listener);
									if(options.time) this.channel.client.setTimeout(() => this.stop('time'), options.time);
								}
								verify(message) {
									if(this.channel ? this.channel.id !== message.channel.id : false) return false;
									if(this.filter(message, this)) {
										this.collected.set(message.id, message);
										this.emit('message', message, this);
										if(this.collected.size >= this.options.maxMatches) this.stop('matchesLimit');
										else if(this.options.max && this.collected.size === this.options.max) this.stop('limit');
										return true;
									}
									return false;
								}
								get next() {
									return new Promise((resolve, reject) => {
										if(this.ended) {
											reject(this.collected);
											return;
										}
										const cleanup = () => {
											this.removeListener('message', onMessage);
											this.removeListener('end', onEnd);
										};
										const onMessage = (...args) => {
											cleanup();
											resolve(...args);
										};
										const onEnd = (...args) => {
											cleanup();
											reject(...args);
										};
										this.once('message', onMessage);
										this.once('end', onEnd);
									});
								}
								stop(reason = 'user') {
									if(this.ended) return;
									this.ended = true;
									this.channel.client.removeListener('message', this.listener);
									this.emit('end', this.collected, reason);
								}
							}
							module.exports = MessageCollector;
						}, {
							"../util/Collection": 133,
							"events": 175
						}], 114: [function (require, module, exports) {
							class MessageEmbed {
								constructor(message, data) {
									Object.defineProperty(this, 'client', {
										value: message.client
									});
									this.message = message;
									this.setup(data);
								}
								setup(data) {
									this.type = data.type;
									this.title = data.title;
									this.description = data.description;
									this.url = data.url;
									this.color = data.color;
									this.fields = [];
									if(data.fields)
										for(const field of data.fields) this.fields.push(new MessageEmbedField(this, field));
									this.createdTimestamp = data.timestamp;
									this.thumbnail = data.thumbnail ? new MessageEmbedThumbnail(this, data.thumbnail) : null;
									this.author = data.author ? new MessageEmbedAuthor(this, data.author) : null;
									this.provider = data.provider ? new MessageEmbedProvider(this, data.provider) : null;
									this.footer = data.footer ? new MessageEmbedFooter(this, data.footer) : null;
								}
								get createdAt() {
									return new Date(this.createdTimestamp);
								}
								get hexColor() {
									let col = this.color.toString(16);
									while(col.length < 6) col = `0${col}`;
									return `#${col}`;
								}
							}
							class MessageEmbedThumbnail {
								constructor(embed, data) {
									this.embed = embed;
									this.setup(data);
								}
								setup(data) {
									this.url = data.url;
									this.proxyURL = data.proxy_url;
									this.height = data.height;
									this.width = data.width;
								}
							}
							class MessageEmbedProvider {
								constructor(embed, data) {
									this.embed = embed;
									this.setup(data);
								}
								setup(data) {
									this.name = data.name;
									this.url = data.url;
								}
							}
							class MessageEmbedAuthor {
								constructor(embed, data) {
									this.embed = embed;
									this.setup(data);
								}
								setup(data) {
									this.name = data.name;
									this.url = data.url;
									this.iconURL = data.icon_url;
								}
							}
							class MessageEmbedField {
								constructor(embed, data) {
									this.embed = embed;
									this.setup(data);
								}
								setup(data) {
									this.name = data.name;
									this.value = data.value;
									this.inline = data.inline;
								}
							}
							class MessageEmbedFooter {
								constructor(embed, data) {
									this.embed = embed;
									this.setup(data);
								}
								setup(data) {
									this.text = data.text;
									this.iconURL = data.icon_url;
									this.proxyIconUrl = data.proxy_icon_url;
								}
							}
							MessageEmbed.Thumbnail = MessageEmbedThumbnail;
							MessageEmbed.Provider = MessageEmbedProvider;
							MessageEmbed.Author = MessageEmbedAuthor;
							MessageEmbed.Field = MessageEmbedField;
							MessageEmbed.Footer = MessageEmbedFooter;
							module.exports = MessageEmbed;
						}, {}], 115: [function (require, module, exports) {
							const Collection = require('../util/Collection');
							const Emoji = require('./Emoji');
							const ReactionEmoji = require('./ReactionEmoji');
							class MessageReaction {
								constructor(message, emoji, count, me) {
									this.message = message;
									this.me = me;
									this.count = count || 0;
									this.users = new Collection();
									this._emoji = new ReactionEmoji(this, emoji.name, emoji.id);
								}
								get emoji() {
									if(this._emoji instanceof Emoji) return this._emoji;
									if(this._emoji.id) {
										const emojis = this.message.client.emojis;
										if(emojis.has(this._emoji.id)) {
											const emoji = emojis.get(this._emoji.id);
											this._emoji = emoji;
											return emoji;
										}
									}
									return this._emoji;
								}
								remove(user = this.message.client.user) {
									const message = this.message;
									user = this.message.client.resolver.resolveUserID(user);
									if(!user) return Promise.reject('Couldn\'t resolve the user ID to remove from the reaction.');
									return message.client.rest.methods.removeMessageReaction(message, this.emoji.identifier, user);
								}
								fetchUsers(limit = 100) {
									const message = this.message;
									return message.client.rest.methods.getMessageReactionUsers(message, this.emoji.identifier, limit).then(users => {
										this.users = new Collection();
										for(const rawUser of users) {
											const user = this.message.client.dataManager.newUser(rawUser);
											this.users.set(user.id, user);
										}
										this.count = this.users.size;
										return users;
									});
								}
							}
							module.exports = MessageReaction;
						}, {
							"../util/Collection": 133,
							"./Emoji": 104,
							"./ReactionEmoji": 121
						}], 116: [function (require, module, exports) {
								class OAuth2Application {
									constructor(client, data) {
										Object.defineProperty(this, 'client', {
											value: client
										});
										this.setup(data);
									}
									setup(data) {
										this.id = data.id;
										this.name = data.name;
										this.description = data.description;
										this.icon = data.icon;
										this.iconURL = `https:this.rpcOrigins=data.rpc_origins;}
get createdTimestamp(){return(this.id / 4194304)+1420070400000;}
get createdAt(){return new Date(this.createdTimestamp);}
toString(){return this.name;}}
module.exports=OAuth2Application;},{}],117:[function(require,module,exports){class PartialGuild{constructor(client,data){Object.defineProperty(this,'client',{value:client});this.setup(data);}
setup(data){this.id=data.id;this.name=data.name;this.icon=data.icon;this.splash=data.splash;}}
module.exports=PartialGuild;},{}],118:[function(require,module,exports){const Constants=require('../util/Constants');class PartialGuildChannel{constructor(client,data){Object.defineProperty(this,'client',{value:client});this.setup(data);}
setup(data){this.id=data.id;this.name=data.name;this.type=Constants.ChannelTypes.text===data.type?'text':'voice';}}
module.exports=PartialGuildChannel;},{"../util/Constants":134}],119:[function(require,module,exports){class PermissionOverwrites{constructor(guildChannel,data){Object.defineProperty(this,'channel',{value:guildChannel});if(data)this.setup(data);}
setup(data){this.id=data.id;this.type=data.type;this.deny=data.deny;this.allow=data.allow;}
delete(){return this.channel.client.rest.methods.deletePermissionOverwrites(this);}}
module.exports=PermissionOverwrites;},{}],120:[function(require,module,exports){class Presence{constructor(data={}){this.status=data.status||'offline';this.game=data.game?new Game(data.game):null;}
update(data){this.status=data.status||this.status;this.game=data.game?new Game(data.game):null;}
equals(presence){return this===presence||(presence&&this.status===presence.status&&this.game?this.game.equals(presence.game):!presence.game);}}
class Game{constructor(data){this.name=data.name;this.type=data.type;this.url=data.url||null;}
get streaming(){return this.type===1;}
equals(game){return this===game||(game&&this.name===game.name&&this.type===game.type&&this.url===game.url);}}
exports.Presence=Presence;exports.Game=Game;},{}],121:[function(require,module,exports){class ReactionEmoji{constructor(reaction,name,id){this.reaction=reaction;this.name=name;this.id=id;}
get identifier(){if(this.id)return`
										$ {
											this.name
										}: $ {
											this.id
										}
										`;return encodeURIComponent(this.name);}
toString(){return this.id?` < : $ {
											this.name
										}: $ {
											this.id
										} > `:this.name;}}
module.exports=ReactionEmoji;},{}],122:[function(require,module,exports){class RichEmbed{constructor(data={}){this.title=data.title;this.description=data.description;this.url=data.url;this.color=data.color;this.author=data.author;this.timestamp=data.timestamp;this.fields=data.fields||[];this.thumbnail=data.thumbnail;this.image=data.image;this.footer=data.footer;}
setTitle(title){title=resolveString(title);if(title.length>256)throw new RangeError('RichEmbed titles may not exceed 256 characters.');this.title=title;return this;}
setDescription(description){description=resolveString(description);if(description.length>2048)throw new RangeError('RichEmbed descriptions may not exceed 2048 characters.');this.description=description;return this;}
setURL(url){this.url=url;return this;}
setColor(color){let radix=10;if(color instanceof Array){color=(color[0]<<16)+(color[1]<<8)+color[2];}else if(typeof color==='string'&&color.startsWith('#')){radix=16;color=color.replace('#','');}
color=parseInt(color,radix);if(color<0||color>0xFFFFFF){throw new RangeError('RichEmbed color must be within the range 0 - 16777215 (0xFFFFFF).');}else if(color&&isNaN(color)){throw new TypeError('Unable to convert RichEmbed color to a number.');}
this.color=color;return this;}
setAuthor(name,icon,url){this.author={name:resolveString(name),icon_url:icon,url};return this;}
setTimestamp(timestamp=new Date()){this.timestamp=timestamp;return this;}
addField(name,value,inline=false){if(this.fields.length>=25)throw new RangeError('RichEmbeds may not exceed 25 fields.');name=resolveString(name);if(name.length>256)throw new RangeError('RichEmbed field names may not exceed 256 characters.');value=resolveString(value);if(value.length>1024)throw new RangeError('RichEmbed field values may not exceed 1024 characters.');this.fields.push({name:String(name),value:value,inline});return this;}
setThumbnail(url){this.thumbnail={url};return this;}
setImage(url){this.image={url};return this;}
setFooter(text,icon){text=resolveString(text);if(text.length>2048)throw new RangeError('RichEmbed footer text may not exceed 2048 characters.');this.footer={text,icon_url:icon};return this;}}
module.exports=RichEmbed;function resolveString(data){if(typeof data==='string')return data;if(data instanceof Array)return data.join('\n');return String(data);}},{}],123:[function(require,module,exports){const Constants=require('../util/Constants');class Role{constructor(guild,data){Object.defineProperty(this,'client',{value:guild.client});this.guild=guild;if(data)this.setup(data);}
setup(data){this.id=data.id;this.name=data.name;this.color=data.color;this.hoist=data.hoist;this.position=data.position;this.permissions=data.permissions;this.managed=data.managed;this.mentionable=data.mentionable;}
get createdTimestamp(){return(this.id / 4194304)+1420070400000;}
get createdAt(){return new Date(this.createdTimestamp);}
get hexColor(){let col=this.color.toString(16);while(col.length<6)col=`
										0 $ {
											col
										}
										`;return`#
										$ {
											col
										}
										`;}
get members(){return this.guild.members.filter(m=>m.roles.has(this.id));}
get editable(){if(this.managed)return false;const clientMember=this.guild.member(this.client.user);if(!clientMember.hasPermission(Constants.PermissionFlags.MANAGE_ROLES_OR_PERMISSIONS))return false;return clientMember.highestRole.comparePositionTo(this)>0;}
serialize(){const serializedPermissions={};for(const permissionName in Constants.PermissionFlags){serializedPermissions[permissionName]=this.hasPermission(permissionName);}
return serializedPermissions;}
hasPermission(permission,explicit=false){permission=this.client.resolver.resolvePermission(permission);if(!explicit&&(this.permissions&Constants.PermissionFlags.ADMINISTRATOR)>0)return true;return(this.permissions&permission)>0;}
hasPermissions(permissions,explicit=false){return permissions.every(p=>this.hasPermission(p,explicit));}
comparePositionTo(role){return this.constructor.comparePositions(this,role);}
edit(data){return this.client.rest.methods.updateGuildRole(this,data);}
setName(name){return this.edit({name});}
setColor(color){return this.edit({color});}
setHoist(hoist){return this.edit({hoist});}
setPosition(position){return this.guild.setRolePosition(this,position).then(()=>this);}
setPermissions(permissions){return this.edit({permissions});}
setMentionable(mentionable){return this.edit({mentionable});}
delete(){return this.client.rest.methods.deleteGuildRole(this);}
equals(role){return role&&this.id===role.id&&this.name===role.name&&this.color===role.color&&this.hoist===role.hoist&&this.position===role.position&&this.permissions===role.permissions&&this.managed===role.managed;}
toString(){if(this.id===this.guild.id)return'@everyone';return` < @ & $ {
											this.id
										} > `;}
static comparePositions(role1,role2){if(role1.position===role2.position)return role2.id-role1.id;return role1.position-role2.position;}}
module.exports=Role;},{"../util/Constants":134}],124:[function(require,module,exports){const GuildChannel=require('./GuildChannel');const TextBasedChannel=require('./interface/TextBasedChannel');const Collection=require('../util/Collection');class TextChannel extends GuildChannel{constructor(guild,data){super(guild,data);this.type='text';this.messages=new Collection();this._typing=new Map();}
setup(data){super.setup(data);this.topic=data.topic;this.lastMessageID=data.last_message_id;}
get members(){const members=new Collection();for(const member of this.guild.members.values()){if(this.permissionsFor(member).hasPermission('READ_MESSAGES')){members.set(member.id,member);}}
return members;}
fetchWebhooks(){return this.client.rest.methods.getChannelWebhooks(this);}
createWebhook(name,avatar){return new Promise(resolve=>{if(avatar.startsWith('data:')){resolve(this.client.rest.methods.createWebhook(this,name,avatar));}else{this.client.resolver.resolveBuffer(avatar).then(data=>resolve(this.client.rest.methods.createWebhook(this,name,data)));}});}
send(){return;}
sendMessage(){return;}
sendEmbed(){return;}
sendFile(){return;}
sendCode(){return;}
fetchMessage(){return;}
fetchMessages(){return;}
fetchPinnedMessages(){return;}
startTyping(){return;}
stopTyping(){return;}
get typing(){return;}
get typingCount(){return;}
createCollector(){return;}
awaitMessages(){return;}
bulkDelete(){return;}
_cacheMessage(){return;}}
TextBasedChannel.applyToClass(TextChannel,true);module.exports=TextChannel;},{"../util/Collection":133,"./GuildChannel":108,"./interface/TextBasedChannel":130}],125:[function(require,module,exports){const TextBasedChannel=require('./interface/TextBasedChannel');const Constants=require('../util/Constants');const Presence=require('./Presence').Presence;class User{constructor(client,data){Object.defineProperty(this,'client',{value:client});if(data)this.setup(data);}
setup(data){this.id=data.id;this.username=data.username;this.discriminator=data.discriminator;this.avatar=data.avatar;this.bot=Boolean(data.bot);this.lastMessageID=null;}
patch(data){for(const prop of['id','username','discriminator','avatar','bot']){if(typeof data[prop]!=='undefined')this[prop]=data[prop];}
if(data.token)this.client.token=data.token;}
get createdTimestamp(){return(this.id / 4194304)+1420070400000;}
get createdAt(){return new Date(this.createdTimestamp);}
get presence(){if(this.client.presences.has(this.id))return this.client.presences.get(this.id);for(const guild of this.client.guilds.values()){if(guild.presences.has(this.id))return guild.presences.get(this.id);}
return new Presence();}
get avatarURL(){if(!this.avatar)return null;return Constants.Endpoints.avatar(this.id,this.avatar);}
get defaultAvatarURL(){let defaultAvatars=Object.values(Constants.DefaultAvatars);let defaultAvatar=this.discriminator%defaultAvatars.length;return Constants.Endpoints.assets(`
										$ {
											defaultAvatars[defaultAvatar]
										}.png `);}
get displayAvatarURL(){return this.avatarURL||this.defaultAvatarURL;}
get note(){return this.client.user.notes.get(this.id)||null;}
typingIn(channel){channel=this.client.resolver.resolveChannel(channel);return channel._typing.has(this.id);}
typingSinceIn(channel){channel=this.client.resolver.resolveChannel(channel);return channel._typing.has(this.id)?new Date(channel._typing.get(this.id).since):null;}
typingDurationIn(channel){channel=this.client.resolver.resolveChannel(channel);return channel._typing.has(this.id)?channel._typing.get(this.id).elapsedTime:-1;}
get dmChannel(){return this.client.channels.filter(c=>c.type==='dm').find(c=>c.recipient.id===this.id);}
deleteDM(){return this.client.rest.methods.deleteChannel(this);}
addFriend(){return this.client.rest.methods.addFriend(this);}
removeFriend(){return this.client.rest.methods.removeFriend(this);}
block(){return this.client.rest.methods.blockUser(this);}
unblock(){return this.client.rest.methods.unblockUser(this);}
fetchProfile(){return this.client.rest.methods.fetchUserProfile(this);}
setNote(note){return this.client.rest.methods.setNote(this,note);}
equals(user){let equal=user&&this.id===user.id&&this.username===user.username&&this.discriminator===user.discriminator&&this.avatar===user.avatar&&this.bot===Boolean(user.bot);return equal;}
toString(){return` < @$ {
											this.id
										} > `;}
send(){return;}
sendMessage(){return;}
sendEmbed(){return;}
sendFile(){return;}
sendCode(){return;}}
TextBasedChannel.applyToClass(User);module.exports=User;},{"../util/Constants":134,"./Presence":120,"./interface/TextBasedChannel":130}],126:[function(require,module,exports){class UserConnection{constructor(user,data){this.user=user;this.setup(data);}
setup(data){this.type=data.type;this.name=data.name;this.id=data.id;this.revoked=data.revoked;this.integrations=data.integrations;}}
module.exports=UserConnection;},{}],127:[function(require,module,exports){const Collection=require('../util/Collection');const UserConnection=require('./UserConnection');class UserProfile{constructor(user,data){this.user=user;Object.defineProperty(this,'client',{value:user.client});this.mutualGuilds=new Collection();this.connections=new Collection();this.setup(data);}
setup(data){this.premium=data.premium;for(const guild of data.mutual_guilds){if(this.client.guilds.has(guild.id)){this.mutualGuilds.set(guild.id,this.client.guilds.get(guild.id));}}
for(const connection of data.connected_accounts){this.connections.set(connection.id,new UserConnection(this.user,connection));}}}
module.exports=UserProfile;},{"../util/Collection":133,"./UserConnection":126}],128:[function(require,module,exports){const GuildChannel=require('./GuildChannel');const Collection=require('../util/Collection');class VoiceChannel extends GuildChannel{constructor(guild,data){super(guild,data);this.members=new Collection();this.type='voice';}
setup(data){super.setup(data);this.bitrate=data.bitrate;this.userLimit=data.user_limit;}
get connection(){const connection=this.guild.voiceConnection;if(connection&&connection.channel.id===this.id)return connection;return null;}
get joinable(){if(this.client.browser)return false;return this.permissionsFor(this.client.user).hasPermission('CONNECT');}
get speakable(){return this.permissionsFor(this.client.user).hasPermission('SPEAK');}
setBitrate(bitrate){return this.edit({bitrate});}
setUserLimit(userLimit){return this.edit({userLimit});}
join(){if(this.client.browser)return Promise.reject(new Error('Voice connections are not available in browsers.'));return this.client.voice.joinChannel(this);}
leave(){if(this.client.browser)return;const connection=this.client.voice.connections.get(this.guild.id);if(connection&&connection.channel.id===this.id)connection.disconnect();}}
module.exports=VoiceChannel;},{"../util/Collection":133,"./GuildChannel":108}],129:[function(require,module,exports){const path=require('path');const escapeMarkdown=require('../util/EscapeMarkdown');class Webhook{constructor(client,dataOrID,token){if(client){Object.defineProperty(this,'client',{value:client});if(dataOrID)this.setup(dataOrID);}else{this.id=dataOrID;this.token=token;Object.defineProperty(this,'client',{value:this});}}
setup(data){this.name=data.name;this.token=data.token;this.avatar=data.avatar;this.id=data.id;this.guildID=data.guild_id;this.channelID=data.channel_id;if(data.user)this.owner=data.user;}
sendMessage(content,options={}){return this.client.rest.methods.sendWebhookMessage(this,content,options);}
sendSlackMessage(body){return this.client.rest.methods.sendSlackWebhookMessage(this,body);}
sendTTSMessage(content,options={}){Object.assign(options,{tts:true});return this.client.rest.methods.sendWebhookMessage(this,content,options);}
sendFile(attachment,fileName,content,options={}){if(!fileName){if(typeof attachment==='string'){fileName=path.basename(attachment);}else if(attachment&&attachment.path){fileName=path.basename(attachment.path);}else{fileName='file.jpg';}}
return this.client.resolver.resolveBuffer(attachment).then(file=>this.client.rest.methods.sendWebhookMessage(this,content,options,{file,name:fileName,}));}
sendCode(lang,content,options={}){if(options.split){if(typeof options.split!=='object')options.split={};if(!options.split.prepend)options.split.prepend=`\
										`\`\`${lang||''}\n`;
										if(!options.split.append) options.split.append = '\n```';
									}
									content = escapeMarkdown(this.client.resolver.resolveString(content), true);
									return this.sendMessage(`\`\`\`${lang||''}\n${content}\n\`\`\``, options);
								}
								edit(name = this.name, avatar) {
									if(avatar) {
										return this.client.resolver.resolveBuffer(avatar).then(file => {
											const dataURI = this.client.resolver.resolveBase64(file);
											return this.client.rest.methods.editWebhook(this, name, dataURI);
										});
									}
									return this.client.rest.methods.editWebhook(this, name).then(data => {
										this.setup(data);
										return this;
									});
								}
								delete() {
									return this.client.rest.methods.deleteWebhook(this);
								}
							}
							module.exports = Webhook;
						}, {
							"../util/EscapeMarkdown": 136,
							"path": 191
						}], 130: [function (require, module, exports) {
						const path = require('path');
						const Message = require('../Message');
						const MessageCollector = require('../MessageCollector');
						const Collection = require('../../util/Collection');
						class TextBasedChannel {
							constructor() {
								this.messages = new Collection();
								this.lastMessageID = null;
							}
							send(content, options) {
								if(!options && typeof content === 'object' && !(content instanceof Array)) {
									options = content;
									content = '';
								} else if(!options) {
									options = {};
								}
								if(options.file) {
									if(typeof options.file === 'string') options.file = {
										attachment: options.file
									};
									if(!options.file.name) {
										if(typeof options.file.attachment === 'string') {
											options.file.name = path.basename(options.file.attachment);
										} else if(options.file.attachment && options.file.attachment.path) {
											options.file.name = path.basename(options.file.attachment.path);
										} else {
											options.file.name = 'file.jpg';
										}
									}
									return this.client.resolver.resolveBuffer(options.file.attachment).then(file => this.client.rest.methods.sendMessage(this, content, options, {
										file,
										name: options.file.name,
									}));
								}
								return this.client.rest.methods.sendMessage(this, content, options);
							}
							sendMessage(content, options) {
								return this.send(content, options);
							}
							sendEmbed(embed, content, options) {
								if(!options && typeof content === 'object') {
									options = content;
									content = '';
								} else if(!options) {
									options = {};
								}
								return this.send(content, Object.assign(options, {
									embed
								}));
							}
							sendFile(attachment, name, content, options = {}) {
								return this.send(content, Object.assign(options, {
									file: {
										attachment,
										name
									}
								}));
							}
							sendCode(lang, content, options = {}) {
								return this.send(content, Object.assign(options, {
									code: lang
								}));
							}
							fetchMessage(messageID) {
								return this.client.rest.methods.getChannelMessage(this, messageID).then(data => {
									const msg = data instanceof Message ? data : new Message(this, data, this.client);
									this._cacheMessage(msg);
									return msg;
								});
							}
							fetchMessages(options = {}) {
								return this.client.rest.methods.getChannelMessages(this, options).then(data => {
									const messages = new Collection();
									for(const message of data) {
										const msg = new Message(this, message, this.client);
										messages.set(message.id, msg);
										this._cacheMessage(msg);
									}
									return messages;
								});
							}
							fetchPinnedMessages() {
								return this.client.rest.methods.getChannelPinnedMessages(this).then(data => {
									const messages = new Collection();
									for(const message of data) {
										const msg = new Message(this, message, this.client);
										messages.set(message.id, msg);
										this._cacheMessage(msg);
									}
									return messages;
								});
							}
							startTyping(count) {
								if(typeof count !== 'undefined' && count < 1) throw new RangeError('Count must be at least 1.');
								if(!this.client.user._typing.has(this.id)) {
									this.client.user._typing.set(this.id, {
										count: count || 1,
										interval: this.client.setInterval(() => {
											this.client.rest.methods.sendTyping(this.id);
										}, 4000),
									});
									this.client.rest.methods.sendTyping(this.id);
								} else {
									const entry = this.client.user._typing.get(this.id);
									entry.count = count || entry.count + 1;
								}
							}
							stopTyping(force = false) {
								if(this.client.user._typing.has(this.id)) {
									const entry = this.client.user._typing.get(this.id);
									entry.count--;
									if(entry.count <= 0 || force) {
										this.client.clearInterval(entry.interval);
										this.client.user._typing.delete(this.id);
									}
								}
							}
							get typing() {
								return this.client.user._typing.has(this.id);
							}
							get typingCount() {
								if(this.client.user._typing.has(this.id)) return this.client.user._typing.get(this.id).count;
								return 0;
							}
							createCollector(filter, options = {}) {
								return new MessageCollector(this, filter, options);
							}
							awaitMessages(filter, options = {}) {
								return new Promise((resolve, reject) => {
									const collector = this.createCollector(filter, options);
									collector.on('end', (collection, reason) => {
										if(options.errors && options.errors.includes(reason)) {
											reject(collection);
										} else {
											resolve(collection);
										}
									});
								});
							}
							bulkDelete(messages) {
								if(!isNaN(messages)) return this.fetchMessages({
									limit: messages
								}).then(msgs => this.bulkDelete(msgs));
								if(messages instanceof Array || messages instanceof Collection) {
									const messageIDs = messages instanceof Collection ? messages.keyArray() : messages.map(m => m.id);
									return this.client.rest.methods.bulkDeleteMessages(this, messageIDs);
								}
								throw new TypeError('The messages must be an Array, Collection, or number.');
							}
							_cacheMessage(message) {
								const maxSize = this.client.options.messageCacheMaxSize;
								if(maxSize === 0) return null;
								if(this.messages.size >= maxSize && maxSize > 0) this.messages.delete(this.messages.firstKey());
								this.messages.set(message.id, message);
								return message;
							}
						}
						exports.applyToClass = (structure, full = false) => {
							const props = ['send', 'sendMessage', 'sendEmbed', 'sendFile', 'sendCode'];
							if(full) {
								props.push('_cacheMessage', 'fetchMessages', 'fetchMessage', 'bulkDelete', 'startTyping', 'stopTyping', 'typing', 'typingCount', 'fetchPinnedMessages', 'createCollector', 'awaitMessages');
							}
							for(const prop of props) {
								Object.defineProperty(structure.prototype, prop, Object.getOwnPropertyDescriptor(TextBasedChannel.prototype, prop));
							}
						};
					}, {
						"../../util/Collection": 133,
						"../Message": 111,
						"../MessageCollector": 113,
						"path": 191
					}], 131: [function (require, module, exports) {
						module.exports = function arraysEqual(a, b) {
							if(a === b) return true;
							if(a.length !== b.length) return false;
							for(const itemInd in a) {
								const item = a[itemInd];
								const ind = b.indexOf(item);
								if(ind) {
									b.splice(ind, 1);
								}
							}
							return b.length === 0;
						};
					}, {}], 132: [function (require, module, exports) {
						module.exports = function cloneObject(obj) {
							const cloned = Object.create(obj);
							Object.assign(cloned, obj);
							return cloned;
						};
					}, {}], 133: [function (require, module, exports) {
						class Collection extends Map {
							constructor(iterable) {
								super(iterable);
								this._array = null;
								this._keyArray = null;
							}
							set(key, val) {
								this._array = null;
								this._keyArray = null;
								return super.set(key, val);
							}
							delete(key) {
								this._array = null;
								this._keyArray = null;
								return super.delete(key);
							}
							array() {
								if(!this._array || this._array.length !== this.size) this._array = Array.from(this.values());
								return this._array;
							}
							keyArray() {
								if(!this._keyArray || this._keyArray.length !== this.size) this._keyArray = Array.from(this.keys());
								return this._keyArray;
							}
							first() {
								return this.values().next().value;
							}
							firstKey() {
								return this.keys().next().value;
							}
							last() {
								const arr = this.array();
								return arr[arr.length - 1];
							}
							lastKey() {
								const arr = this.keyArray();
								return arr[arr.length - 1];
							}
							random() {
								const arr = this.array();
								return arr[Math.floor(Math.random() * arr.length)];
							}
							randomKey() {
								const arr = this.keyArray();
								return arr[Math.floor(Math.random() * arr.length)];
							}
							findAll(prop, value) {
								if(typeof prop !== 'string') throw new TypeError('Key must be a string.');
								if(typeof value === 'undefined') throw new Error('Value must be specified.');
								const results = [];
								for(const item of this.values()) {
									if(item[prop] === value) results.push(item);
								}
								return results;
							}
							find(propOrFn, value) {
								if(typeof propOrFn === 'string') {
									if(typeof value === 'undefined') throw new Error('Value must be specified.');
									if(propOrFn === 'id') throw new RangeError('Don\'t use .find() with IDs. Instead, use .get(id).');
									for(const item of this.values()) {
										if(item[propOrFn] === value) return item;
									}
									return null;
								} else if(typeof propOrFn === 'function') {
									for(const [key, val] of this) {
										if(propOrFn(val, key, this)) return val;
									}
									return null;
								} else {
									throw new Error('First argument must be a property string or a function.');
								}
							}
							findKey(propOrFn, value) {
								if(typeof propOrFn === 'string') {
									if(typeof value === 'undefined') throw new Error('Value must be specified.');
									for(const [key, val] of this) {
										if(val[propOrFn] === value) return key;
									}
									return null;
								} else if(typeof propOrFn === 'function') {
									for(const [key, val] of this) {
										if(propOrFn(val, key, this)) return key;
									}
									return null;
								} else {
									throw new Error('First argument must be a property string or a function.');
								}
							}
							exists(prop, value) {
								if(prop === 'id') throw new RangeError('Don\'t use .exists() with IDs. Instead, use .has(id).');
								return Boolean(this.find(prop, value));
							}
							filter(fn, thisArg) {
								if(thisArg) fn = fn.bind(thisArg);
								const results = new Collection();
								for(const [key, val] of this) {
									if(fn(val, key, this)) results.set(key, val);
								}
								return results;
							}
							filterArray(fn, thisArg) {
								if(thisArg) fn = fn.bind(thisArg);
								const results = [];
								for(const [key, val] of this) {
									if(fn(val, key, this)) results.push(val);
								}
								return results;
							}
							map(fn, thisArg) {
								if(thisArg) fn = fn.bind(thisArg);
								const arr = new Array(this.size);
								let i = 0;
								for(const [key, val] of this) arr[i++] = fn(val, key, this);
								return arr;
							}
							some(fn, thisArg) {
								if(thisArg) fn = fn.bind(thisArg);
								for(const [key, val] of this) {
									if(fn(val, key, this)) return true;
								}
								return false;
							}
							every(fn, thisArg) {
								if(thisArg) fn = fn.bind(thisArg);
								for(const [key, val] of this) {
									if(!fn(val, key, this)) return false;
								}
								return true;
							}
							reduce(fn, initialValue) {
								let accumulator;
								if(typeof initialValue !== 'undefined') {
									accumulator = initialValue;
									for(const [key, val] of this) accumulator = fn(accumulator, val, key, this);
								} else {
									let first = true;
									for(const [key, val] of this) {
										if(first) {
											accumulator = val;
											first = false;
											continue;
										}
										accumulator = fn(accumulator, val, key, this);
									}
								}
								return accumulator;
							}
							concat(...collections) {
								const newColl = new this.constructor();
								for(const [key, val] of this) newColl.set(key, val);
								for(const coll of collections) {
									for(const [key, val] of coll) newColl.set(key, val);
								}
								return newColl;
							}
							deleteAll() {
								const returns = [];
								for(const item of this.values()) {
									if(item.delete) returns.push(item.delete());
								}
								return returns;
							}
							equals(collection) {
								if(!collection) return false;
								if(this === collection) return true;
								if(this.size !== collection.size) return false;
								return !this.find((value, key) => {
									const testVal = collection.get(key);
									return testVal !== value || (testVal === undefined && !collection.has(key));
								});
							}
						}
						module.exports = Collection;
					}, {}], 134: [function (require, module, exports) {
							(function (process) {
									exports.Package = require('../../package.json');
									exports.DefaultOptions = {
										apiRequestMethod: 'sequential',
										shardId: 0,
										shardCount: 0,
										messageCacheMaxSize: 200,
										messageCacheLifetime: 0,
										messageSweepInterval: 0,
										fetchAllMembers: false,
										disableEveryone: false,
										sync: false,
										restWsBridgeTimeout: 5000,
										disabledEvents: [],
										restTimeOffset: 500,
										ws: {
											large_threshold: 250,
											compress: typeof window === 'undefined',
											properties: {
												$os: process ? process.platform : 'discord.js',
												$browser: 'discord.js',
												$device: 'discord.js',
												$referrer: '',
												$referring_domain: '',
											},
										},
									};
									exports.Errors = {
										NO_TOKEN: 'Request to use token, but token was unavailable to the client.',
										NO_BOT_ACCOUNT: 'Only bot accounts are able to make use of this feature.',
										NO_USER_ACCOUNT: 'Only user accounts are able to make use of this feature.',
										BAD_WS_MESSAGE: 'A bad message was received from the websocket; either bad compression, or not JSON.',
										TOOK_TOO_LONG: 'Something took too long to do.',
										NOT_A_PERMISSION: 'Invalid permission string or number.',
										INVALID_RATE_LIMIT_METHOD: 'Unknown rate limiting method.',
										BAD_LOGIN: 'Incorrect login details were provided.',
										INVALID_SHARD: 'Invalid shard settings were provided.',
										INVALID_TOKEN: 'An invalid token was provided.',
									};
									const PROTOCOL_VERSION = exports.PROTOCOL_VERSION = 6;
									const HOST = exports.HOST = `https:const API=exports.API=`
									$ {
										HOST
									}
									/api/v$ {
										PROTOCOL_VERSION
									}
									`;const Endpoints=exports.Endpoints={login:`
									$ {
										API
									}
									/auth/login
									`,logout:`
									$ {
										API
									}
									/auth/logout
									`,gateway:`
									$ {
										API
									}
									/gateway`,botGateway:`${API}/gateway / bot `,invite:(id)=>`
									$ {
										API
									}
									/invite/$ {
										id
									}
									`,inviteLink:(id)=>`
									https: assets: (asset) => `${HOST}/assets/${asset}`, CDN: 'https://cdn.discordapp.com', user: (userID) => `${API}/users/${userID}`, userChannels: (userID) => `${Endpoints.user(userID)}/channels`, userProfile: (userID) => `${Endpoints.user(userID)}/profile`, avatar: (userID, avatar) => {
										if(userID === '1') return avatar;
										return `${Endpoints.CDN}/avatars/${userID}/${avatar}.${avatar.startsWith('a_')?'gif':'jpg'}?size=1024`;
									}, me: `${API}/users/@me`, meGuild: (guildID) => `${Endpoints.me}/guilds/${guildID}`, meMentions: (limit, roles, everyone, guildID) => `users/@me/mentions?limit=${limit}&roles=${roles}&everyone=${everyone}${guildID?`&guild_id=${guildID}`:''}`, relationships: (userID) => `${Endpoints.user(userID)}/relationships`, note: (userID) => `${Endpoints.me}/notes/${userID}`, guilds: `${API}/guilds`, guild: (guildID) => `${Endpoints.guilds}/${guildID}`, guildIcon: (guildID, hash) => `${Endpoints.CDN}/icons/${guildID}/${hash}.jpg`, guildSplash: (guildID, hash) => `${Endpoints.CDN}/splashes/${guildID}/${hash}.jpg`, guildPrune: (guildID) => `${Endpoints.guild(guildID)}/prune`, guildEmbed: (guildID) => `${Endpoints.guild(guildID)}/embed`, guildInvites: (guildID) => `${Endpoints.guild(guildID)}/invites`, guildRoles: (guildID) => `${Endpoints.guild(guildID)}/roles`, guildRole: (guildID, roleID) => `${Endpoints.guildRoles(guildID)}/${roleID}`, guildBans: (guildID) => `${Endpoints.guild(guildID)}/bans`, guildIntegrations: (guildID) => `${Endpoints.guild(guildID)}/integrations`, guildMembers: (guildID) => `${Endpoints.guild(guildID)}/members`, guildMember: (guildID, memberID) => `${Endpoints.guildMembers(guildID)}/${memberID}`, guildMemberRole: (guildID, memberID, roleID) => `${Endpoints.guildMember(guildID,memberID)}/roles/${roleID}`, guildMemberNickname: (guildID) => `${Endpoints.guildMember(guildID,'@me')}/nick`, guildChannels: (guildID) => `${Endpoints.guild(guildID)}/channels`, guildEmojis: (guildID) => `${Endpoints.guild(guildID)}/emojis`, channels: `${API}/channels`, channel: (channelID) => `${Endpoints.channels}/${channelID}`, channelMessages: (channelID) => `${Endpoints.channel(channelID)}/messages`, channelInvites: (channelID) => `${Endpoints.channel(channelID)}/invites`, channelTyping: (channelID) => `${Endpoints.channel(channelID)}/typing`, channelPermissions: (channelID) => `${Endpoints.channel(channelID)}/permissions`, channelMessage: (channelID, messageID) => `${Endpoints.channelMessages(channelID)}/${messageID}`, channelWebhooks: (channelID) => `${Endpoints.channel(channelID)}/webhooks`, messageReactions: (channelID, messageID) => `${Endpoints.channelMessage(channelID,messageID)}/reactions`, messageReaction: (channel, msg, emoji, limit) => `${Endpoints.messageReactions(channel,msg)}/${emoji}` + `${limit?`?limit=${limit}`:''}`, selfMessageReaction: (channel, msg, emoji, limit) => `${Endpoints.messageReaction(channel,msg,emoji,limit)}/@me`, userMessageReaction: (channel, msg, emoji, limit, id) => `${Endpoints.messageReaction(channel,msg,emoji,limit)}/${id}`, webhook: (webhookID, token) => `${API}/webhooks/${webhookID}${token?`/${token}`:''}`, myApplication: `${API}/oauth2/applications/@me`, getApp: (id) => `${API}/oauth2/authorize?client_id=${id}`, emoji: (emojiID) => `${Endpoints.CDN}/emojis/${emojiID}.png`,
								}; exports.Status = {
									READY: 0,
									CONNECTING: 1,
									RECONNECTING: 2,
									IDLE: 3,
									NEARLY: 4,
									DISCONNECTED: 5,
								}; exports.ChannelTypes = {
									text: 0,
									DM: 1,
									voice: 2,
									groupDM: 3,
								}; exports.OPCodes = {
									DISPATCH: 0,
									HEARTBEAT: 1,
									IDENTIFY: 2,
									STATUS_UPDATE: 3,
									VOICE_STATE_UPDATE: 4,
									VOICE_GUILD_PING: 5,
									RESUME: 6,
									RECONNECT: 7,
									REQUEST_GUILD_MEMBERS: 8,
									INVALID_SESSION: 9,
									HELLO: 10,
									HEARTBEAT_ACK: 11,
								}; exports.VoiceOPCodes = {
									IDENTIFY: 0,
									SELECT_PROTOCOL: 1,
									READY: 2,
									HEARTBEAT: 3,
									SESSION_DESCRIPTION: 4,
									SPEAKING: 5,
								}; exports.Events = {
									READY: 'ready',
									GUILD_CREATE: 'guildCreate',
									GUILD_DELETE: 'guildDelete',
									GUILD_UPDATE: 'guildUpdate',
									GUILD_UNAVAILABLE: 'guildUnavailable',
									GUILD_AVAILABLE: 'guildAvailable',
									GUILD_MEMBER_ADD: 'guildMemberAdd',
									GUILD_MEMBER_REMOVE: 'guildMemberRemove',
									GUILD_MEMBER_UPDATE: 'guildMemberUpdate',
									GUILD_MEMBER_AVAILABLE: 'guildMemberAvailable',
									GUILD_MEMBER_SPEAKING: 'guildMemberSpeaking',
									GUILD_MEMBERS_CHUNK: 'guildMembersChunk',
									GUILD_ROLE_CREATE: 'roleCreate',
									GUILD_ROLE_DELETE: 'roleDelete',
									GUILD_ROLE_UPDATE: 'roleUpdate',
									GUILD_EMOJI_CREATE: 'emojiCreate',
									GUILD_EMOJI_DELETE: 'emojiDelete',
									GUILD_EMOJI_UPDATE: 'emojiUpdate',
									GUILD_BAN_ADD: 'guildBanAdd',
									GUILD_BAN_REMOVE: 'guildBanRemove',
									CHANNEL_CREATE: 'channelCreate',
									CHANNEL_DELETE: 'channelDelete',
									CHANNEL_UPDATE: 'channelUpdate',
									CHANNEL_PINS_UPDATE: 'channelPinsUpdate',
									MESSAGE_CREATE: 'message',
									MESSAGE_DELETE: 'messageDelete',
									MESSAGE_UPDATE: 'messageUpdate',
									MESSAGE_BULK_DELETE: 'messageDeleteBulk',
									MESSAGE_REACTION_ADD: 'messageReactionAdd',
									MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
									MESSAGE_REACTION_REMOVE_ALL: 'messageReactionRemoveAll',
									USER_UPDATE: 'userUpdate',
									USER_NOTE_UPDATE: 'userNoteUpdate',
									PRESENCE_UPDATE: 'presenceUpdate',
									VOICE_STATE_UPDATE: 'voiceStateUpdate',
									TYPING_START: 'typingStart',
									TYPING_STOP: 'typingStop',
									DISCONNECT: 'disconnect',
									RECONNECTING: 'reconnecting',
									ERROR: 'error',
									WARN: 'warn',
									DEBUG: 'debug',
								}; exports.WSEvents = {
									READY: 'READY',
									GUILD_SYNC: 'GUILD_SYNC',
									GUILD_CREATE: 'GUILD_CREATE',
									GUILD_DELETE: 'GUILD_DELETE',
									GUILD_UPDATE: 'GUILD_UPDATE',
									GUILD_MEMBER_ADD: 'GUILD_MEMBER_ADD',
									GUILD_MEMBER_REMOVE: 'GUILD_MEMBER_REMOVE',
									GUILD_MEMBER_UPDATE: 'GUILD_MEMBER_UPDATE',
									GUILD_MEMBERS_CHUNK: 'GUILD_MEMBERS_CHUNK',
									GUILD_ROLE_CREATE: 'GUILD_ROLE_CREATE',
									GUILD_ROLE_DELETE: 'GUILD_ROLE_DELETE',
									GUILD_ROLE_UPDATE: 'GUILD_ROLE_UPDATE',
									GUILD_BAN_ADD: 'GUILD_BAN_ADD',
									GUILD_BAN_REMOVE: 'GUILD_BAN_REMOVE',
									GUILD_EMOJIS_UPDATE: 'GUILD_EMOJIS_UPDATE',
									CHANNEL_CREATE: 'CHANNEL_CREATE',
									CHANNEL_DELETE: 'CHANNEL_DELETE',
									CHANNEL_UPDATE: 'CHANNEL_UPDATE',
									CHANNEL_PINS_UPDATE: 'CHANNEL_PINS_UPDATE',
									MESSAGE_CREATE: 'MESSAGE_CREATE',
									MESSAGE_DELETE: 'MESSAGE_DELETE',
									MESSAGE_UPDATE: 'MESSAGE_UPDATE',
									MESSAGE_DELETE_BULK: 'MESSAGE_DELETE_BULK',
									MESSAGE_REACTION_ADD: 'MESSAGE_REACTION_ADD',
									MESSAGE_REACTION_REMOVE: 'MESSAGE_REACTION_REMOVE',
									MESSAGE_REACTION_REMOVE_ALL: 'MESSAGE_REACTION_REMOVE_ALL',
									USER_UPDATE: 'USER_UPDATE',
									USER_NOTE_UPDATE: 'USER_NOTE_UPDATE',
									PRESENCE_UPDATE: 'PRESENCE_UPDATE',
									VOICE_STATE_UPDATE: 'VOICE_STATE_UPDATE',
									TYPING_START: 'TYPING_START',
									VOICE_SERVER_UPDATE: 'VOICE_SERVER_UPDATE',
									RELATIONSHIP_ADD: 'RELATIONSHIP_ADD',
									RELATIONSHIP_REMOVE: 'RELATIONSHIP_REMOVE',
								}; exports.MessageTypes = {
									0: 'DEFAULT',
									1: 'RECIPIENT_ADD',
									2: 'RECIPIENT_REMOVE',
									3: 'CALL',
									4: 'CHANNEL_NAME_CHANGE',
									5: 'CHANNEL_ICON_CHANGE',
									6: 'PINS_ADD',
								}; exports.DefaultAvatars = {
									BLURPLE: '6debd47ed13483642cf09e832ed0bc1b',
									GREY: '322c936a8c8be1b803cd94861bdfa868',
									GREEN: 'dd4dbc0016779df1378e7812eabaa04d',
									ORANGE: '0e291f67c9274a1abdddeb3fd919cbaa',
									RED: '1cbd08c76f8af6dddce02c5138971129',
								};
								const PermissionFlags = exports.PermissionFlags = {
									CREATE_INSTANT_INVITE: 1 << 0,
									KICK_MEMBERS: 1 << 1,
									BAN_MEMBERS: 1 << 2,
									ADMINISTRATOR: 1 << 3,
									MANAGE_CHANNELS: 1 << 4,
									MANAGE_GUILD: 1 << 5,
									ADD_REACTIONS: 1 << 6,
									READ_MESSAGES: 1 << 10,
									SEND_MESSAGES: 1 << 11,
									SEND_TTS_MESSAGES: 1 << 12,
									MANAGE_MESSAGES: 1 << 13,
									EMBED_LINKS: 1 << 14,
									ATTACH_FILES: 1 << 15,
									READ_MESSAGE_HISTORY: 1 << 16,
									MENTION_EVERYONE: 1 << 17,
									EXTERNAL_EMOJIS: 1 << 18,
									CONNECT: 1 << 20,
									SPEAK: 1 << 21,
									MUTE_MEMBERS: 1 << 22,
									DEAFEN_MEMBERS: 1 << 23,
									MOVE_MEMBERS: 1 << 24,
									USE_VAD: 1 << 25,
									CHANGE_NICKNAME: 1 << 26,
									MANAGE_NICKNAMES: 1 << 27,
									MANAGE_ROLES_OR_PERMISSIONS: 1 << 28,
									MANAGE_WEBHOOKS: 1 << 29,
									MANAGE_EMOJIS: 1 << 30,
								};
								let _ALL_PERMISSIONS = 0;
								for(const key in PermissionFlags) _ALL_PERMISSIONS |= PermissionFlags[key]; exports.ALL_PERMISSIONS = _ALL_PERMISSIONS; exports.DEFAULT_PERMISSIONS = 104324097;
							}).call(this, require('_process'))
					}, {
						"../../package.json": 2,
						"_process": 193
					}], 135: [function (require, module, exports) {
						(function (Buffer) {
							function arrayBufferToBuffer(ab) {
								const buffer = new Buffer(ab.byteLength);
								const view = new Uint8Array(ab);
								for(var i = 0; i < buffer.length; ++i) buffer[i] = view[i];
								return buffer;
							}

							function str2ab(str) {
								const buffer = new ArrayBuffer(str.length * 2);
								const view = new Uint16Array(buffer);
								for(var i = 0, strLen = str.length; i < strLen; i++) view[i] = str.charCodeAt(i);
								return buffer;
							}
							module.exports = function convertArrayBuffer(x) {
								if(typeof x === 'string') x = str2ab(x);
								return arrayBufferToBuffer(x);
							};
						}).call(this, require("buffer").Buffer)
					}, {
						"buffer": 173
					}], 136: [function (require, module, exports) {
						module.exports = function escapeMarkdown(text, onlyCodeBlock = false, onlyInlineCode = false) {
							if(onlyCodeBlock) return text.replace(/```/g, '`\u200b``');
							if(onlyInlineCode) return text.replace(/\\(`|\\)/g, '$1').replace(/(`|\\)/g, '\\$1');
							return text.replace(/\\(\*|_|`|~|\\)/g, '$1').replace(/(\*|_|`|~|\\)/g, '\\$1');
						};
					}, {}], 137: [function (require, module, exports) {
						const superagent = require('superagent');
						const botGateway = require('./Constants').Endpoints.botGateway;
						module.exports = function fetchRecommendedShards(token) {
							return new Promise((resolve, reject) => {
								if(!token) throw new Error('A token must be provided.');
								superagent.get(botGateway).set('Authorization', `Bot ${token.replace(/^Bot\s*/i,'')}`).end((err, res) => {
									if(err) reject(err);
									resolve(res.body.shards);
								});
							});
						};
					}, {
						"./Constants": 134,
						"superagent": 159
					}], 138: [function (require, module, exports) {
						module.exports = function makeError(obj) {
							const err = new Error(obj.message);
							err.name = obj.name;
							err.stack = obj.stack;
							return err;
						};
					}, {}], 139: [function (require, module, exports) {
						module.exports = function makePlainError(err) {
							const obj = {};
							obj.name = err.name;
							obj.message = err.message;
							obj.stack = err.stack;
							return obj;
						};
					}, {}], 140: [function (require, module, exports) {
						module.exports = function merge(def, given) {
							if(!given) return def;
							for(const key in def) {
								if(!{}.hasOwnProperty.call(given, key)) {
									given[key] = def[key];
								} else if(given[key] === Object(given[key])) {
									given[key] = merge(def[key], given[key]);
								}
							}
							return given;
						};
					}, {}], 141: [function (require, module, exports) {
						module.exports = function parseEmoji(text) {
							if(text.includes('%')) {
								text = decodeURIComponent(text);
							}
							if(text.includes(':')) {
								const [name, id] = text.split(':');
								return {
									name,
									id
								};
							} else {
								return {
									name: text,
									id: null,
								};
							}
						};
					}, {}], 142: [function (require, module, exports) {
						module.exports = function splitMessage(text, {
							maxLength = 1950,
							char = '\n',
							prepend = '',
							append = ''
						} = {}) {
							if(text.length <= maxLength) return text;
							const splitText = text.split(char);
							if(splitText.length === 1) throw new Error('Message exceeds the max length and contains no split characters.');
							const messages = [''];
							let msg = 0;
							for(let i = 0; i < splitText.length; i++) {
								if(messages[msg].length + splitText[i].length + 1 > maxLength) {
									messages[msg] += append;
									messages.push(prepend);
									msg++;
								}
								messages[msg] += (messages[msg].length > 0 && messages[msg] !== prepend ? char : '') + splitText[i];
							}
							return messages;
						};
					}, {}], 143: [function (require, module, exports) {
						'use strict';
						var assign = require('./lib/utils/common').assign;
						var deflate = require('./lib/deflate');
						var inflate = require('./lib/inflate');
						var constants = require('./lib/zlib/constants');
						var pako = {};
						assign(pako, deflate, inflate, constants);
						module.exports = pako;
					}, {
						"./lib/deflate": 144,
						"./lib/inflate": 145,
						"./lib/utils/common": 146,
						"./lib/zlib/constants": 149
					}], 144: [function (require, module, exports) {
						'use strict';
						var zlib_deflate = require('./zlib/deflate');
						var utils = require('./utils/common');
						var strings = require('./utils/strings');
						var msg = require('./zlib/messages');
						var ZStream = require('./zlib/zstream');
						var toString = Object.prototype.toString;
						var Z_NO_FLUSH = 0;
						var Z_FINISH = 4;
						var Z_OK = 0;
						var Z_STREAM_END = 1;
						var Z_SYNC_FLUSH = 2;
						var Z_DEFAULT_COMPRESSION = -1;
						var Z_DEFAULT_STRATEGY = 0;
						var Z_DEFLATED = 8;

						function Deflate(options) {
							if(!(this instanceof Deflate)) return new Deflate(options);
							this.options = utils.assign({
								level: Z_DEFAULT_COMPRESSION,
								method: Z_DEFLATED,
								chunkSize: 16384,
								windowBits: 15,
								memLevel: 8,
								strategy: Z_DEFAULT_STRATEGY,
								to: ''
							}, options || {});
							var opt = this.options;
							if(opt.raw && (opt.windowBits > 0)) {
								opt.windowBits = -opt.windowBits;
							} else if(opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
								opt.windowBits += 16;
							}
							this.err = 0;
							this.msg = '';
							this.ended = false;
							this.chunks = [];
							this.strm = new ZStream();
							this.strm.avail_out = 0;
							var status = zlib_deflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
							if(status !== Z_OK) {
								throw new Error(msg[status]);
							}
							if(opt.header) {
								zlib_deflate.deflateSetHeader(this.strm, opt.header);
							}
							if(opt.dictionary) {
								var dict;
								if(typeof opt.dictionary === 'string') {
									dict = strings.string2buf(opt.dictionary);
								} else if(toString.call(opt.dictionary) === '[object ArrayBuffer]') {
									dict = new Uint8Array(opt.dictionary);
								} else {
									dict = opt.dictionary;
								}
								status = zlib_deflate.deflateSetDictionary(this.strm, dict);
								if(status !== Z_OK) {
									throw new Error(msg[status]);
								}
								this._dict_set = true;
							}
						}
						Deflate.prototype.push = function (data, mode) {
							var strm = this.strm;
							var chunkSize = this.options.chunkSize;
							var status, _mode;
							if(this.ended) {
								return false;
							}
							_mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);
							if(typeof data === 'string') {
								strm.input = strings.string2buf(data);
							} else if(toString.call(data) === '[object ArrayBuffer]') {
								strm.input = new Uint8Array(data);
							} else {
								strm.input = data;
							}
							strm.next_in = 0;
							strm.avail_in = strm.input.length;
							do {
								if(strm.avail_out === 0) {
									strm.output = new utils.Buf8(chunkSize);
									strm.next_out = 0;
									strm.avail_out = chunkSize;
								}
								status = zlib_deflate.deflate(strm, _mode);
								if(status !== Z_STREAM_END && status !== Z_OK) {
									this.onEnd(status);
									this.ended = true;
									return false;
								}
								if(strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
									if(this.options.to === 'string') {
										this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
									} else {
										this.onData(utils.shrinkBuf(strm.output, strm.next_out));
									}
								}
							} while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
							if(_mode === Z_FINISH) {
								status = zlib_deflate.deflateEnd(this.strm);
								this.onEnd(status);
								this.ended = true;
								return status === Z_OK;
							}
							if(_mode === Z_SYNC_FLUSH) {
								this.onEnd(Z_OK);
								strm.avail_out = 0;
								return true;
							}
							return true;
						};
						Deflate.prototype.onData = function (chunk) {
							this.chunks.push(chunk);
						};
						Deflate.prototype.onEnd = function (status) {
							if(status === Z_OK) {
								if(this.options.to === 'string') {
									this.result = this.chunks.join('');
								} else {
									this.result = utils.flattenChunks(this.chunks);
								}
							}
							this.chunks = [];
							this.err = status;
							this.msg = this.strm.msg;
						};

						function deflate(input, options) {
							var deflator = new Deflate(options);
							deflator.push(input, true);
							if(deflator.err) {
								throw deflator.msg || msg[deflator.err];
							}
							return deflator.result;
						}

						function deflateRaw(input, options) {
							options = options || {};
							options.raw = true;
							return deflate(input, options);
						}

						function gzip(input, options) {
							options = options || {};
							options.gzip = true;
							return deflate(input, options);
						}
						exports.Deflate = Deflate;
						exports.deflate = deflate;
						exports.deflateRaw = deflateRaw;
						exports.gzip = gzip;
					}, {
						"./utils/common": 146,
						"./utils/strings": 147,
						"./zlib/deflate": 151,
						"./zlib/messages": 156,
						"./zlib/zstream": 158
					}], 145: [function (require, module, exports) {
						'use strict';
						var zlib_inflate = require('./zlib/inflate');
						var utils = require('./utils/common');
						var strings = require('./utils/strings');
						var c = require('./zlib/constants');
						var msg = require('./zlib/messages');
						var ZStream = require('./zlib/zstream');
						var GZheader = require('./zlib/gzheader');
						var toString = Object.prototype.toString;

						function Inflate(options) {
							if(!(this instanceof Inflate)) return new Inflate(options);
							this.options = utils.assign({
								chunkSize: 16384,
								windowBits: 0,
								to: ''
							}, options || {});
							var opt = this.options;
							if(opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
								opt.windowBits = -opt.windowBits;
								if(opt.windowBits === 0) {
									opt.windowBits = -15;
								}
							}
							if((opt.windowBits >= 0) && (opt.windowBits < 16) && !(options && options.windowBits)) {
								opt.windowBits += 32;
							}
							if((opt.windowBits > 15) && (opt.windowBits < 48)) {
								if((opt.windowBits & 15) === 0) {
									opt.windowBits |= 15;
								}
							}
							this.err = 0;
							this.msg = '';
							this.ended = false;
							this.chunks = [];
							this.strm = new ZStream();
							this.strm.avail_out = 0;
							var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
							if(status !== c.Z_OK) {
								throw new Error(msg[status]);
							}
							this.header = new GZheader();
							zlib_inflate.inflateGetHeader(this.strm, this.header);
						}
						Inflate.prototype.push = function (data, mode) {
							var strm = this.strm;
							var chunkSize = this.options.chunkSize;
							var dictionary = this.options.dictionary;
							var status, _mode;
							var next_out_utf8, tail, utf8str;
							var dict;
							var allowBufError = false;
							if(this.ended) {
								return false;
							}
							_mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);
							if(typeof data === 'string') {
								strm.input = strings.binstring2buf(data);
							} else if(toString.call(data) === '[object ArrayBuffer]') {
								strm.input = new Uint8Array(data);
							} else {
								strm.input = data;
							}
							strm.next_in = 0;
							strm.avail_in = strm.input.length;
							do {
								if(strm.avail_out === 0) {
									strm.output = new utils.Buf8(chunkSize);
									strm.next_out = 0;
									strm.avail_out = chunkSize;
								}
								status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
								if(status === c.Z_NEED_DICT && dictionary) {
									if(typeof dictionary === 'string') {
										dict = strings.string2buf(dictionary);
									} else if(toString.call(dictionary) === '[object ArrayBuffer]') {
										dict = new Uint8Array(dictionary);
									} else {
										dict = dictionary;
									}
									status = zlib_inflate.inflateSetDictionary(this.strm, dict);
								}
								if(status === c.Z_BUF_ERROR && allowBufError === true) {
									status = c.Z_OK;
									allowBufError = false;
								}
								if(status !== c.Z_STREAM_END && status !== c.Z_OK) {
									this.onEnd(status);
									this.ended = true;
									return false;
								}
								if(strm.next_out) {
									if(strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {
										if(this.options.to === 'string') {
											next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
											tail = strm.next_out - next_out_utf8;
											utf8str = strings.buf2string(strm.output, next_out_utf8);
											strm.next_out = tail;
											strm.avail_out = chunkSize - tail;
											if(tail) {
												utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
											}
											this.onData(utf8str);
										} else {
											this.onData(utils.shrinkBuf(strm.output, strm.next_out));
										}
									}
								}
								if(strm.avail_in === 0 && strm.avail_out === 0) {
									allowBufError = true;
								}
							} while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
							if(status === c.Z_STREAM_END) {
								_mode = c.Z_FINISH;
							}
							if(_mode === c.Z_FINISH) {
								status = zlib_inflate.inflateEnd(this.strm);
								this.onEnd(status);
								this.ended = true;
								return status === c.Z_OK;
							}
							if(_mode === c.Z_SYNC_FLUSH) {
								this.onEnd(c.Z_OK);
								strm.avail_out = 0;
								return true;
							}
							return true;
						};
						Inflate.prototype.onData = function (chunk) {
							this.chunks.push(chunk);
						};
						Inflate.prototype.onEnd = function (status) {
							if(status === c.Z_OK) {
								if(this.options.to === 'string') {
									this.result = this.chunks.join('');
								} else {
									this.result = utils.flattenChunks(this.chunks);
								}
							}
							this.chunks = [];
							this.err = status;
							this.msg = this.strm.msg;
						};

						function inflate(input, options) {
							var inflator = new Inflate(options);
							inflator.push(input, true);
							if(inflator.err) {
								throw inflator.msg || msg[inflator.err];
							}
							return inflator.result;
						}

						function inflateRaw(input, options) {
							options = options || {};
							options.raw = true;
							return inflate(input, options);
						}
						exports.Inflate = Inflate;
						exports.inflate = inflate;
						exports.inflateRaw = inflateRaw;
						exports.ungzip = inflate;
					}, {
						"./utils/common": 146,
						"./utils/strings": 147,
						"./zlib/constants": 149,
						"./zlib/gzheader": 152,
						"./zlib/inflate": 154,
						"./zlib/messages": 156,
						"./zlib/zstream": 158
					}], 146: [function (require, module, exports) {
						'use strict';
						var TYPED_OK = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Int32Array !== 'undefined');
						exports.assign = function (obj) {
							var sources = Array.prototype.slice.call(arguments, 1);
							while(sources.length) {
								var source = sources.shift();
								if(!source) {
									continue;
								}
								if(typeof source !== 'object') {
									throw new TypeError(source + 'must be non-object');
								}
								for(var p in source) {
									if(source.hasOwnProperty(p)) {
										obj[p] = source[p];
									}
								}
							}
							return obj;
						};
						exports.shrinkBuf = function (buf, size) {
							if(buf.length === size) {
								return buf;
							}
							if(buf.subarray) {
								return buf.subarray(0, size);
							}
							buf.length = size;
							return buf;
						};
						var fnTyped = {
							arraySet: function (dest, src, src_offs, len, dest_offs) {
								if(src.subarray && dest.subarray) {
									dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
									return;
								}
								for(var i = 0; i < len; i++) {
									dest[dest_offs + i] = src[src_offs + i];
								}
							},
							flattenChunks: function (chunks) {
								var i, l, len, pos, chunk, result;
								len = 0;
								for(i = 0, l = chunks.length; i < l; i++) {
									len += chunks[i].length;
								}
								result = new Uint8Array(len);
								pos = 0;
								for(i = 0, l = chunks.length; i < l; i++) {
									chunk = chunks[i];
									result.set(chunk, pos);
									pos += chunk.length;
								}
								return result;
							}
						};
						var fnUntyped = {
							arraySet: function (dest, src, src_offs, len, dest_offs) {
								for(var i = 0; i < len; i++) {
									dest[dest_offs + i] = src[src_offs + i];
								}
							},
							flattenChunks: function (chunks) {
								return [].concat.apply([], chunks);
							}
						};
						exports.setTyped = function (on) {
							if(on) {
								exports.Buf8 = Uint8Array;
								exports.Buf16 = Uint16Array;
								exports.Buf32 = Int32Array;
								exports.assign(exports, fnTyped);
							} else {
								exports.Buf8 = Array;
								exports.Buf16 = Array;
								exports.Buf32 = Array;
								exports.assign(exports, fnUntyped);
							}
						};
						exports.setTyped(TYPED_OK);
					}, {}], 147: [function (require, module, exports) {
						'use strict';
						var utils = require('./common');
						var STR_APPLY_OK = true;
						var STR_APPLY_UIA_OK = true;
						try {
							String.fromCharCode.apply(null, [0]);
						} catch(__) {
							STR_APPLY_OK = false;
						}
						try {
							String.fromCharCode.apply(null, new Uint8Array(1));
						} catch(__) {
							STR_APPLY_UIA_OK = false;
						}
						var _utf8len = new utils.Buf8(256);
						for(var q = 0; q < 256; q++) {
							_utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
						}
						_utf8len[254] = _utf8len[254] = 1;
						exports.string2buf = function (str) {
							var buf, c, c2, m_pos, i, str_len = str.length,
								buf_len = 0;
							for(m_pos = 0; m_pos < str_len; m_pos++) {
								c = str.charCodeAt(m_pos);
								if((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
									c2 = str.charCodeAt(m_pos + 1);
									if((c2 & 0xfc00) === 0xdc00) {
										c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
										m_pos++;
									}
								}
								buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
							}
							buf = new utils.Buf8(buf_len);
							for(i = 0, m_pos = 0; i < buf_len; m_pos++) {
								c = str.charCodeAt(m_pos);
								if((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
									c2 = str.charCodeAt(m_pos + 1);
									if((c2 & 0xfc00) === 0xdc00) {
										c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
										m_pos++;
									}
								}
								if(c < 0x80) {
									buf[i++] = c;
								} else if(c < 0x800) {
									buf[i++] = 0xC0 | (c >>> 6);
									buf[i++] = 0x80 | (c & 0x3f);
								} else if(c < 0x10000) {
									buf[i++] = 0xE0 | (c >>> 12);
									buf[i++] = 0x80 | (c >>> 6 & 0x3f);
									buf[i++] = 0x80 | (c & 0x3f);
								} else {
									buf[i++] = 0xf0 | (c >>> 18);
									buf[i++] = 0x80 | (c >>> 12 & 0x3f);
									buf[i++] = 0x80 | (c >>> 6 & 0x3f);
									buf[i++] = 0x80 | (c & 0x3f);
								}
							}
							return buf;
						};

						function buf2binstring(buf, len) {
							if(len < 65537) {
								if((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
									return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
								}
							}
							var result = '';
							for(var i = 0; i < len; i++) {
								result += String.fromCharCode(buf[i]);
							}
							return result;
						}
						exports.buf2binstring = function (buf) {
							return buf2binstring(buf, buf.length);
						};
						exports.binstring2buf = function (str) {
							var buf = new utils.Buf8(str.length);
							for(var i = 0, len = buf.length; i < len; i++) {
								buf[i] = str.charCodeAt(i);
							}
							return buf;
						};
						exports.buf2string = function (buf, max) {
							var i, out, c, c_len;
							var len = max || buf.length;
							var utf16buf = new Array(len * 2);
							for(out = 0, i = 0; i < len;) {
								c = buf[i++];
								if(c < 0x80) {
									utf16buf[out++] = c;
									continue;
								}
								c_len = _utf8len[c];
								if(c_len > 4) {
									utf16buf[out++] = 0xfffd;
									i += c_len - 1;
									continue;
								}
								c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
								while(c_len > 1 && i < len) {
									c = (c << 6) | (buf[i++] & 0x3f);
									c_len--;
								}
								if(c_len > 1) {
									utf16buf[out++] = 0xfffd;
									continue;
								}
								if(c < 0x10000) {
									utf16buf[out++] = c;
								} else {
									c -= 0x10000;
									utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
									utf16buf[out++] = 0xdc00 | (c & 0x3ff);
								}
							}
							return buf2binstring(utf16buf, out);
						};
						exports.utf8border = function (buf, max) {
							var pos;
							max = max || buf.length;
							if(max > buf.length) {
								max = buf.length;
							}
							pos = max - 1;
							while(pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
								pos--;
							}
							if(pos < 0) {
								return max;
							}
							if(pos === 0) {
								return max;
							}
							return(pos + _utf8len[buf[pos]] > max) ? pos : max;
						};
					}, {
						"./common": 146
					}], 148: [function (require, module, exports) {
						'use strict';

						function adler32(adler, buf, len, pos) {
							var s1 = (adler & 0xffff) | 0,
								s2 = ((adler >>> 16) & 0xffff) | 0,
								n = 0;
							while(len !== 0) {
								n = len > 2000 ? 2000 : len;
								len -= n;
								do {
									s1 = (s1 + buf[pos++]) | 0;
									s2 = (s2 + s1) | 0;
								} while (--n);
								s1 %= 65521;
								s2 %= 65521;
							}
							return(s1 | (s2 << 16)) | 0;
						}
						module.exports = adler32;
					}, {}], 149: [function (require, module, exports) {
						'use strict';
						module.exports = {
							Z_NO_FLUSH: 0,
							Z_PARTIAL_FLUSH: 1,
							Z_SYNC_FLUSH: 2,
							Z_FULL_FLUSH: 3,
							Z_FINISH: 4,
							Z_BLOCK: 5,
							Z_TREES: 6,
							Z_OK: 0,
							Z_STREAM_END: 1,
							Z_NEED_DICT: 2,
							Z_ERRNO: -1,
							Z_STREAM_ERROR: -2,
							Z_DATA_ERROR: -3,
							Z_BUF_ERROR: -5,
							Z_NO_COMPRESSION: 0,
							Z_BEST_SPEED: 1,
							Z_BEST_COMPRESSION: 9,
							Z_DEFAULT_COMPRESSION: -1,
							Z_FILTERED: 1,
							Z_HUFFMAN_ONLY: 2,
							Z_RLE: 3,
							Z_FIXED: 4,
							Z_DEFAULT_STRATEGY: 0,
							Z_BINARY: 0,
							Z_TEXT: 1,
							Z_UNKNOWN: 2,
							Z_DEFLATED: 8
						};
					}, {}], 150: [function (require, module, exports) {
						'use strict';

						function makeTable() {
							var c, table = [];
							for(var n = 0; n < 256; n++) {
								c = n;
								for(var k = 0; k < 8; k++) {
									c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
								}
								table[n] = c;
							}
							return table;
						}
						var crcTable = makeTable();

						function crc32(crc, buf, len, pos) {
							var t = crcTable,
								end = pos + len;
							crc ^= -1;
							for(var i = pos; i < end; i++) {
								crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
							}
							return(crc ^ (-1));
						}
						module.exports = crc32;
					}, {}], 151: [function (require, module, exports) {
						'use strict';
						var utils = require('../utils/common');
						var trees = require('./trees');
						var adler32 = require('./adler32');
						var crc32 = require('./crc32');
						var msg = require('./messages');
						var Z_NO_FLUSH = 0;
						var Z_PARTIAL_FLUSH = 1;
						var Z_FULL_FLUSH = 3;
						var Z_FINISH = 4;
						var Z_BLOCK = 5;
						var Z_OK = 0;
						var Z_STREAM_END = 1;
						var Z_STREAM_ERROR = -2;
						var Z_DATA_ERROR = -3;
						var Z_BUF_ERROR = -5;
						var Z_DEFAULT_COMPRESSION = -1;
						var Z_FILTERED = 1;
						var Z_HUFFMAN_ONLY = 2;
						var Z_RLE = 3;
						var Z_FIXED = 4;
						var Z_DEFAULT_STRATEGY = 0;
						var Z_UNKNOWN = 2;
						var Z_DEFLATED = 8;
						var MAX_MEM_LEVEL = 9;
						var MAX_WBITS = 15;
						var DEF_MEM_LEVEL = 8;
						var LENGTH_CODES = 29;
						var LITERALS = 256;
						var L_CODES = LITERALS + 1 + LENGTH_CODES;
						var D_CODES = 30;
						var BL_CODES = 19;
						var HEAP_SIZE = 2 * L_CODES + 1;
						var MAX_BITS = 15;
						var MIN_MATCH = 3;
						var MAX_MATCH = 258;
						var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);
						var PRESET_DICT = 0x20;
						var INIT_STATE = 42;
						var EXTRA_STATE = 69;
						var NAME_STATE = 73;
						var COMMENT_STATE = 91;
						var HCRC_STATE = 103;
						var BUSY_STATE = 113;
						var FINISH_STATE = 666;
						var BS_NEED_MORE = 1;
						var BS_BLOCK_DONE = 2;
						var BS_FINISH_STARTED = 3;
						var BS_FINISH_DONE = 4;
						var OS_CODE = 0x03;

						function err(strm, errorCode) {
							strm.msg = msg[errorCode];
							return errorCode;
						}

						function rank(f) {
							return((f) << 1) - ((f) > 4 ? 9 : 0);
						}

						function zero(buf) {
							var len = buf.length;
							while(--len >= 0) {
								buf[len] = 0;
							}
						}

						function flush_pending(strm) {
							var s = strm.state;
							var len = s.pending;
							if(len > strm.avail_out) {
								len = strm.avail_out;
							}
							if(len === 0) {
								return;
							}
							utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
							strm.next_out += len;
							s.pending_out += len;
							strm.total_out += len;
							strm.avail_out -= len;
							s.pending -= len;
							if(s.pending === 0) {
								s.pending_out = 0;
							}
						}

						function flush_block_only(s, last) {
							trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
							s.block_start = s.strstart;
							flush_pending(s.strm);
						}

						function put_byte(s, b) {
							s.pending_buf[s.pending++] = b;
						}

						function putShortMSB(s, b) {
							s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
							s.pending_buf[s.pending++] = b & 0xff;
						}

						function read_buf(strm, buf, start, size) {
							var len = strm.avail_in;
							if(len > size) {
								len = size;
							}
							if(len === 0) {
								return 0;
							}
							strm.avail_in -= len;
							utils.arraySet(buf, strm.input, strm.next_in, len, start);
							if(strm.state.wrap === 1) {
								strm.adler = adler32(strm.adler, buf, len, start);
							} else if(strm.state.wrap === 2) {
								strm.adler = crc32(strm.adler, buf, len, start);
							}
							strm.next_in += len;
							strm.total_in += len;
							return len;
						}

						function longest_match(s, cur_match) {
							var chain_length = s.max_chain_length;
							var scan = s.strstart;
							var match;
							var len;
							var best_len = s.prev_length;
							var nice_match = s.nice_match;
							var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
							var _win = s.window;
							var wmask = s.w_mask;
							var prev = s.prev;
							var strend = s.strstart + MAX_MATCH;
							var scan_end1 = _win[scan + best_len - 1];
							var scan_end = _win[scan + best_len];
							if(s.prev_length >= s.good_match) {
								chain_length >>= 2;
							}
							if(nice_match > s.lookahead) {
								nice_match = s.lookahead;
							}
							do {
								match = cur_match;
								if(_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
									continue;
								}
								scan += 2;
								match++;
								do {} while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
								len = MAX_MATCH - (strend - scan);
								scan = strend - MAX_MATCH;
								if(len > best_len) {
									s.match_start = cur_match;
									best_len = len;
									if(len >= nice_match) {
										break;
									}
									scan_end1 = _win[scan + best_len - 1];
									scan_end = _win[scan + best_len];
								}
							} while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
							if(best_len <= s.lookahead) {
								return best_len;
							}
							return s.lookahead;
						}

						function fill_window(s) {
							var _w_size = s.w_size;
							var p, n, m, more, str;
							do {
								more = s.window_size - s.lookahead - s.strstart;
								if(s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
									utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
									s.match_start -= _w_size;
									s.strstart -= _w_size;
									s.block_start -= _w_size;
									n = s.hash_size;
									p = n;
									do {
										m = s.head[--p];
										s.head[p] = (m >= _w_size ? m - _w_size : 0);
									} while (--n);
									n = _w_size;
									p = n;
									do {
										m = s.prev[--p];
										s.prev[p] = (m >= _w_size ? m - _w_size : 0);
									} while (--n);
									more += _w_size;
								}
								if(s.strm.avail_in === 0) {
									break;
								}
								n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
								s.lookahead += n;
								if(s.lookahead + s.insert >= MIN_MATCH) {
									str = s.strstart - s.insert;
									s.ins_h = s.window[str];
									s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
									while(s.insert) {
										s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
										s.prev[str & s.w_mask] = s.head[s.ins_h];
										s.head[s.ins_h] = str;
										str++;
										s.insert--;
										if(s.lookahead + s.insert < MIN_MATCH) {
											break;
										}
									}
								}
							} while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
						}

						function deflate_stored(s, flush) {
							var max_block_size = 0xffff;
							if(max_block_size > s.pending_buf_size - 5) {
								max_block_size = s.pending_buf_size - 5;
							}
							for(;;) {
								if(s.lookahead <= 1) {
									fill_window(s);
									if(s.lookahead === 0 && flush === Z_NO_FLUSH) {
										return BS_NEED_MORE;
									}
									if(s.lookahead === 0) {
										break;
									}
								}
								s.strstart += s.lookahead;
								s.lookahead = 0;
								var max_start = s.block_start + max_block_size;
								if(s.strstart === 0 || s.strstart >= max_start) {
									s.lookahead = s.strstart - max_start;
									s.strstart = max_start;
									flush_block_only(s, false);
									if(s.strm.avail_out === 0) {
										return BS_NEED_MORE;
									}
								}
								if(s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
									flush_block_only(s, false);
									if(s.strm.avail_out === 0) {
										return BS_NEED_MORE;
									}
								}
							}
							s.insert = 0;
							if(flush === Z_FINISH) {
								flush_block_only(s, true);
								if(s.strm.avail_out === 0) {
									return BS_FINISH_STARTED;
								}
								return BS_FINISH_DONE;
							}
							if(s.strstart > s.block_start) {
								flush_block_only(s, false);
								if(s.strm.avail_out === 0) {
									return BS_NEED_MORE;
								}
							}
							return BS_NEED_MORE;
						}

						function deflate_fast(s, flush) {
							var hash_head;
							var bflush;
							for(;;) {
								if(s.lookahead < MIN_LOOKAHEAD) {
									fill_window(s);
									if(s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
										return BS_NEED_MORE;
									}
									if(s.lookahead === 0) {
										break;
									}
								}
								hash_head = 0;
								if(s.lookahead >= MIN_MATCH) {
									s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
									hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
									s.head[s.ins_h] = s.strstart;
								}
								if(hash_head !== 0 && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
									s.match_length = longest_match(s, hash_head);
								}
								if(s.match_length >= MIN_MATCH) {
									bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
									s.lookahead -= s.match_length;
									if(s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
										s.match_length--;
										do {
											s.strstart++;
											s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
											hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
											s.head[s.ins_h] = s.strstart;
										} while (--s.match_length !== 0);
										s.strstart++;
									} else {
										s.strstart += s.match_length;
										s.match_length = 0;
										s.ins_h = s.window[s.strstart];
										s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;
									}
								} else {
									bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
									s.lookahead--;
									s.strstart++;
								}
								if(bflush) {
									flush_block_only(s, false);
									if(s.strm.avail_out === 0) {
										return BS_NEED_MORE;
									}
								}
							}
							s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
							if(flush === Z_FINISH) {
								flush_block_only(s, true);
								if(s.strm.avail_out === 0) {
									return BS_FINISH_STARTED;
								}
								return BS_FINISH_DONE;
							}
							if(s.last_lit) {
								flush_block_only(s, false);
								if(s.strm.avail_out === 0) {
									return BS_NEED_MORE;
								}
							}
							return BS_BLOCK_DONE;
						}

						function deflate_slow(s, flush) {
							var hash_head;
							var bflush;
							var max_insert;
							for(;;) {
								if(s.lookahead < MIN_LOOKAHEAD) {
									fill_window(s);
									if(s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
										return BS_NEED_MORE;
									}
									if(s.lookahead === 0) {
										break;
									}
								}
								hash_head = 0;
								if(s.lookahead >= MIN_MATCH) {
									s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
									hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
									s.head[s.ins_h] = s.strstart;
								}
								s.prev_length = s.match_length;
								s.prev_match = s.match_start;
								s.match_length = MIN_MATCH - 1;
								if(hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)) {
									s.match_length = longest_match(s, hash_head);
									if(s.match_length <= 5 && (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096))) {
										s.match_length = MIN_MATCH - 1;
									}
								}
								if(s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
									max_insert = s.strstart + s.lookahead - MIN_MATCH;
									bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
									s.lookahead -= s.prev_length - 1;
									s.prev_length -= 2;
									do {
										if(++s.strstart <= max_insert) {
											s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
											hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
											s.head[s.ins_h] = s.strstart;
										}
									} while (--s.prev_length !== 0);
									s.match_available = 0;
									s.match_length = MIN_MATCH - 1;
									s.strstart++;
									if(bflush) {
										flush_block_only(s, false);
										if(s.strm.avail_out === 0) {
											return BS_NEED_MORE;
										}
									}
								} else if(s.match_available) {
									bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
									if(bflush) {
										flush_block_only(s, false);
									}
									s.strstart++;
									s.lookahead--;
									if(s.strm.avail_out === 0) {
										return BS_NEED_MORE;
									}
								} else {
									s.match_available = 1;
									s.strstart++;
									s.lookahead--;
								}
							}
							if(s.match_available) {
								bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
								s.match_available = 0;
							}
							s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
							if(flush === Z_FINISH) {
								flush_block_only(s, true);
								if(s.strm.avail_out === 0) {
									return BS_FINISH_STARTED;
								}
								return BS_FINISH_DONE;
							}
							if(s.last_lit) {
								flush_block_only(s, false);
								if(s.strm.avail_out === 0) {
									return BS_NEED_MORE;
								}
							}
							return BS_BLOCK_DONE;
						}

						function deflate_rle(s, flush) {
							var bflush;
							var prev;
							var scan, strend;
							var _win = s.window;
							for(;;) {
								if(s.lookahead <= MAX_MATCH) {
									fill_window(s);
									if(s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
										return BS_NEED_MORE;
									}
									if(s.lookahead === 0) {
										break;
									}
								}
								s.match_length = 0;
								if(s.lookahead >= MIN_MATCH && s.strstart > 0) {
									scan = s.strstart - 1;
									prev = _win[scan];
									if(prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
										strend = s.strstart + MAX_MATCH;
										do {} while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
										s.match_length = MAX_MATCH - (strend - scan);
										if(s.match_length > s.lookahead) {
											s.match_length = s.lookahead;
										}
									}
								}
								if(s.match_length >= MIN_MATCH) {
									bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
									s.lookahead -= s.match_length;
									s.strstart += s.match_length;
									s.match_length = 0;
								} else {
									bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
									s.lookahead--;
									s.strstart++;
								}
								if(bflush) {
									flush_block_only(s, false);
									if(s.strm.avail_out === 0) {
										return BS_NEED_MORE;
									}
								}
							}
							s.insert = 0;
							if(flush === Z_FINISH) {
								flush_block_only(s, true);
								if(s.strm.avail_out === 0) {
									return BS_FINISH_STARTED;
								}
								return BS_FINISH_DONE;
							}
							if(s.last_lit) {
								flush_block_only(s, false);
								if(s.strm.avail_out === 0) {
									return BS_NEED_MORE;
								}
							}
							return BS_BLOCK_DONE;
						}

						function deflate_huff(s, flush) {
							var bflush;
							for(;;) {
								if(s.lookahead === 0) {
									fill_window(s);
									if(s.lookahead === 0) {
										if(flush === Z_NO_FLUSH) {
											return BS_NEED_MORE;
										}
										break;
									}
								}
								s.match_length = 0;
								bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
								s.lookahead--;
								s.strstart++;
								if(bflush) {
									flush_block_only(s, false);
									if(s.strm.avail_out === 0) {
										return BS_NEED_MORE;
									}
								}
							}
							s.insert = 0;
							if(flush === Z_FINISH) {
								flush_block_only(s, true);
								if(s.strm.avail_out === 0) {
									return BS_FINISH_STARTED;
								}
								return BS_FINISH_DONE;
							}
							if(s.last_lit) {
								flush_block_only(s, false);
								if(s.strm.avail_out === 0) {
									return BS_NEED_MORE;
								}
							}
							return BS_BLOCK_DONE;
						}

						function Config(good_length, max_lazy, nice_length, max_chain, func) {
							this.good_length = good_length;
							this.max_lazy = max_lazy;
							this.nice_length = nice_length;
							this.max_chain = max_chain;
							this.func = func;
						}
						var configuration_table;
						configuration_table = [new Config(0, 0, 0, 0, deflate_stored), new Config(4, 4, 8, 4, deflate_fast), new Config(4, 5, 16, 8, deflate_fast), new Config(4, 6, 32, 32, deflate_fast), new Config(4, 4, 16, 16, deflate_slow), new Config(8, 16, 32, 32, deflate_slow), new Config(8, 16, 128, 128, deflate_slow), new Config(8, 32, 128, 256, deflate_slow), new Config(32, 128, 258, 1024, deflate_slow), new Config(32, 258, 258, 4096, deflate_slow)];

						function lm_init(s) {
							s.window_size = 2 * s.w_size;
							zero(s.head);
							s.max_lazy_match = configuration_table[s.level].max_lazy;
							s.good_match = configuration_table[s.level].good_length;
							s.nice_match = configuration_table[s.level].nice_length;
							s.max_chain_length = configuration_table[s.level].max_chain;
							s.strstart = 0;
							s.block_start = 0;
							s.lookahead = 0;
							s.insert = 0;
							s.match_length = s.prev_length = MIN_MATCH - 1;
							s.match_available = 0;
							s.ins_h = 0;
						}

						function DeflateState() {
							this.strm = null;
							this.status = 0;
							this.pending_buf = null;
							this.pending_buf_size = 0;
							this.pending_out = 0;
							this.pending = 0;
							this.wrap = 0;
							this.gzhead = null;
							this.gzindex = 0;
							this.method = Z_DEFLATED;
							this.last_flush = -1;
							this.w_size = 0;
							this.w_bits = 0;
							this.w_mask = 0;
							this.window = null;
							this.window_size = 0;
							this.prev = null;
							this.head = null;
							this.ins_h = 0;
							this.hash_size = 0;
							this.hash_bits = 0;
							this.hash_mask = 0;
							this.hash_shift = 0;
							this.block_start = 0;
							this.match_length = 0;
							this.prev_match = 0;
							this.match_available = 0;
							this.strstart = 0;
							this.match_start = 0;
							this.lookahead = 0;
							this.prev_length = 0;
							this.max_chain_length = 0;
							this.max_lazy_match = 0;
							this.level = 0;
							this.strategy = 0;
							this.good_match = 0;
							this.nice_match = 0;
							this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
							this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
							this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
							zero(this.dyn_ltree);
							zero(this.dyn_dtree);
							zero(this.bl_tree);
							this.l_desc = null;
							this.d_desc = null;
							this.bl_desc = null;
							this.bl_count = new utils.Buf16(MAX_BITS + 1);
							this.heap = new utils.Buf16(2 * L_CODES + 1);
							zero(this.heap);
							this.heap_len = 0;
							this.heap_max = 0;
							this.depth = new utils.Buf16(2 * L_CODES + 1);
							zero(this.depth);
							this.l_buf = 0;
							this.lit_bufsize = 0;
							this.last_lit = 0;
							this.d_buf = 0;
							this.opt_len = 0;
							this.static_len = 0;
							this.matches = 0;
							this.insert = 0;
							this.bi_buf = 0;
							this.bi_valid = 0;
						}

						function deflateResetKeep(strm) {
							var s;
							if(!strm || !strm.state) {
								return err(strm, Z_STREAM_ERROR);
							}
							strm.total_in = strm.total_out = 0;
							strm.data_type = Z_UNKNOWN;
							s = strm.state;
							s.pending = 0;
							s.pending_out = 0;
							if(s.wrap < 0) {
								s.wrap = -s.wrap;
							}
							s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
							strm.adler = (s.wrap === 2) ? 0 : 1;
							s.last_flush = Z_NO_FLUSH;
							trees._tr_init(s);
							return Z_OK;
						}

						function deflateReset(strm) {
							var ret = deflateResetKeep(strm);
							if(ret === Z_OK) {
								lm_init(strm.state);
							}
							return ret;
						}

						function deflateSetHeader(strm, head) {
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							if(strm.state.wrap !== 2) {
								return Z_STREAM_ERROR;
							}
							strm.state.gzhead = head;
							return Z_OK;
						}

						function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
							if(!strm) {
								return Z_STREAM_ERROR;
							}
							var wrap = 1;
							if(level === Z_DEFAULT_COMPRESSION) {
								level = 6;
							}
							if(windowBits < 0) {
								wrap = 0;
								windowBits = -windowBits;
							} else if(windowBits > 15) {
								wrap = 2;
								windowBits -= 16;
							}
							if(memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
								return err(strm, Z_STREAM_ERROR);
							}
							if(windowBits === 8) {
								windowBits = 9;
							}
							var s = new DeflateState();
							strm.state = s;
							s.strm = strm;
							s.wrap = wrap;
							s.gzhead = null;
							s.w_bits = windowBits;
							s.w_size = 1 << s.w_bits;
							s.w_mask = s.w_size - 1;
							s.hash_bits = memLevel + 7;
							s.hash_size = 1 << s.hash_bits;
							s.hash_mask = s.hash_size - 1;
							s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
							s.window = new utils.Buf8(s.w_size * 2);
							s.head = new utils.Buf16(s.hash_size);
							s.prev = new utils.Buf16(s.w_size);
							s.lit_bufsize = 1 << (memLevel + 6);
							s.pending_buf_size = s.lit_bufsize * 4;
							s.pending_buf = new utils.Buf8(s.pending_buf_size);
							s.d_buf = 1 * s.lit_bufsize;
							s.l_buf = (1 + 2) * s.lit_bufsize;
							s.level = level;
							s.strategy = strategy;
							s.method = method;
							return deflateReset(strm);
						}

						function deflateInit(strm, level) {
							return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
						}

						function deflate(strm, flush) {
							var old_flush, s;
							var beg, val;
							if(!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
								return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
							}
							s = strm.state;
							if(!strm.output || (!strm.input && strm.avail_in !== 0) || (s.status === FINISH_STATE && flush !== Z_FINISH)) {
								return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
							}
							s.strm = strm;
							old_flush = s.last_flush;
							s.last_flush = flush;
							if(s.status === INIT_STATE) {
								if(s.wrap === 2) {
									strm.adler = 0;
									put_byte(s, 31);
									put_byte(s, 139);
									put_byte(s, 8);
									if(!s.gzhead) {
										put_byte(s, 0);
										put_byte(s, 0);
										put_byte(s, 0);
										put_byte(s, 0);
										put_byte(s, 0);
										put_byte(s, s.level === 9 ? 2 : (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0));
										put_byte(s, OS_CODE);
										s.status = BUSY_STATE;
									} else {
										put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
										put_byte(s, s.gzhead.time & 0xff);
										put_byte(s, (s.gzhead.time >> 8) & 0xff);
										put_byte(s, (s.gzhead.time >> 16) & 0xff);
										put_byte(s, (s.gzhead.time >> 24) & 0xff);
										put_byte(s, s.level === 9 ? 2 : (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0));
										put_byte(s, s.gzhead.os & 0xff);
										if(s.gzhead.extra && s.gzhead.extra.length) {
											put_byte(s, s.gzhead.extra.length & 0xff);
											put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
										}
										if(s.gzhead.hcrc) {
											strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
										}
										s.gzindex = 0;
										s.status = EXTRA_STATE;
									}
								} else {
									var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
									var level_flags = -1;
									if(s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
										level_flags = 0;
									} else if(s.level < 6) {
										level_flags = 1;
									} else if(s.level === 6) {
										level_flags = 2;
									} else {
										level_flags = 3;
									}
									header |= (level_flags << 6);
									if(s.strstart !== 0) {
										header |= PRESET_DICT;
									}
									header += 31 - (header % 31);
									s.status = BUSY_STATE;
									putShortMSB(s, header);
									if(s.strstart !== 0) {
										putShortMSB(s, strm.adler >>> 16);
										putShortMSB(s, strm.adler & 0xffff);
									}
									strm.adler = 1;
								}
							}
							if(s.status === EXTRA_STATE) {
								if(s.gzhead.extra) {
									beg = s.pending;
									while(s.gzindex < (s.gzhead.extra.length & 0xffff)) {
										if(s.pending === s.pending_buf_size) {
											if(s.gzhead.hcrc && s.pending > beg) {
												strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
											}
											flush_pending(strm);
											beg = s.pending;
											if(s.pending === s.pending_buf_size) {
												break;
											}
										}
										put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
										s.gzindex++;
									}
									if(s.gzhead.hcrc && s.pending > beg) {
										strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
									}
									if(s.gzindex === s.gzhead.extra.length) {
										s.gzindex = 0;
										s.status = NAME_STATE;
									}
								} else {
									s.status = NAME_STATE;
								}
							}
							if(s.status === NAME_STATE) {
								if(s.gzhead.name) {
									beg = s.pending;
									do {
										if(s.pending === s.pending_buf_size) {
											if(s.gzhead.hcrc && s.pending > beg) {
												strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
											}
											flush_pending(strm);
											beg = s.pending;
											if(s.pending === s.pending_buf_size) {
												val = 1;
												break;
											}
										}
										if(s.gzindex < s.gzhead.name.length) {
											val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
										} else {
											val = 0;
										}
										put_byte(s, val);
									} while (val !== 0);
									if(s.gzhead.hcrc && s.pending > beg) {
										strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
									}
									if(val === 0) {
										s.gzindex = 0;
										s.status = COMMENT_STATE;
									}
								} else {
									s.status = COMMENT_STATE;
								}
							}
							if(s.status === COMMENT_STATE) {
								if(s.gzhead.comment) {
									beg = s.pending;
									do {
										if(s.pending === s.pending_buf_size) {
											if(s.gzhead.hcrc && s.pending > beg) {
												strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
											}
											flush_pending(strm);
											beg = s.pending;
											if(s.pending === s.pending_buf_size) {
												val = 1;
												break;
											}
										}
										if(s.gzindex < s.gzhead.comment.length) {
											val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
										} else {
											val = 0;
										}
										put_byte(s, val);
									} while (val !== 0);
									if(s.gzhead.hcrc && s.pending > beg) {
										strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
									}
									if(val === 0) {
										s.status = HCRC_STATE;
									}
								} else {
									s.status = HCRC_STATE;
								}
							}
							if(s.status === HCRC_STATE) {
								if(s.gzhead.hcrc) {
									if(s.pending + 2 > s.pending_buf_size) {
										flush_pending(strm);
									}
									if(s.pending + 2 <= s.pending_buf_size) {
										put_byte(s, strm.adler & 0xff);
										put_byte(s, (strm.adler >> 8) & 0xff);
										strm.adler = 0;
										s.status = BUSY_STATE;
									}
								} else {
									s.status = BUSY_STATE;
								}
							}
							if(s.pending !== 0) {
								flush_pending(strm);
								if(strm.avail_out === 0) {
									s.last_flush = -1;
									return Z_OK;
								}
							} else if(strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
								return err(strm, Z_BUF_ERROR);
							}
							if(s.status === FINISH_STATE && strm.avail_in !== 0) {
								return err(strm, Z_BUF_ERROR);
							}
							if(strm.avail_in !== 0 || s.lookahead !== 0 || (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
								var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) : (s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush));
								if(bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
									s.status = FINISH_STATE;
								}
								if(bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
									if(strm.avail_out === 0) {
										s.last_flush = -1;
									}
									return Z_OK;
								}
								if(bstate === BS_BLOCK_DONE) {
									if(flush === Z_PARTIAL_FLUSH) {
										trees._tr_align(s);
									} else if(flush !== Z_BLOCK) {
										trees._tr_stored_block(s, 0, 0, false);
										if(flush === Z_FULL_FLUSH) {
											zero(s.head);
											if(s.lookahead === 0) {
												s.strstart = 0;
												s.block_start = 0;
												s.insert = 0;
											}
										}
									}
									flush_pending(strm);
									if(strm.avail_out === 0) {
										s.last_flush = -1;
										return Z_OK;
									}
								}
							}
							if(flush !== Z_FINISH) {
								return Z_OK;
							}
							if(s.wrap <= 0) {
								return Z_STREAM_END;
							}
							if(s.wrap === 2) {
								put_byte(s, strm.adler & 0xff);
								put_byte(s, (strm.adler >> 8) & 0xff);
								put_byte(s, (strm.adler >> 16) & 0xff);
								put_byte(s, (strm.adler >> 24) & 0xff);
								put_byte(s, strm.total_in & 0xff);
								put_byte(s, (strm.total_in >> 8) & 0xff);
								put_byte(s, (strm.total_in >> 16) & 0xff);
								put_byte(s, (strm.total_in >> 24) & 0xff);
							} else {
								putShortMSB(s, strm.adler >>> 16);
								putShortMSB(s, strm.adler & 0xffff);
							}
							flush_pending(strm);
							if(s.wrap > 0) {
								s.wrap = -s.wrap;
							}
							return s.pending !== 0 ? Z_OK : Z_STREAM_END;
						}

						function deflateEnd(strm) {
							var status;
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							status = strm.state.status;
							if(status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
								return err(strm, Z_STREAM_ERROR);
							}
							strm.state = null;
							return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
						}

						function deflateSetDictionary(strm, dictionary) {
							var dictLength = dictionary.length;
							var s;
							var str, n;
							var wrap;
							var avail;
							var next;
							var input;
							var tmpDict;
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							s = strm.state;
							wrap = s.wrap;
							if(wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
								return Z_STREAM_ERROR;
							}
							if(wrap === 1) {
								strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
							}
							s.wrap = 0;
							if(dictLength >= s.w_size) {
								if(wrap === 0) {
									zero(s.head);
									s.strstart = 0;
									s.block_start = 0;
									s.insert = 0;
								}
								tmpDict = new utils.Buf8(s.w_size);
								utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
								dictionary = tmpDict;
								dictLength = s.w_size;
							}
							avail = strm.avail_in;
							next = strm.next_in;
							input = strm.input;
							strm.avail_in = dictLength;
							strm.next_in = 0;
							strm.input = dictionary;
							fill_window(s);
							while(s.lookahead >= MIN_MATCH) {
								str = s.strstart;
								n = s.lookahead - (MIN_MATCH - 1);
								do {
									s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
									s.prev[str & s.w_mask] = s.head[s.ins_h];
									s.head[s.ins_h] = str;
									str++;
								} while (--n);
								s.strstart = str;
								s.lookahead = MIN_MATCH - 1;
								fill_window(s);
							}
							s.strstart += s.lookahead;
							s.block_start = s.strstart;
							s.insert = s.lookahead;
							s.lookahead = 0;
							s.match_length = s.prev_length = MIN_MATCH - 1;
							s.match_available = 0;
							strm.next_in = next;
							strm.input = input;
							strm.avail_in = avail;
							s.wrap = wrap;
							return Z_OK;
						}
						exports.deflateInit = deflateInit;
						exports.deflateInit2 = deflateInit2;
						exports.deflateReset = deflateReset;
						exports.deflateResetKeep = deflateResetKeep;
						exports.deflateSetHeader = deflateSetHeader;
						exports.deflate = deflate;
						exports.deflateEnd = deflateEnd;
						exports.deflateSetDictionary = deflateSetDictionary;
						exports.deflateInfo = 'pako deflate (from Nodeca project)';
					}, {
						"../utils/common": 146,
						"./adler32": 148,
						"./crc32": 150,
						"./messages": 156,
						"./trees": 157
					}], 152: [function (require, module, exports) {
						'use strict';

						function GZheader() {
							this.text = 0;
							this.time = 0;
							this.xflags = 0;
							this.os = 0;
							this.extra = null;
							this.extra_len = 0;
							this.name = '';
							this.comment = '';
							this.hcrc = 0;
							this.done = false;
						}
						module.exports = GZheader;
					}, {}], 153: [function (require, module, exports) {
						'use strict';
						var BAD = 30;
						var TYPE = 12;
						module.exports = function inflate_fast(strm, start) {
							var state;
							var _in;
							var last;
							var _out;
							var beg;
							var end;
							var dmax;
							var wsize;
							var whave;
							var wnext;
							var s_window;
							var hold;
							var bits;
							var lcode;
							var dcode;
							var lmask;
							var dmask;
							var here;
							var op;
							var len;
							var dist;
							var from;
							var from_source;
							var input, output;
							state = strm.state;
							_in = strm.next_in;
							input = strm.input;
							last = _in + (strm.avail_in - 5);
							_out = strm.next_out;
							output = strm.output;
							beg = _out - (start - strm.avail_out);
							end = _out + (strm.avail_out - 257);
							dmax = state.dmax;
							wsize = state.wsize;
							whave = state.whave;
							wnext = state.wnext;
							s_window = state.window;
							hold = state.hold;
							bits = state.bits;
							lcode = state.lencode;
							dcode = state.distcode;
							lmask = (1 << state.lenbits) - 1;
							dmask = (1 << state.distbits) - 1;
							top: do {
								if(bits < 15) {
									hold += input[_in++] << bits;
									bits += 8;
									hold += input[_in++] << bits;
									bits += 8;
								}
								here = lcode[hold & lmask];
								dolen: for(;;) {
									op = here >>> 24;
									hold >>>= op;
									bits -= op;
									op = (here >>> 16) & 0xff;
									if(op === 0) {
										output[_out++] = here & 0xffff;
									} else if(op & 16) {
										len = here & 0xffff;
										op &= 15;
										if(op) {
											if(bits < op) {
												hold += input[_in++] << bits;
												bits += 8;
											}
											len += hold & ((1 << op) - 1);
											hold >>>= op;
											bits -= op;
										}
										if(bits < 15) {
											hold += input[_in++] << bits;
											bits += 8;
											hold += input[_in++] << bits;
											bits += 8;
										}
										here = dcode[hold & dmask];
										dodist: for(;;) {
											op = here >>> 24;
											hold >>>= op;
											bits -= op;
											op = (here >>> 16) & 0xff;
											if(op & 16) {
												dist = here & 0xffff;
												op &= 15;
												if(bits < op) {
													hold += input[_in++] << bits;
													bits += 8;
													if(bits < op) {
														hold += input[_in++] << bits;
														bits += 8;
													}
												}
												dist += hold & ((1 << op) - 1);
												if(dist > dmax) {
													strm.msg = 'invalid distance too far back';
													state.mode = BAD;
													break top;
												}
												hold >>>= op;
												bits -= op;
												op = _out - beg;
												if(dist > op) {
													op = dist - op;
													if(op > whave) {
														if(state.sane) {
															strm.msg = 'invalid distance too far back';
															state.mode = BAD;
															break top;
														}
													}
													from = 0;
													from_source = s_window;
													if(wnext === 0) {
														from += wsize - op;
														if(op < len) {
															len -= op;
															do {
																output[_out++] = s_window[from++];
															} while (--op);
															from = _out - dist;
															from_source = output;
														}
													} else if(wnext < op) {
														from += wsize + wnext - op;
														op -= wnext;
														if(op < len) {
															len -= op;
															do {
																output[_out++] = s_window[from++];
															} while (--op);
															from = 0;
															if(wnext < len) {
																op = wnext;
																len -= op;
																do {
																	output[_out++] = s_window[from++];
																} while (--op);
																from = _out - dist;
																from_source = output;
															}
														}
													} else {
														from += wnext - op;
														if(op < len) {
															len -= op;
															do {
																output[_out++] = s_window[from++];
															} while (--op);
															from = _out - dist;
															from_source = output;
														}
													}
													while(len > 2) {
														output[_out++] = from_source[from++];
														output[_out++] = from_source[from++];
														output[_out++] = from_source[from++];
														len -= 3;
													}
													if(len) {
														output[_out++] = from_source[from++];
														if(len > 1) {
															output[_out++] = from_source[from++];
														}
													}
												} else {
													from = _out - dist;
													do {
														output[_out++] = output[from++];
														output[_out++] = output[from++];
														output[_out++] = output[from++];
														len -= 3;
													} while (len > 2);
													if(len) {
														output[_out++] = output[from++];
														if(len > 1) {
															output[_out++] = output[from++];
														}
													}
												}
											} else if((op & 64) === 0) {
												here = dcode[(here & 0xffff) + (hold & ((1 << op) - 1))];
												continue dodist;
											} else {
												strm.msg = 'invalid distance code';
												state.mode = BAD;
												break top;
											}
											break;
										}
									} else if((op & 64) === 0) {
										here = lcode[(here & 0xffff) + (hold & ((1 << op) - 1))];
										continue dolen;
									} else if(op & 32) {
										state.mode = TYPE;
										break top;
									} else {
										strm.msg = 'invalid literal/length code';
										state.mode = BAD;
										break top;
									}
									break;
								}
							} while (_in < last && _out < end);
							len = bits >> 3;
							_in -= len;
							bits -= len << 3;
							hold &= (1 << bits) - 1;
							strm.next_in = _in;
							strm.next_out = _out;
							strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
							strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
							state.hold = hold;
							state.bits = bits;
							return;
						};
					}, {}], 154: [function (require, module, exports) {
						'use strict';
						var utils = require('../utils/common');
						var adler32 = require('./adler32');
						var crc32 = require('./crc32');
						var inflate_fast = require('./inffast');
						var inflate_table = require('./inftrees');
						var CODES = 0;
						var LENS = 1;
						var DISTS = 2;
						var Z_FINISH = 4;
						var Z_BLOCK = 5;
						var Z_TREES = 6;
						var Z_OK = 0;
						var Z_STREAM_END = 1;
						var Z_NEED_DICT = 2;
						var Z_STREAM_ERROR = -2;
						var Z_DATA_ERROR = -3;
						var Z_MEM_ERROR = -4;
						var Z_BUF_ERROR = -5;
						var Z_DEFLATED = 8;
						var HEAD = 1;
						var FLAGS = 2;
						var TIME = 3;
						var OS = 4;
						var EXLEN = 5;
						var EXTRA = 6;
						var NAME = 7;
						var COMMENT = 8;
						var HCRC = 9;
						var DICTID = 10;
						var DICT = 11;
						var TYPE = 12;
						var TYPEDO = 13;
						var STORED = 14;
						var COPY_ = 15;
						var COPY = 16;
						var TABLE = 17;
						var LENLENS = 18;
						var CODELENS = 19;
						var LEN_ = 20;
						var LEN = 21;
						var LENEXT = 22;
						var DIST = 23;
						var DISTEXT = 24;
						var MATCH = 25;
						var LIT = 26;
						var CHECK = 27;
						var LENGTH = 28;
						var DONE = 29;
						var BAD = 30;
						var MEM = 31;
						var SYNC = 32;
						var ENOUGH_LENS = 852;
						var ENOUGH_DISTS = 592;
						var MAX_WBITS = 15;
						var DEF_WBITS = MAX_WBITS;

						function zswap32(q) {
							return(((q >>> 24) & 0xff) + ((q >>> 8) & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24));
						}

						function InflateState() {
							this.mode = 0;
							this.last = false;
							this.wrap = 0;
							this.havedict = false;
							this.flags = 0;
							this.dmax = 0;
							this.check = 0;
							this.total = 0;
							this.head = null;
							this.wbits = 0;
							this.wsize = 0;
							this.whave = 0;
							this.wnext = 0;
							this.window = null;
							this.hold = 0;
							this.bits = 0;
							this.length = 0;
							this.offset = 0;
							this.extra = 0;
							this.lencode = null;
							this.distcode = null;
							this.lenbits = 0;
							this.distbits = 0;
							this.ncode = 0;
							this.nlen = 0;
							this.ndist = 0;
							this.have = 0;
							this.next = null;
							this.lens = new utils.Buf16(320);
							this.work = new utils.Buf16(288);
							this.lendyn = null;
							this.distdyn = null;
							this.sane = 0;
							this.back = 0;
							this.was = 0;
						}

						function inflateResetKeep(strm) {
							var state;
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							state = strm.state;
							strm.total_in = strm.total_out = state.total = 0;
							strm.msg = '';
							if(state.wrap) {
								strm.adler = state.wrap & 1;
							}
							state.mode = HEAD;
							state.last = 0;
							state.havedict = 0;
							state.dmax = 32768;
							state.head = null;
							state.hold = 0;
							state.bits = 0;
							state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
							state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
							state.sane = 1;
							state.back = -1;
							return Z_OK;
						}

						function inflateReset(strm) {
							var state;
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							state = strm.state;
							state.wsize = 0;
							state.whave = 0;
							state.wnext = 0;
							return inflateResetKeep(strm);
						}

						function inflateReset2(strm, windowBits) {
							var wrap;
							var state;
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							state = strm.state;
							if(windowBits < 0) {
								wrap = 0;
								windowBits = -windowBits;
							} else {
								wrap = (windowBits >> 4) + 1;
								if(windowBits < 48) {
									windowBits &= 15;
								}
							}
							if(windowBits && (windowBits < 8 || windowBits > 15)) {
								return Z_STREAM_ERROR;
							}
							if(state.window !== null && state.wbits !== windowBits) {
								state.window = null;
							}
							state.wrap = wrap;
							state.wbits = windowBits;
							return inflateReset(strm);
						}

						function inflateInit2(strm, windowBits) {
							var ret;
							var state;
							if(!strm) {
								return Z_STREAM_ERROR;
							}
							state = new InflateState();
							strm.state = state;
							state.window = null;
							ret = inflateReset2(strm, windowBits);
							if(ret !== Z_OK) {
								strm.state = null;
							}
							return ret;
						}

						function inflateInit(strm) {
							return inflateInit2(strm, DEF_WBITS);
						}
						var virgin = true;
						var lenfix, distfix;

						function fixedtables(state) {
							if(virgin) {
								var sym;
								lenfix = new utils.Buf32(512);
								distfix = new utils.Buf32(32);
								sym = 0;
								while(sym < 144) {
									state.lens[sym++] = 8;
								}
								while(sym < 256) {
									state.lens[sym++] = 9;
								}
								while(sym < 280) {
									state.lens[sym++] = 7;
								}
								while(sym < 288) {
									state.lens[sym++] = 8;
								}
								inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
									bits: 9
								});
								sym = 0;
								while(sym < 32) {
									state.lens[sym++] = 5;
								}
								inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
									bits: 5
								});
								virgin = false;
							}
							state.lencode = lenfix;
							state.lenbits = 9;
							state.distcode = distfix;
							state.distbits = 5;
						}

						function updatewindow(strm, src, end, copy) {
							var dist;
							var state = strm.state;
							if(state.window === null) {
								state.wsize = 1 << state.wbits;
								state.wnext = 0;
								state.whave = 0;
								state.window = new utils.Buf8(state.wsize);
							}
							if(copy >= state.wsize) {
								utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
								state.wnext = 0;
								state.whave = state.wsize;
							} else {
								dist = state.wsize - state.wnext;
								if(dist > copy) {
									dist = copy;
								}
								utils.arraySet(state.window, src, end - copy, dist, state.wnext);
								copy -= dist;
								if(copy) {
									utils.arraySet(state.window, src, end - copy, copy, 0);
									state.wnext = copy;
									state.whave = state.wsize;
								} else {
									state.wnext += dist;
									if(state.wnext === state.wsize) {
										state.wnext = 0;
									}
									if(state.whave < state.wsize) {
										state.whave += dist;
									}
								}
							}
							return 0;
						}

						function inflate(strm, flush) {
							var state;
							var input, output;
							var next;
							var put;
							var have, left;
							var hold;
							var bits;
							var _in, _out;
							var copy;
							var from;
							var from_source;
							var here = 0;
							var here_bits, here_op, here_val;
							var last_bits, last_op, last_val;
							var len;
							var ret;
							var hbuf = new utils.Buf8(4);
							var opts;
							var n;
							var order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
							if(!strm || !strm.state || !strm.output || (!strm.input && strm.avail_in !== 0)) {
								return Z_STREAM_ERROR;
							}
							state = strm.state;
							if(state.mode === TYPE) {
								state.mode = TYPEDO;
							}
							put = strm.next_out;
							output = strm.output;
							left = strm.avail_out;
							next = strm.next_in;
							input = strm.input;
							have = strm.avail_in;
							hold = state.hold;
							bits = state.bits;
							_in = have;
							_out = left;
							ret = Z_OK;
							inf_leave: for(;;) {
								switch(state.mode) {
								case HEAD:
									if(state.wrap === 0) {
										state.mode = TYPEDO;
										break;
									}
									while(bits < 16) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									if((state.wrap & 2) && hold === 0x8b1f) {
										state.check = 0;
										hbuf[0] = hold & 0xff;
										hbuf[1] = (hold >>> 8) & 0xff;
										state.check = crc32(state.check, hbuf, 2, 0);
										hold = 0;
										bits = 0;
										state.mode = FLAGS;
										break;
									}
									state.flags = 0;
									if(state.head) {
										state.head.done = false;
									}
									if(!(state.wrap & 1) || (((hold & 0xff) << 8) + (hold >> 8)) % 31) {
										strm.msg = 'incorrect header check';
										state.mode = BAD;
										break;
									}
									if((hold & 0x0f) !== Z_DEFLATED) {
										strm.msg = 'unknown compression method';
										state.mode = BAD;
										break;
									}
									hold >>>= 4;
									bits -= 4;
									len = (hold & 0x0f) + 8;
									if(state.wbits === 0) {
										state.wbits = len;
									} else if(len > state.wbits) {
										strm.msg = 'invalid window size';
										state.mode = BAD;
										break;
									}
									state.dmax = 1 << len;
									strm.adler = state.check = 1;
									state.mode = hold & 0x200 ? DICTID : TYPE;
									hold = 0;
									bits = 0;
									break;
								case FLAGS:
									while(bits < 16) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									state.flags = hold;
									if((state.flags & 0xff) !== Z_DEFLATED) {
										strm.msg = 'unknown compression method';
										state.mode = BAD;
										break;
									}
									if(state.flags & 0xe000) {
										strm.msg = 'unknown header flags set';
										state.mode = BAD;
										break;
									}
									if(state.head) {
										state.head.text = ((hold >> 8) & 1);
									}
									if(state.flags & 0x0200) {
										hbuf[0] = hold & 0xff;
										hbuf[1] = (hold >>> 8) & 0xff;
										state.check = crc32(state.check, hbuf, 2, 0);
									}
									hold = 0;
									bits = 0;
									state.mode = TIME;
								case TIME:
									while(bits < 32) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									if(state.head) {
										state.head.time = hold;
									}
									if(state.flags & 0x0200) {
										hbuf[0] = hold & 0xff;
										hbuf[1] = (hold >>> 8) & 0xff;
										hbuf[2] = (hold >>> 16) & 0xff;
										hbuf[3] = (hold >>> 24) & 0xff;
										state.check = crc32(state.check, hbuf, 4, 0);
									}
									hold = 0;
									bits = 0;
									state.mode = OS;
								case OS:
									while(bits < 16) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									if(state.head) {
										state.head.xflags = (hold & 0xff);
										state.head.os = (hold >> 8);
									}
									if(state.flags & 0x0200) {
										hbuf[0] = hold & 0xff;
										hbuf[1] = (hold >>> 8) & 0xff;
										state.check = crc32(state.check, hbuf, 2, 0);
									}
									hold = 0;
									bits = 0;
									state.mode = EXLEN;
								case EXLEN:
									if(state.flags & 0x0400) {
										while(bits < 16) {
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										state.length = hold;
										if(state.head) {
											state.head.extra_len = hold;
										}
										if(state.flags & 0x0200) {
											hbuf[0] = hold & 0xff;
											hbuf[1] = (hold >>> 8) & 0xff;
											state.check = crc32(state.check, hbuf, 2, 0);
										}
										hold = 0;
										bits = 0;
									} else if(state.head) {
										state.head.extra = null;
									}
									state.mode = EXTRA;
								case EXTRA:
									if(state.flags & 0x0400) {
										copy = state.length;
										if(copy > have) {
											copy = have;
										}
										if(copy) {
											if(state.head) {
												len = state.head.extra_len - state.length;
												if(!state.head.extra) {
													state.head.extra = new Array(state.head.extra_len);
												}
												utils.arraySet(state.head.extra, input, next, copy, len);
											}
											if(state.flags & 0x0200) {
												state.check = crc32(state.check, input, copy, next);
											}
											have -= copy;
											next += copy;
											state.length -= copy;
										}
										if(state.length) {
											break inf_leave;
										}
									}
									state.length = 0;
									state.mode = NAME;
								case NAME:
									if(state.flags & 0x0800) {
										if(have === 0) {
											break inf_leave;
										}
										copy = 0;
										do {
											len = input[next + copy++];
											if(state.head && len && (state.length < 65536)) {
												state.head.name += String.fromCharCode(len);
											}
										} while (len && copy < have);
										if(state.flags & 0x0200) {
											state.check = crc32(state.check, input, copy, next);
										}
										have -= copy;
										next += copy;
										if(len) {
											break inf_leave;
										}
									} else if(state.head) {
										state.head.name = null;
									}
									state.length = 0;
									state.mode = COMMENT;
								case COMMENT:
									if(state.flags & 0x1000) {
										if(have === 0) {
											break inf_leave;
										}
										copy = 0;
										do {
											len = input[next + copy++];
											if(state.head && len && (state.length < 65536)) {
												state.head.comment += String.fromCharCode(len);
											}
										} while (len && copy < have);
										if(state.flags & 0x0200) {
											state.check = crc32(state.check, input, copy, next);
										}
										have -= copy;
										next += copy;
										if(len) {
											break inf_leave;
										}
									} else if(state.head) {
										state.head.comment = null;
									}
									state.mode = HCRC;
								case HCRC:
									if(state.flags & 0x0200) {
										while(bits < 16) {
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										if(hold !== (state.check & 0xffff)) {
											strm.msg = 'header crc mismatch';
											state.mode = BAD;
											break;
										}
										hold = 0;
										bits = 0;
									}
									if(state.head) {
										state.head.hcrc = ((state.flags >> 9) & 1);
										state.head.done = true;
									}
									strm.adler = state.check = 0;
									state.mode = TYPE;
									break;
								case DICTID:
									while(bits < 32) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									strm.adler = state.check = zswap32(hold);
									hold = 0;
									bits = 0;
									state.mode = DICT;
								case DICT:
									if(state.havedict === 0) {
										strm.next_out = put;
										strm.avail_out = left;
										strm.next_in = next;
										strm.avail_in = have;
										state.hold = hold;
										state.bits = bits;
										return Z_NEED_DICT;
									}
									strm.adler = state.check = 1;
									state.mode = TYPE;
								case TYPE:
									if(flush === Z_BLOCK || flush === Z_TREES) {
										break inf_leave;
									}
								case TYPEDO:
									if(state.last) {
										hold >>>= bits & 7;
										bits -= bits & 7;
										state.mode = CHECK;
										break;
									}
									while(bits < 3) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									state.last = (hold & 0x01);
									hold >>>= 1;
									bits -= 1;
									switch((hold & 0x03)) {
									case 0:
										state.mode = STORED;
										break;
									case 1:
										fixedtables(state);
										state.mode = LEN_;
										if(flush === Z_TREES) {
											hold >>>= 2;
											bits -= 2;
											break inf_leave;
										}
										break;
									case 2:
										state.mode = TABLE;
										break;
									case 3:
										strm.msg = 'invalid block type';
										state.mode = BAD;
									}
									hold >>>= 2;
									bits -= 2;
									break;
								case STORED:
									hold >>>= bits & 7;
									bits -= bits & 7;
									while(bits < 32) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									if((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
										strm.msg = 'invalid stored block lengths';
										state.mode = BAD;
										break;
									}
									state.length = hold & 0xffff;
									hold = 0;
									bits = 0;
									state.mode = COPY_;
									if(flush === Z_TREES) {
										break inf_leave;
									}
								case COPY_:
									state.mode = COPY;
								case COPY:
									copy = state.length;
									if(copy) {
										if(copy > have) {
											copy = have;
										}
										if(copy > left) {
											copy = left;
										}
										if(copy === 0) {
											break inf_leave;
										}
										utils.arraySet(output, input, next, copy, put);
										have -= copy;
										next += copy;
										left -= copy;
										put += copy;
										state.length -= copy;
										break;
									}
									state.mode = TYPE;
									break;
								case TABLE:
									while(bits < 14) {
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									state.nlen = (hold & 0x1f) + 257;
									hold >>>= 5;
									bits -= 5;
									state.ndist = (hold & 0x1f) + 1;
									hold >>>= 5;
									bits -= 5;
									state.ncode = (hold & 0x0f) + 4;
									hold >>>= 4;
									bits -= 4;
									if(state.nlen > 286 || state.ndist > 30) {
										strm.msg = 'too many length or distance symbols';
										state.mode = BAD;
										break;
									}
									state.have = 0;
									state.mode = LENLENS;
								case LENLENS:
									while(state.have < state.ncode) {
										while(bits < 3) {
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										state.lens[order[state.have++]] = (hold & 0x07);
										hold >>>= 3;
										bits -= 3;
									}
									while(state.have < 19) {
										state.lens[order[state.have++]] = 0;
									}
									state.lencode = state.lendyn;
									state.lenbits = 7;
									opts = {
										bits: state.lenbits
									};
									ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
									state.lenbits = opts.bits;
									if(ret) {
										strm.msg = 'invalid code lengths set';
										state.mode = BAD;
										break;
									}
									state.have = 0;
									state.mode = CODELENS;
								case CODELENS:
									while(state.have < state.nlen + state.ndist) {
										for(;;) {
											here = state.lencode[hold & ((1 << state.lenbits) - 1)];
											here_bits = here >>> 24;
											here_op = (here >>> 16) & 0xff;
											here_val = here & 0xffff;
											if((here_bits) <= bits) {
												break;
											}
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										if(here_val < 16) {
											hold >>>= here_bits;
											bits -= here_bits;
											state.lens[state.have++] = here_val;
										} else {
											if(here_val === 16) {
												n = here_bits + 2;
												while(bits < n) {
													if(have === 0) {
														break inf_leave;
													}
													have--;
													hold += input[next++] << bits;
													bits += 8;
												}
												hold >>>= here_bits;
												bits -= here_bits;
												if(state.have === 0) {
													strm.msg = 'invalid bit length repeat';
													state.mode = BAD;
													break;
												}
												len = state.lens[state.have - 1];
												copy = 3 + (hold & 0x03);
												hold >>>= 2;
												bits -= 2;
											} else if(here_val === 17) {
												n = here_bits + 3;
												while(bits < n) {
													if(have === 0) {
														break inf_leave;
													}
													have--;
													hold += input[next++] << bits;
													bits += 8;
												}
												hold >>>= here_bits;
												bits -= here_bits;
												len = 0;
												copy = 3 + (hold & 0x07);
												hold >>>= 3;
												bits -= 3;
											} else {
												n = here_bits + 7;
												while(bits < n) {
													if(have === 0) {
														break inf_leave;
													}
													have--;
													hold += input[next++] << bits;
													bits += 8;
												}
												hold >>>= here_bits;
												bits -= here_bits;
												len = 0;
												copy = 11 + (hold & 0x7f);
												hold >>>= 7;
												bits -= 7;
											}
											if(state.have + copy > state.nlen + state.ndist) {
												strm.msg = 'invalid bit length repeat';
												state.mode = BAD;
												break;
											}
											while(copy--) {
												state.lens[state.have++] = len;
											}
										}
									}
									if(state.mode === BAD) {
										break;
									}
									if(state.lens[256] === 0) {
										strm.msg = 'invalid code -- missing end-of-block';
										state.mode = BAD;
										break;
									}
									state.lenbits = 9;
									opts = {
										bits: state.lenbits
									};
									ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
									state.lenbits = opts.bits;
									if(ret) {
										strm.msg = 'invalid literal/lengths set';
										state.mode = BAD;
										break;
									}
									state.distbits = 6;
									state.distcode = state.distdyn;
									opts = {
										bits: state.distbits
									};
									ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
									state.distbits = opts.bits;
									if(ret) {
										strm.msg = 'invalid distances set';
										state.mode = BAD;
										break;
									}
									state.mode = LEN_;
									if(flush === Z_TREES) {
										break inf_leave;
									}
								case LEN_:
									state.mode = LEN;
								case LEN:
									if(have >= 6 && left >= 258) {
										strm.next_out = put;
										strm.avail_out = left;
										strm.next_in = next;
										strm.avail_in = have;
										state.hold = hold;
										state.bits = bits;
										inflate_fast(strm, _out);
										put = strm.next_out;
										output = strm.output;
										left = strm.avail_out;
										next = strm.next_in;
										input = strm.input;
										have = strm.avail_in;
										hold = state.hold;
										bits = state.bits;
										if(state.mode === TYPE) {
											state.back = -1;
										}
										break;
									}
									state.back = 0;
									for(;;) {
										here = state.lencode[hold & ((1 << state.lenbits) - 1)];
										here_bits = here >>> 24;
										here_op = (here >>> 16) & 0xff;
										here_val = here & 0xffff;
										if(here_bits <= bits) {
											break;
										}
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									if(here_op && (here_op & 0xf0) === 0) {
										last_bits = here_bits;
										last_op = here_op;
										last_val = here_val;
										for(;;) {
											here = state.lencode[last_val + ((hold & ((1 << (last_bits + last_op)) - 1)) >> last_bits)];
											here_bits = here >>> 24;
											here_op = (here >>> 16) & 0xff;
											here_val = here & 0xffff;
											if((last_bits + here_bits) <= bits) {
												break;
											}
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										hold >>>= last_bits;
										bits -= last_bits;
										state.back += last_bits;
									}
									hold >>>= here_bits;
									bits -= here_bits;
									state.back += here_bits;
									state.length = here_val;
									if(here_op === 0) {
										state.mode = LIT;
										break;
									}
									if(here_op & 32) {
										state.back = -1;
										state.mode = TYPE;
										break;
									}
									if(here_op & 64) {
										strm.msg = 'invalid literal/length code';
										state.mode = BAD;
										break;
									}
									state.extra = here_op & 15;
									state.mode = LENEXT;
								case LENEXT:
									if(state.extra) {
										n = state.extra;
										while(bits < n) {
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										state.length += hold & ((1 << state.extra) - 1);
										hold >>>= state.extra;
										bits -= state.extra;
										state.back += state.extra;
									}
									state.was = state.length;
									state.mode = DIST;
								case DIST:
									for(;;) {
										here = state.distcode[hold & ((1 << state.distbits) - 1)];
										here_bits = here >>> 24;
										here_op = (here >>> 16) & 0xff;
										here_val = here & 0xffff;
										if((here_bits) <= bits) {
											break;
										}
										if(have === 0) {
											break inf_leave;
										}
										have--;
										hold += input[next++] << bits;
										bits += 8;
									}
									if((here_op & 0xf0) === 0) {
										last_bits = here_bits;
										last_op = here_op;
										last_val = here_val;
										for(;;) {
											here = state.distcode[last_val + ((hold & ((1 << (last_bits + last_op)) - 1)) >> last_bits)];
											here_bits = here >>> 24;
											here_op = (here >>> 16) & 0xff;
											here_val = here & 0xffff;
											if((last_bits + here_bits) <= bits) {
												break;
											}
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										hold >>>= last_bits;
										bits -= last_bits;
										state.back += last_bits;
									}
									hold >>>= here_bits;
									bits -= here_bits;
									state.back += here_bits;
									if(here_op & 64) {
										strm.msg = 'invalid distance code';
										state.mode = BAD;
										break;
									}
									state.offset = here_val;
									state.extra = (here_op) & 15;
									state.mode = DISTEXT;
								case DISTEXT:
									if(state.extra) {
										n = state.extra;
										while(bits < n) {
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										state.offset += hold & ((1 << state.extra) - 1);
										hold >>>= state.extra;
										bits -= state.extra;
										state.back += state.extra;
									}
									if(state.offset > state.dmax) {
										strm.msg = 'invalid distance too far back';
										state.mode = BAD;
										break;
									}
									state.mode = MATCH;
								case MATCH:
									if(left === 0) {
										break inf_leave;
									}
									copy = _out - left;
									if(state.offset > copy) {
										copy = state.offset - copy;
										if(copy > state.whave) {
											if(state.sane) {
												strm.msg = 'invalid distance too far back';
												state.mode = BAD;
												break;
											}
										}
										if(copy > state.wnext) {
											copy -= state.wnext;
											from = state.wsize - copy;
										} else {
											from = state.wnext - copy;
										}
										if(copy > state.length) {
											copy = state.length;
										}
										from_source = state.window;
									} else {
										from_source = output;
										from = put - state.offset;
										copy = state.length;
									}
									if(copy > left) {
										copy = left;
									}
									left -= copy;
									state.length -= copy;
									do {
										output[put++] = from_source[from++];
									} while (--copy);
									if(state.length === 0) {
										state.mode = LEN;
									}
									break;
								case LIT:
									if(left === 0) {
										break inf_leave;
									}
									output[put++] = state.length;
									left--;
									state.mode = LEN;
									break;
								case CHECK:
									if(state.wrap) {
										while(bits < 32) {
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold |= input[next++] << bits;
											bits += 8;
										}
										_out -= left;
										strm.total_out += _out;
										state.total += _out;
										if(_out) {
											strm.adler = state.check = (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));
										}
										_out = left;
										if((state.flags ? hold : zswap32(hold)) !== state.check) {
											strm.msg = 'incorrect data check';
											state.mode = BAD;
											break;
										}
										hold = 0;
										bits = 0;
									}
									state.mode = LENGTH;
								case LENGTH:
									if(state.wrap && state.flags) {
										while(bits < 32) {
											if(have === 0) {
												break inf_leave;
											}
											have--;
											hold += input[next++] << bits;
											bits += 8;
										}
										if(hold !== (state.total & 0xffffffff)) {
											strm.msg = 'incorrect length check';
											state.mode = BAD;
											break;
										}
										hold = 0;
										bits = 0;
									}
									state.mode = DONE;
								case DONE:
									ret = Z_STREAM_END;
									break inf_leave;
								case BAD:
									ret = Z_DATA_ERROR;
									break inf_leave;
								case MEM:
									return Z_MEM_ERROR;
								case SYNC:
								default:
									return Z_STREAM_ERROR;
								}
							}
							strm.next_out = put;
							strm.avail_out = left;
							strm.next_in = next;
							strm.avail_in = have;
							state.hold = hold;
							state.bits = bits;
							if(state.wsize || (_out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH))) {
								if(updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
									state.mode = MEM;
									return Z_MEM_ERROR;
								}
							}
							_in -= strm.avail_in;
							_out -= strm.avail_out;
							strm.total_in += _in;
							strm.total_out += _out;
							state.total += _out;
							if(state.wrap && _out) {
								strm.adler = state.check = (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
							}
							strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
							if(((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
								ret = Z_BUF_ERROR;
							}
							return ret;
						}

						function inflateEnd(strm) {
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							var state = strm.state;
							if(state.window) {
								state.window = null;
							}
							strm.state = null;
							return Z_OK;
						}

						function inflateGetHeader(strm, head) {
							var state;
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							state = strm.state;
							if((state.wrap & 2) === 0) {
								return Z_STREAM_ERROR;
							}
							state.head = head;
							head.done = false;
							return Z_OK;
						}

						function inflateSetDictionary(strm, dictionary) {
							var dictLength = dictionary.length;
							var state;
							var dictid;
							var ret;
							if(!strm || !strm.state) {
								return Z_STREAM_ERROR;
							}
							state = strm.state;
							if(state.wrap !== 0 && state.mode !== DICT) {
								return Z_STREAM_ERROR;
							}
							if(state.mode === DICT) {
								dictid = 1;
								dictid = adler32(dictid, dictionary, dictLength, 0);
								if(dictid !== state.check) {
									return Z_DATA_ERROR;
								}
							}
							ret = updatewindow(strm, dictionary, dictLength, dictLength);
							if(ret) {
								state.mode = MEM;
								return Z_MEM_ERROR;
							}
							state.havedict = 1;
							return Z_OK;
						}
						exports.inflateReset = inflateReset;
						exports.inflateReset2 = inflateReset2;
						exports.inflateResetKeep = inflateResetKeep;
						exports.inflateInit = inflateInit;
						exports.inflateInit2 = inflateInit2;
						exports.inflate = inflate;
						exports.inflateEnd = inflateEnd;
						exports.inflateGetHeader = inflateGetHeader;
						exports.inflateSetDictionary = inflateSetDictionary;
						exports.inflateInfo = 'pako inflate (from Nodeca project)';
					}, {
						"../utils/common": 146,
						"./adler32": 148,
						"./crc32": 150,
						"./inffast": 153,
						"./inftrees": 155
					}], 155: [function (require, module, exports) {
						'use strict';
						var utils = require('../utils/common');
						var MAXBITS = 15;
						var ENOUGH_LENS = 852;
						var ENOUGH_DISTS = 592;
						var CODES = 0;
						var LENS = 1;
						var DISTS = 2;
						var lbase = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
						var lext = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
						var dbase = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
						var dext = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
						module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
							var bits = opts.bits;
							var len = 0;
							var sym = 0;
							var min = 0,
								max = 0;
							var root = 0;
							var curr = 0;
							var drop = 0;
							var left = 0;
							var used = 0;
							var huff = 0;
							var incr;
							var fill;
							var low;
							var mask;
							var next;
							var base = null;
							var base_index = 0;
							var end;
							var count = new utils.Buf16(MAXBITS + 1);
							var offs = new utils.Buf16(MAXBITS + 1);
							var extra = null;
							var extra_index = 0;
							var here_bits, here_op, here_val;
							for(len = 0; len <= MAXBITS; len++) {
								count[len] = 0;
							}
							for(sym = 0; sym < codes; sym++) {
								count[lens[lens_index + sym]]++;
							}
							root = bits;
							for(max = MAXBITS; max >= 1; max--) {
								if(count[max] !== 0) {
									break;
								}
							}
							if(root > max) {
								root = max;
							}
							if(max === 0) {
								table[table_index++] = (1 << 24) | (64 << 16) | 0;
								table[table_index++] = (1 << 24) | (64 << 16) | 0;
								opts.bits = 1;
								return 0;
							}
							for(min = 1; min < max; min++) {
								if(count[min] !== 0) {
									break;
								}
							}
							if(root < min) {
								root = min;
							}
							left = 1;
							for(len = 1; len <= MAXBITS; len++) {
								left <<= 1;
								left -= count[len];
								if(left < 0) {
									return -1;
								}
							}
							if(left > 0 && (type === CODES || max !== 1)) {
								return -1;
							}
							offs[1] = 0;
							for(len = 1; len < MAXBITS; len++) {
								offs[len + 1] = offs[len] + count[len];
							}
							for(sym = 0; sym < codes; sym++) {
								if(lens[lens_index + sym] !== 0) {
									work[offs[lens[lens_index + sym]]++] = sym;
								}
							}
							if(type === CODES) {
								base = extra = work;
								end = 19;
							} else if(type === LENS) {
								base = lbase;
								base_index -= 257;
								extra = lext;
								extra_index -= 257;
								end = 256;
							} else {
								base = dbase;
								extra = dext;
								end = -1;
							}
							huff = 0;
							sym = 0;
							len = min;
							next = table_index;
							curr = root;
							drop = 0;
							low = -1;
							used = 1 << root;
							mask = used - 1;
							if((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
								return 1;
							}
							for(;;) {
								here_bits = len - drop;
								if(work[sym] < end) {
									here_op = 0;
									here_val = work[sym];
								} else if(work[sym] > end) {
									here_op = extra[extra_index + work[sym]];
									here_val = base[base_index + work[sym]];
								} else {
									here_op = 32 + 64;
									here_val = 0;
								}
								incr = 1 << (len - drop);
								fill = 1 << curr;
								min = fill;
								do {
									fill -= incr;
									table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val | 0;
								} while (fill !== 0);
								incr = 1 << (len - 1);
								while(huff & incr) {
									incr >>= 1;
								}
								if(incr !== 0) {
									huff &= incr - 1;
									huff += incr;
								} else {
									huff = 0;
								}
								sym++;
								if(--count[len] === 0) {
									if(len === max) {
										break;
									}
									len = lens[lens_index + work[sym]];
								}
								if(len > root && (huff & mask) !== low) {
									if(drop === 0) {
										drop = root;
									}
									next += min;
									curr = len - drop;
									left = 1 << curr;
									while(curr + drop < max) {
										left -= count[curr + drop];
										if(left <= 0) {
											break;
										}
										curr++;
										left <<= 1;
									}
									used += 1 << curr;
									if((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
										return 1;
									}
									low = huff & mask;
									table[low] = (root << 24) | (curr << 16) | (next - table_index) | 0;
								}
							}
							if(huff !== 0) {
								table[next + huff] = ((len - drop) << 24) | (64 << 16) | 0;
							}
							opts.bits = root;
							return 0;
						};
					}, {
						"../utils/common": 146
					}], 156: [function (require, module, exports) {
						'use strict';
						module.exports = {
							2: 'need dictionary',
							1: 'stream end',
							0: '',
							'-1': 'file error',
							'-2': 'stream error',
							'-3': 'data error',
							'-4': 'insufficient memory',
							'-5': 'buffer error',
							'-6': 'incompatible version'
						};
					}, {}], 157: [function (require, module, exports) {
						'use strict';
						var utils = require('../utils/common');
						var Z_FIXED = 4;
						var Z_BINARY = 0;
						var Z_TEXT = 1;
						var Z_UNKNOWN = 2;

						function zero(buf) {
							var len = buf.length;
							while(--len >= 0) {
								buf[len] = 0;
							}
						}
						var STORED_BLOCK = 0;
						var STATIC_TREES = 1;
						var DYN_TREES = 2;
						var MIN_MATCH = 3;
						var MAX_MATCH = 258;
						var LENGTH_CODES = 29;
						var LITERALS = 256;
						var L_CODES = LITERALS + 1 + LENGTH_CODES;
						var D_CODES = 30;
						var BL_CODES = 19;
						var HEAP_SIZE = 2 * L_CODES + 1;
						var MAX_BITS = 15;
						var Buf_size = 16;
						var MAX_BL_BITS = 7;
						var END_BLOCK = 256;
						var REP_3_6 = 16;
						var REPZ_3_10 = 17;
						var REPZ_11_138 = 18;
						var extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
						var extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
						var extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
						var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
						var DIST_CODE_LEN = 512;
						var static_ltree = new Array((L_CODES + 2) * 2);
						zero(static_ltree);
						var static_dtree = new Array(D_CODES * 2);
						zero(static_dtree);
						var _dist_code = new Array(DIST_CODE_LEN);
						zero(_dist_code);
						var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
						zero(_length_code);
						var base_length = new Array(LENGTH_CODES);
						zero(base_length);
						var base_dist = new Array(D_CODES);
						zero(base_dist);

						function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
							this.static_tree = static_tree;
							this.extra_bits = extra_bits;
							this.extra_base = extra_base;
							this.elems = elems;
							this.max_length = max_length;
							this.has_stree = static_tree && static_tree.length;
						}
						var static_l_desc;
						var static_d_desc;
						var static_bl_desc;

						function TreeDesc(dyn_tree, stat_desc) {
							this.dyn_tree = dyn_tree;
							this.max_code = 0;
							this.stat_desc = stat_desc;
						}

						function d_code(dist) {
							return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
						}

						function put_short(s, w) {
							s.pending_buf[s.pending++] = (w) & 0xff;
							s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
						}

						function send_bits(s, value, length) {
							if(s.bi_valid > (Buf_size - length)) {
								s.bi_buf |= (value << s.bi_valid) & 0xffff;
								put_short(s, s.bi_buf);
								s.bi_buf = value >> (Buf_size - s.bi_valid);
								s.bi_valid += length - Buf_size;
							} else {
								s.bi_buf |= (value << s.bi_valid) & 0xffff;
								s.bi_valid += length;
							}
						}

						function send_code(s, c, tree) {
							send_bits(s, tree[c * 2], tree[c * 2 + 1]);
						}

						function bi_reverse(code, len) {
							var res = 0;
							do {
								res |= code & 1;
								code >>>= 1;
								res <<= 1;
							} while (--len > 0);
							return res >>> 1;
						}

						function bi_flush(s) {
							if(s.bi_valid === 16) {
								put_short(s, s.bi_buf);
								s.bi_buf = 0;
								s.bi_valid = 0;
							} else if(s.bi_valid >= 8) {
								s.pending_buf[s.pending++] = s.bi_buf & 0xff;
								s.bi_buf >>= 8;
								s.bi_valid -= 8;
							}
						}

						function gen_bitlen(s, desc) {
							var tree = desc.dyn_tree;
							var max_code = desc.max_code;
							var stree = desc.stat_desc.static_tree;
							var has_stree = desc.stat_desc.has_stree;
							var extra = desc.stat_desc.extra_bits;
							var base = desc.stat_desc.extra_base;
							var max_length = desc.stat_desc.max_length;
							var h;
							var n, m;
							var bits;
							var xbits;
							var f;
							var overflow = 0;
							for(bits = 0; bits <= MAX_BITS; bits++) {
								s.bl_count[bits] = 0;
							}
							tree[s.heap[s.heap_max] * 2 + 1] = 0;
							for(h = s.heap_max + 1; h < HEAP_SIZE; h++) {
								n = s.heap[h];
								bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
								if(bits > max_length) {
									bits = max_length;
									overflow++;
								}
								tree[n * 2 + 1] = bits;
								if(n > max_code) {
									continue;
								}
								s.bl_count[bits]++;
								xbits = 0;
								if(n >= base) {
									xbits = extra[n - base];
								}
								f = tree[n * 2];
								s.opt_len += f * (bits + xbits);
								if(has_stree) {
									s.static_len += f * (stree[n * 2 + 1] + xbits);
								}
							}
							if(overflow === 0) {
								return;
							}
							do {
								bits = max_length - 1;
								while(s.bl_count[bits] === 0) {
									bits--;
								}
								s.bl_count[bits]--;
								s.bl_count[bits + 1] += 2;
								s.bl_count[max_length]--;
								overflow -= 2;
							} while (overflow > 0);
							for(bits = max_length; bits !== 0; bits--) {
								n = s.bl_count[bits];
								while(n !== 0) {
									m = s.heap[--h];
									if(m > max_code) {
										continue;
									}
									if(tree[m * 2 + 1] !== bits) {
										s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
										tree[m * 2 + 1] = bits;
									}
									n--;
								}
							}
						}

						function gen_codes(tree, max_code, bl_count) {
							var next_code = new Array(MAX_BITS + 1);
							var code = 0;
							var bits;
							var n;
							for(bits = 1; bits <= MAX_BITS; bits++) {
								next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
							}
							for(n = 0; n <= max_code; n++) {
								var len = tree[n * 2 + 1];
								if(len === 0) {
									continue;
								}
								tree[n * 2] = bi_reverse(next_code[len]++, len);
							}
						}

						function tr_static_init() {
							var n;
							var bits;
							var length;
							var code;
							var dist;
							var bl_count = new Array(MAX_BITS + 1);
							length = 0;
							for(code = 0; code < LENGTH_CODES - 1; code++) {
								base_length[code] = length;
								for(n = 0; n < (1 << extra_lbits[code]); n++) {
									_length_code[length++] = code;
								}
							}
							_length_code[length - 1] = code;
							dist = 0;
							for(code = 0; code < 16; code++) {
								base_dist[code] = dist;
								for(n = 0; n < (1 << extra_dbits[code]); n++) {
									_dist_code[dist++] = code;
								}
							}
							dist >>= 7;
							for(; code < D_CODES; code++) {
								base_dist[code] = dist << 7;
								for(n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
									_dist_code[256 + dist++] = code;
								}
							}
							for(bits = 0; bits <= MAX_BITS; bits++) {
								bl_count[bits] = 0;
							}
							n = 0;
							while(n <= 143) {
								static_ltree[n * 2 + 1] = 8;
								n++;
								bl_count[8]++;
							}
							while(n <= 255) {
								static_ltree[n * 2 + 1] = 9;
								n++;
								bl_count[9]++;
							}
							while(n <= 279) {
								static_ltree[n * 2 + 1] = 7;
								n++;
								bl_count[7]++;
							}
							while(n <= 287) {
								static_ltree[n * 2 + 1] = 8;
								n++;
								bl_count[8]++;
							}
							gen_codes(static_ltree, L_CODES + 1, bl_count);
							for(n = 0; n < D_CODES; n++) {
								static_dtree[n * 2 + 1] = 5;
								static_dtree[n * 2] = bi_reverse(n, 5);
							}
							static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
							static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
							static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
						}

						function init_block(s) {
							var n;
							for(n = 0; n < L_CODES; n++) {
								s.dyn_ltree[n * 2] = 0;
							}
							for(n = 0; n < D_CODES; n++) {
								s.dyn_dtree[n * 2] = 0;
							}
							for(n = 0; n < BL_CODES; n++) {
								s.bl_tree[n * 2] = 0;
							}
							s.dyn_ltree[END_BLOCK * 2] = 1;
							s.opt_len = s.static_len = 0;
							s.last_lit = s.matches = 0;
						}

						function bi_windup(s) {
							if(s.bi_valid > 8) {
								put_short(s, s.bi_buf);
							} else if(s.bi_valid > 0) {
								s.pending_buf[s.pending++] = s.bi_buf;
							}
							s.bi_buf = 0;
							s.bi_valid = 0;
						}

						function copy_block(s, buf, len, header) {
							bi_windup(s);
							if(header) {
								put_short(s, len);
								put_short(s, ~len);
							}
							utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
							s.pending += len;
						}

						function smaller(tree, n, m, depth) {
							var _n2 = n * 2;
							var _m2 = m * 2;
							return(tree[_n2] < tree[_m2] || (tree[_n2] === tree[_m2] && depth[n] <= depth[m]));
						}

						function pqdownheap(s, tree, k) {
							var v = s.heap[k];
							var j = k << 1;
							while(j <= s.heap_len) {
								if(j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
									j++;
								}
								if(smaller(tree, v, s.heap[j], s.depth)) {
									break;
								}
								s.heap[k] = s.heap[j];
								k = j;
								j <<= 1;
							}
							s.heap[k] = v;
						}

						function compress_block(s, ltree, dtree) {
							var dist;
							var lc;
							var lx = 0;
							var code;
							var extra;
							if(s.last_lit !== 0) {
								do {
									dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
									lc = s.pending_buf[s.l_buf + lx];
									lx++;
									if(dist === 0) {
										send_code(s, lc, ltree);
									} else {
										code = _length_code[lc];
										send_code(s, code + LITERALS + 1, ltree);
										extra = extra_lbits[code];
										if(extra !== 0) {
											lc -= base_length[code];
											send_bits(s, lc, extra);
										}
										dist--;
										code = d_code(dist);
										send_code(s, code, dtree);
										extra = extra_dbits[code];
										if(extra !== 0) {
											dist -= base_dist[code];
											send_bits(s, dist, extra);
										}
									}
								} while (lx < s.last_lit);
							}
							send_code(s, END_BLOCK, ltree);
						}

						function build_tree(s, desc) {
							var tree = desc.dyn_tree;
							var stree = desc.stat_desc.static_tree;
							var has_stree = desc.stat_desc.has_stree;
							var elems = desc.stat_desc.elems;
							var n, m;
							var max_code = -1;
							var node;
							s.heap_len = 0;
							s.heap_max = HEAP_SIZE;
							for(n = 0; n < elems; n++) {
								if(tree[n * 2] !== 0) {
									s.heap[++s.heap_len] = max_code = n;
									s.depth[n] = 0;
								} else {
									tree[n * 2 + 1] = 0;
								}
							}
							while(s.heap_len < 2) {
								node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
								tree[node * 2] = 1;
								s.depth[node] = 0;
								s.opt_len--;
								if(has_stree) {
									s.static_len -= stree[node * 2 + 1];
								}
							}
							desc.max_code = max_code;
							for(n = (s.heap_len >> 1); n >= 1; n--) {
								pqdownheap(s, tree, n);
							}
							node = elems;
							do {
								n = s.heap[1];
								s.heap[1] = s.heap[s.heap_len--];
								pqdownheap(s, tree, 1);
								m = s.heap[1];
								s.heap[--s.heap_max] = n;
								s.heap[--s.heap_max] = m;
								tree[node * 2] = tree[n * 2] + tree[m * 2];
								s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
								tree[n * 2 + 1] = tree[m * 2 + 1] = node;
								s.heap[1] = node++;
								pqdownheap(s, tree, 1);
							} while (s.heap_len >= 2);
							s.heap[--s.heap_max] = s.heap[1];
							gen_bitlen(s, desc);
							gen_codes(tree, max_code, s.bl_count);
						}

						function scan_tree(s, tree, max_code) {
							var n;
							var prevlen = -1;
							var curlen;
							var nextlen = tree[0 * 2 + 1];
							var count = 0;
							var max_count = 7;
							var min_count = 4;
							if(nextlen === 0) {
								max_count = 138;
								min_count = 3;
							}
							tree[(max_code + 1) * 2 + 1] = 0xffff;
							for(n = 0; n <= max_code; n++) {
								curlen = nextlen;
								nextlen = tree[(n + 1) * 2 + 1];
								if(++count < max_count && curlen === nextlen) {
									continue;
								} else if(count < min_count) {
									s.bl_tree[curlen * 2] += count;
								} else if(curlen !== 0) {
									if(curlen !== prevlen) {
										s.bl_tree[curlen * 2]++;
									}
									s.bl_tree[REP_3_6 * 2]++;
								} else if(count <= 10) {
									s.bl_tree[REPZ_3_10 * 2]++;
								} else {
									s.bl_tree[REPZ_11_138 * 2]++;
								}
								count = 0;
								prevlen = curlen;
								if(nextlen === 0) {
									max_count = 138;
									min_count = 3;
								} else if(curlen === nextlen) {
									max_count = 6;
									min_count = 3;
								} else {
									max_count = 7;
									min_count = 4;
								}
							}
						}

						function send_tree(s, tree, max_code) {
							var n;
							var prevlen = -1;
							var curlen;
							var nextlen = tree[0 * 2 + 1];
							var count = 0;
							var max_count = 7;
							var min_count = 4;
							if(nextlen === 0) {
								max_count = 138;
								min_count = 3;
							}
							for(n = 0; n <= max_code; n++) {
								curlen = nextlen;
								nextlen = tree[(n + 1) * 2 + 1];
								if(++count < max_count && curlen === nextlen) {
									continue;
								} else if(count < min_count) {
									do {
										send_code(s, curlen, s.bl_tree);
									} while (--count !== 0);
								} else if(curlen !== 0) {
									if(curlen !== prevlen) {
										send_code(s, curlen, s.bl_tree);
										count--;
									}
									send_code(s, REP_3_6, s.bl_tree);
									send_bits(s, count - 3, 2);
								} else if(count <= 10) {
									send_code(s, REPZ_3_10, s.bl_tree);
									send_bits(s, count - 3, 3);
								} else {
									send_code(s, REPZ_11_138, s.bl_tree);
									send_bits(s, count - 11, 7);
								}
								count = 0;
								prevlen = curlen;
								if(nextlen === 0) {
									max_count = 138;
									min_count = 3;
								} else if(curlen === nextlen) {
									max_count = 6;
									min_count = 3;
								} else {
									max_count = 7;
									min_count = 4;
								}
							}
						}

						function build_bl_tree(s) {
							var max_blindex;
							scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
							scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
							build_tree(s, s.bl_desc);
							for(max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
								if(s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
									break;
								}
							}
							s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
							return max_blindex;
						}

						function send_all_trees(s, lcodes, dcodes, blcodes) {
							var rank;
							send_bits(s, lcodes - 257, 5);
							send_bits(s, dcodes - 1, 5);
							send_bits(s, blcodes - 4, 4);
							for(rank = 0; rank < blcodes; rank++) {
								send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
							}
							send_tree(s, s.dyn_ltree, lcodes - 1);
							send_tree(s, s.dyn_dtree, dcodes - 1);
						}

						function detect_data_type(s) {
							var black_mask = 0xf3ffc07f;
							var n;
							for(n = 0; n <= 31; n++, black_mask >>>= 1) {
								if((black_mask & 1) && (s.dyn_ltree[n * 2] !== 0)) {
									return Z_BINARY;
								}
							}
							if(s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
								return Z_TEXT;
							}
							for(n = 32; n < LITERALS; n++) {
								if(s.dyn_ltree[n * 2] !== 0) {
									return Z_TEXT;
								}
							}
							return Z_BINARY;
						}
						var static_init_done = false;

						function _tr_init(s) {
							if(!static_init_done) {
								tr_static_init();
								static_init_done = true;
							}
							s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
							s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
							s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
							s.bi_buf = 0;
							s.bi_valid = 0;
							init_block(s);
						}

						function _tr_stored_block(s, buf, stored_len, last) {
							send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
							copy_block(s, buf, stored_len, true);
						}

						function _tr_align(s) {
							send_bits(s, STATIC_TREES << 1, 3);
							send_code(s, END_BLOCK, static_ltree);
							bi_flush(s);
						}

						function _tr_flush_block(s, buf, stored_len, last) {
							var opt_lenb, static_lenb;
							var max_blindex = 0;
							if(s.level > 0) {
								if(s.strm.data_type === Z_UNKNOWN) {
									s.strm.data_type = detect_data_type(s);
								}
								build_tree(s, s.l_desc);
								build_tree(s, s.d_desc);
								max_blindex = build_bl_tree(s);
								opt_lenb = (s.opt_len + 3 + 7) >>> 3;
								static_lenb = (s.static_len + 3 + 7) >>> 3;
								if(static_lenb <= opt_lenb) {
									opt_lenb = static_lenb;
								}
							} else {
								opt_lenb = static_lenb = stored_len + 5;
							}
							if((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
								_tr_stored_block(s, buf, stored_len, last);
							} else if(s.strategy === Z_FIXED || static_lenb === opt_lenb) {
								send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
								compress_block(s, static_ltree, static_dtree);
							} else {
								send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
								send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
								compress_block(s, s.dyn_ltree, s.dyn_dtree);
							}
							init_block(s);
							if(last) {
								bi_windup(s);
							}
						}

						function _tr_tally(s, dist, lc) {
							s.pending_buf[s.d_buf + s.last_lit * 2] = (dist >>> 8) & 0xff;
							s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
							s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
							s.last_lit++;
							if(dist === 0) {
								s.dyn_ltree[lc * 2]++;
							} else {
								s.matches++;
								dist--;
								s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
								s.dyn_dtree[d_code(dist) * 2]++;
							}
							return(s.last_lit === s.lit_bufsize - 1);
						}
						exports._tr_init = _tr_init;
						exports._tr_stored_block = _tr_stored_block;
						exports._tr_flush_block = _tr_flush_block;
						exports._tr_tally = _tr_tally;
						exports._tr_align = _tr_align;
					}, {
						"../utils/common": 146
					}], 158: [function (require, module, exports) {
						'use strict';

						function ZStream() {
							this.input = null;
							this.next_in = 0;
							this.avail_in = 0;
							this.total_in = 0;
							this.output = null;
							this.next_out = 0;
							this.avail_out = 0;
							this.total_out = 0;
							this.msg = '';
							this.state = null;
							this.data_type = 2;
							this.adler = 0;
						}
						module.exports = ZStream;
					}, {}], 159: [function (require, module, exports) {
						var root;
						if(typeof window !== 'undefined') {
							root = window;
						} else if(typeof self !== 'undefined') {
							root = self;
						} else {
							console.warn("Using browser-only version of superagent in non-browser environment");
							root = this;
						}
						var Emitter = require('emitter');
						var RequestBase = require('./request-base');
						var isObject = require('./is-object');
						var isFunction = require('./is-function');
						var ResponseBase = require('./response-base');

						function noop() {};
						var request = exports = module.exports = function (method, url) {
							if('function' == typeof url) {
								return new exports.Request('GET', method).end(url);
							}
							if(1 == arguments.length) {
								return new exports.Request('GET', method);
							}
							return new exports.Request(method, url);
						}
						exports.Request = Request;
						request.getXHR = function () {
							if(root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
								return new XMLHttpRequest;
							} else {
								try {
									return new ActiveXObject('Microsoft.XMLHTTP');
								} catch(e) {}
								try {
									return new ActiveXObject('Msxml2.XMLHTTP.6.0');
								} catch(e) {}
								try {
									return new ActiveXObject('Msxml2.XMLHTTP.3.0');
								} catch(e) {}
								try {
									return new ActiveXObject('Msxml2.XMLHTTP');
								} catch(e) {}
							}
							throw Error("Browser-only verison of superagent could not find XHR");
						};
						var trim = ''.trim ? function (s) {
							return s.trim();
						} : function (s) {
							return s.replace(/(^\s*|\s*$)/g, '');
						};

						function serialize(obj) {
							if(!isObject(obj)) return obj;
							var pairs = [];
							for(var key in obj) {
								pushEncodedKeyValuePair(pairs, key, obj[key]);
							}
							return pairs.join('&');
						}

						function pushEncodedKeyValuePair(pairs, key, val) {
							if(val != null) {
								if(Array.isArray(val)) {
									val.forEach(function (v) {
										pushEncodedKeyValuePair(pairs, key, v);
									});
								} else if(isObject(val)) {
									for(var subkey in val) {
										pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
									}
								} else {
									pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
								}
							} else if(val === null) {
								pairs.push(encodeURIComponent(key));
							}
						}
						request.serializeObject = serialize;

						function parseString(str) {
							var obj = {};
							var pairs = str.split('&');
							var pair;
							var pos;
							for(var i = 0, len = pairs.length; i < len; ++i) {
								pair = pairs[i];
								pos = pair.indexOf('=');
								if(pos == -1) {
									obj[decodeURIComponent(pair)] = '';
								} else {
									obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
								}
							}
							return obj;
						}
						request.parseString = parseString;
						request.types = {
							html: 'text/html',
							json: 'application/json',
							xml: 'application/xml',
							urlencoded: 'application/x-www-form-urlencoded',
							'form': 'application/x-www-form-urlencoded',
							'form-data': 'application/x-www-form-urlencoded'
						};
						request.serialize = {
							'application/x-www-form-urlencoded': serialize,
							'application/json': JSON.stringify
						};
						request.parse = {
							'application/x-www-form-urlencoded': parseString,
							'application/json': JSON.parse
						};

						function parseHeader(str) {
							var lines = str.split(/\r?\n/);
							var fields = {};
							var index;
							var line;
							var field;
							var val;
							lines.pop();
							for(var i = 0, len = lines.length; i < len; ++i) {
								line = lines[i];
								index = line.indexOf(':');
								field = line.slice(0, index).toLowerCase();
								val = trim(line.slice(index + 1));
								fields[field] = val;
							}
							return fields;
						}

						function isJSON(mime) {
							return /[\/+]json\b/.test(mime);
						}

						function Response(req, options) {
							options = options || {};
							this.req = req;
							this.xhr = this.req.xhr;
							this.text = ((this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined') ? this.xhr.responseText : null;
							this.statusText = this.req.xhr.statusText;
							var status = this.xhr.status;
							if(status === 1223) {
								status = 204;
							}
							this._setStatusProperties(status);
							this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
							this.header['content-type'] = this.xhr.getResponseHeader('content-type');
							this._setHeaderProperties(this.header);
							if(null === this.text && req._responseType) {
								this.body = this.xhr.response;
							} else {
								this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
							}
						}
						ResponseBase(Response.prototype);
						Response.prototype._parseBody = function (str) {
							var parse = request.parse[this.type];
							if(this.req._parser) {
								return this.req._parser(this, str);
							}
							if(!parse && isJSON(this.type)) {
								parse = request.parse['application/json'];
							}
							return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
						};
						Response.prototype.toError = function () {
							var req = this.req;
							var method = req.method;
							var url = req.url;
							var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
							var err = new Error(msg);
							err.status = this.status;
							err.method = method;
							err.url = url;
							return err;
						};
						request.Response = Response;

						function Request(method, url) {
							var self = this;
							this._query = this._query || [];
							this.method = method;
							this.url = url;
							this.header = {};
							this._header = {};
							this.on('end', function () {
								var err = null;
								var res = null;
								try {
									res = new Response(self);
								} catch(e) {
									err = new Error('Parser is unable to parse the response');
									err.parse = true;
									err.original = e;
									if(self.xhr) {
										err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
										err.status = self.xhr.status ? self.xhr.status : null;
										err.statusCode = err.status;
									} else {
										err.rawResponse = null;
										err.status = null;
									}
									return self.callback(err);
								}
								self.emit('response', res);
								var new_err;
								try {
									if(!self._isResponseOK(res)) {
										new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
										new_err.original = err;
										new_err.response = res;
										new_err.status = res.status;
									}
								} catch(e) {
									new_err = e;
								}
								if(new_err) {
									self.callback(new_err, res);
								} else {
									self.callback(null, res);
								}
							});
						}
						Emitter(Request.prototype);
						RequestBase(Request.prototype);
						Request.prototype.type = function (type) {
							this.set('Content-Type', request.types[type] || type);
							return this;
						};
						Request.prototype.accept = function (type) {
							this.set('Accept', request.types[type] || type);
							return this;
						};
						Request.prototype.auth = function (user, pass, options) {
							if(!options) {
								options = {
									type: 'function' === typeof btoa ? 'basic' : 'auto',
								}
							}
							switch(options.type) {
							case 'basic':
								this.set('Authorization', 'Basic ' + btoa(user + ':' + pass));
								break;
							case 'auto':
								this.username = user;
								this.password = pass;
								break;
							}
							return this;
						};
						Request.prototype.query = function (val) {
							if('string' != typeof val) val = serialize(val);
							if(val) this._query.push(val);
							return this;
						};
						Request.prototype.attach = function (field, file, options) {
							if(this._data) {
								throw Error("superagent can't mix .send() and .attach()");
							}
							this._getFormData().append(field, file, options || file.name);
							return this;
						};
						Request.prototype._getFormData = function () {
							if(!this._formData) {
								this._formData = new root.FormData();
							}
							return this._formData;
						};
						Request.prototype.callback = function (err, res) {
							var fn = this._callback;
							this.clearTimeout();
							if(err) {
								this.emit('error', err);
							}
							fn(err, res);
						};
						Request.prototype.crossDomainError = function () {
							var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
							err.crossDomain = true;
							err.status = this.status;
							err.method = this.method;
							err.url = this.url;
							this.callback(err);
						};
						Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
							console.warn("This is not supported in browser version of superagent");
							return this;
						};
						Request.prototype.pipe = Request.prototype.write = function () {
							throw Error("Streaming is not supported in browser version of superagent");
						};
						Request.prototype._appendQueryString = function () {
							var query = this._query.join('&');
							if(query) {
								this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
							}
							if(this._sort) {
								var index = this.url.indexOf('?');
								if(index >= 0) {
									var queryArr = this.url.substring(index + 1).split('&');
									if(isFunction(this._sort)) {
										queryArr.sort(this._sort);
									} else {
										queryArr.sort();
									}
									this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
								}
							}
						};
						Request.prototype._isHost = function _isHost(obj) {
							return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
						}
						Request.prototype.end = function (fn) {
							var self = this;
							var xhr = this.xhr = request.getXHR();
							var data = this._formData || this._data;
							if(this._endCalled) {
								console.warn("Warning: .end() was called twice. This is not supported in superagent");
							}
							this._endCalled = true;
							this._callback = fn || noop;
							xhr.onreadystatechange = function () {
								var readyState = xhr.readyState;
								if(readyState >= 2 && self._responseTimeoutTimer) {
									clearTimeout(self._responseTimeoutTimer);
								}
								if(4 != readyState) {
									return;
								}
								var status;
								try {
									status = xhr.status
								} catch(e) {
									status = 0;
								}
								if(!status) {
									if(self.timedout || self._aborted) return;
									return self.crossDomainError();
								}
								self.emit('end');
							};
							var handleProgress = function (direction, e) {
								if(e.total > 0) {
									e.percent = e.loaded / e.total * 100;
								}
								e.direction = direction;
								self.emit('progress', e);
							}
							if(this.hasListeners('progress')) {
								try {
									xhr.onprogress = handleProgress.bind(null, 'download');
									if(xhr.upload) {
										xhr.upload.onprogress = handleProgress.bind(null, 'upload');
									}
								} catch(e) {}
							}
							this._appendQueryString();
							this._setTimeouts();
							try {
								if(this.username && this.password) {
									xhr.open(this.method, this.url, true, this.username, this.password);
								} else {
									xhr.open(this.method, this.url, true);
								}
							} catch(err) {
								return this.callback(err);
							}
							if(this._withCredentials) xhr.withCredentials = true;
							if(!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
								var contentType = this._header['content-type'];
								var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
								if(!serialize && isJSON(contentType)) {
									serialize = request.serialize['application/json'];
								}
								if(serialize) data = serialize(data);
							}
							for(var field in this.header) {
								if(null == this.header[field]) continue;
								xhr.setRequestHeader(field, this.header[field]);
							}
							if(this._responseType) {
								xhr.responseType = this._responseType;
							}
							this.emit('request', this);
							xhr.send(typeof data !== 'undefined' ? data : null);
							return this;
						};
						request.get = function (url, data, fn) {
							var req = request('GET', url);
							if('function' == typeof data) fn = data, data = null;
							if(data) req.query(data);
							if(fn) req.end(fn);
							return req;
						};
						request.head = function (url, data, fn) {
							var req = request('HEAD', url);
							if('function' == typeof data) fn = data, data = null;
							if(data) req.send(data);
							if(fn) req.end(fn);
							return req;
						};
						request.options = function (url, data, fn) {
							var req = request('OPTIONS', url);
							if('function' == typeof data) fn = data, data = null;
							if(data) req.send(data);
							if(fn) req.end(fn);
							return req;
						};

						function del(url, fn) {
							var req = request('DELETE', url);
							if(fn) req.end(fn);
							return req;
						};
						request['del'] = del;
						request['delete'] = del;
						request.patch = function (url, data, fn) {
							var req = request('PATCH', url);
							if('function' == typeof data) fn = data, data = null;
							if(data) req.send(data);
							if(fn) req.end(fn);
							return req;
						};
						request.post = function (url, data, fn) {
							var req = request('POST', url);
							if('function' == typeof data) fn = data, data = null;
							if(data) req.send(data);
							if(fn) req.end(fn);
							return req;
						};
						request.put = function (url, data, fn) {
							var req = request('PUT', url);
							if('function' == typeof data) fn = data, data = null;
							if(data) req.send(data);
							if(fn) req.end(fn);
							return req;
						};
					}, {
						"./is-function": 160,
						"./is-object": 161,
						"./request-base": 162,
						"./response-base": 163,
						"emitter": 1
					}], 160: [function (require, module, exports) {
						var isObject = require('./is-object');

						function isFunction(fn) {
							var tag = isObject(fn) ? Object.prototype.toString.call(fn) : '';
							return tag === '[object Function]';
						}
						module.exports = isFunction;
					}, {
						"./is-object": 161
					}], 161: [function (require, module, exports) {
						function isObject(obj) {
							return null !== obj && 'object' === typeof obj;
						}
						module.exports = isObject;
					}, {}], 162: [function (require, module, exports) {
						var isObject = require('./is-object');
						module.exports = RequestBase;

						function RequestBase(obj) {
							if(obj) return mixin(obj);
						}

						function mixin(obj) {
							for(var key in RequestBase.prototype) {
								obj[key] = RequestBase.prototype[key];
							}
							return obj;
						}
						RequestBase.prototype.clearTimeout = function _clearTimeout() {
							this._timeout = 0;
							this._responseTimeout = 0;
							clearTimeout(this._timer);
							clearTimeout(this._responseTimeoutTimer);
							return this;
						};
						RequestBase.prototype.parse = function parse(fn) {
							this._parser = fn;
							return this;
						};
						RequestBase.prototype.responseType = function (val) {
							this._responseType = val;
							return this;
						};
						RequestBase.prototype.serialize = function serialize(fn) {
							this._serializer = fn;
							return this;
						};
						RequestBase.prototype.timeout = function timeout(options) {
							if(!options || 'object' !== typeof options) {
								this._timeout = options;
								this._responseTimeout = 0;
								return this;
							}
							if('undefined' !== typeof options.deadline) {
								this._timeout = options.deadline;
							}
							if('undefined' !== typeof options.response) {
								this._responseTimeout = options.response;
							}
							return this;
						};
						RequestBase.prototype.then = function then(resolve, reject) {
							if(!this._fullfilledPromise) {
								var self = this;
								if(this._endCalled) {
									console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
								}
								this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
									self.end(function (err, res) {
										if(err) innerReject(err);
										else innerResolve(res);
									});
								});
							}
							return this._fullfilledPromise.then(resolve, reject);
						}
						RequestBase.prototype.catch = function (cb) {
							return this.then(undefined, cb);
						};
						RequestBase.prototype.use = function use(fn) {
							fn(this);
							return this;
						}
						RequestBase.prototype.ok = function (cb) {
							if('function' !== typeof cb) throw Error("Callback required");
							this._okCallback = cb;
							return this;
						};
						RequestBase.prototype._isResponseOK = function (res) {
							if(!res) {
								return false;
							}
							if(this._okCallback) {
								return this._okCallback(res);
							}
							return res.status >= 200 && res.status < 300;
						};
						RequestBase.prototype.get = function (field) {
							return this._header[field.toLowerCase()];
						};
						RequestBase.prototype.getHeader = RequestBase.prototype.get;
						RequestBase.prototype.set = function (field, val) {
							if(isObject(field)) {
								for(var key in field) {
									this.set(key, field[key]);
								}
								return this;
							}
							this._header[field.toLowerCase()] = val;
							this.header[field] = val;
							return this;
						};
						RequestBase.prototype.unset = function (field) {
							delete this._header[field.toLowerCase()];
							delete this.header[field];
							return this;
						};
						RequestBase.prototype.field = function (name, val) {
							if(null === name || undefined === name) {
								throw new Error('.field(name, val) name can not be empty');
							}
							if(this._data) {
								console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
							}
							if(isObject(name)) {
								for(var key in name) {
									this.field(key, name[key]);
								}
								return this;
							}
							if(Array.isArray(val)) {
								for(var i in val) {
									this.field(name, val[i]);
								}
								return this;
							}
							if(null === val || undefined === val) {
								throw new Error('.field(name, val) val can not be empty');
							}
							if('boolean' === typeof val) {
								val = '' + val;
							}
							this._getFormData().append(name, val);
							return this;
						};
						RequestBase.prototype.abort = function () {
							if(this._aborted) {
								return this;
							}
							this._aborted = true;
							this.xhr && this.xhr.abort();
							this.req && this.req.abort();
							this.clearTimeout();
							this.emit('abort');
							return this;
						};
						RequestBase.prototype.withCredentials = function () {
							this._withCredentials = true;
							return this;
						};
						RequestBase.prototype.redirects = function (n) {
							this._maxRedirects = n;
							return this;
						};
						RequestBase.prototype.toJSON = function () {
							return {
								method: this.method,
								url: this.url,
								data: this._data,
								headers: this._header
							};
						};
						RequestBase.prototype.send = function (data) {
							var isObj = isObject(data);
							var type = this._header['content-type'];
							if(this._formData) {
								console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
							}
							if(isObj && !this._data) {
								if(Array.isArray(data)) {
									this._data = [];
								} else if(!this._isHost(data)) {
									this._data = {};
								}
							} else if(data && this._data && this._isHost(this._data)) {
								throw Error("Can't merge these send calls");
							}
							if(isObj && isObject(this._data)) {
								for(var key in data) {
									this._data[key] = data[key];
								}
							} else if('string' == typeof data) {
								if(!type) this.type('form');
								type = this._header['content-type'];
								if('application/x-www-form-urlencoded' == type) {
									this._data = this._data ? this._data + '&' + data : data;
								} else {
									this._data = (this._data || '') + data;
								}
							} else {
								this._data = data;
							}
							if(!isObj || this._isHost(data)) {
								return this;
							}
							if(!type) this.type('json');
							return this;
						};
						RequestBase.prototype.sortQuery = function (sort) {
							this._sort = typeof sort === 'undefined' ? true : sort;
							return this;
						};
						RequestBase.prototype._timeoutError = function (reason, timeout) {
							if(this._aborted) {
								return;
							}
							var err = new Error(reason + timeout + 'ms exceeded');
							err.timeout = timeout;
							err.code = 'ECONNABORTED';
							this.timedout = true;
							this.abort();
							this.callback(err);
						};
						RequestBase.prototype._setTimeouts = function () {
							var self = this;
							if(this._timeout && !this._timer) {
								this._timer = setTimeout(function () {
									self._timeoutError('Timeout of ', self._timeout);
								}, this._timeout);
							}
							if(this._responseTimeout && !this._responseTimeoutTimer) {
								this._responseTimeoutTimer = setTimeout(function () {
									self._timeoutError('Response timeout of ', self._responseTimeout);
								}, this._responseTimeout);
							}
						}
					}, {
						"./is-object": 161
					}], 163: [function (require, module, exports) {
						var utils = require('./utils');
						module.exports = ResponseBase;

						function ResponseBase(obj) {
							if(obj) return mixin(obj);
						}

						function mixin(obj) {
							for(var key in ResponseBase.prototype) {
								obj[key] = ResponseBase.prototype[key];
							}
							return obj;
						}
						ResponseBase.prototype.get = function (field) {
							return this.header[field.toLowerCase()];
						};
						ResponseBase.prototype._setHeaderProperties = function (header) {
							var ct = header['content-type'] || '';
							this.type = utils.type(ct);
							var params = utils.params(ct);
							for(var key in params) this[key] = params[key];
							this.links = {};
							try {
								if(header.link) {
									this.links = utils.parseLinks(header.link);
								}
							} catch(err) {}
						};
						ResponseBase.prototype._setStatusProperties = function (status) {
							var type = status / 100 | 0;
							this.status = this.statusCode = status;
							this.statusType = type;
							this.info = 1 == type;
							this.ok = 2 == type;
							this.redirect = 3 == type;
							this.clientError = 4 == type;
							this.serverError = 5 == type;
							this.error = (4 == type || 5 == type) ? this.toError() : false;
							this.accepted = 202 == status;
							this.noContent = 204 == status;
							this.badRequest = 400 == status;
							this.unauthorized = 401 == status;
							this.notAcceptable = 406 == status;
							this.forbidden = 403 == status;
							this.notFound = 404 == status;
						};
					}, {
						"./utils": 164
					}], 164: [function (require, module, exports) {
						exports.type = function (str) {
							return str.split(/ *; */).shift();
						};
						exports.params = function (str) {
							return str.split(/ *; */).reduce(function (obj, str) {
								var parts = str.split(/ *= */);
								var key = parts.shift();
								var val = parts.shift();
								if(key && val) obj[key] = val;
								return obj;
							}, {});
						};
						exports.parseLinks = function (str) {
							return str.split(/ *, */).reduce(function (obj, str) {
								var parts = str.split(/ *; */);
								var url = parts[0].slice(1, -1);
								var rel = parts[1].split(/ *= */)[1].slice(1, -1);
								obj[rel] = url;
								return obj;
							}, {});
						};
						exports.cleanHeader = function (header, shouldStripCookie) {
							delete header['content-type'];
							delete header['content-length'];
							delete header['transfer-encoding'];
							delete header['host'];
							if(shouldStripCookie) {
								delete header['cookie'];
							}
							return header;
						};
					}, {}], 165: [function (require, module, exports) {
						(function (nacl) {
							'use strict';
							var gf = function (init) {
								var i, r = new Float64Array(16);
								if(init)
									for(i = 0; i < init.length; i++) r[i] = init[i];
								return r;
							};
							var randombytes = function () {
								throw new Error('no PRNG');
							};
							var _0 = new Uint8Array(16);
							var _9 = new Uint8Array(32);
							_9[0] = 9;
							var gf0 = gf(),
								gf1 = gf([1]),
								_121665 = gf([0xdb41, 1]),
								D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
								D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
								X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
								Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
								I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

							function ts64(x, i, h, l) {
								x[i] = (h >> 24) & 0xff;
								x[i + 1] = (h >> 16) & 0xff;
								x[i + 2] = (h >> 8) & 0xff;
								x[i + 3] = h & 0xff;
								x[i + 4] = (l >> 24) & 0xff;
								x[i + 5] = (l >> 16) & 0xff;
								x[i + 6] = (l >> 8) & 0xff;
								x[i + 7] = l & 0xff;
							}

							function vn(x, xi, y, yi, n) {
								var i, d = 0;
								for(i = 0; i < n; i++) d |= x[xi + i] ^ y[yi + i];
								return(1 & ((d - 1) >>> 8)) - 1;
							}

							function crypto_verify_16(x, xi, y, yi) {
								return vn(x, xi, y, yi, 16);
							}

							function crypto_verify_32(x, xi, y, yi) {
								return vn(x, xi, y, yi, 32);
							}

							function core_salsa20(o, p, k, c) {
								var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
									j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
									j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
									j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
									j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
									j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
									j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
									j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
									j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
									j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
									j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
									j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
									j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
									j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
									j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
									j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
								var x0 = j0,
									x1 = j1,
									x2 = j2,
									x3 = j3,
									x4 = j4,
									x5 = j5,
									x6 = j6,
									x7 = j7,
									x8 = j8,
									x9 = j9,
									x10 = j10,
									x11 = j11,
									x12 = j12,
									x13 = j13,
									x14 = j14,
									x15 = j15,
									u;
								for(var i = 0; i < 20; i += 2) {
									u = x0 + x12 | 0;
									x4 ^= u << 7 | u >>> (32 - 7);
									u = x4 + x0 | 0;
									x8 ^= u << 9 | u >>> (32 - 9);
									u = x8 + x4 | 0;
									x12 ^= u << 13 | u >>> (32 - 13);
									u = x12 + x8 | 0;
									x0 ^= u << 18 | u >>> (32 - 18);
									u = x5 + x1 | 0;
									x9 ^= u << 7 | u >>> (32 - 7);
									u = x9 + x5 | 0;
									x13 ^= u << 9 | u >>> (32 - 9);
									u = x13 + x9 | 0;
									x1 ^= u << 13 | u >>> (32 - 13);
									u = x1 + x13 | 0;
									x5 ^= u << 18 | u >>> (32 - 18);
									u = x10 + x6 | 0;
									x14 ^= u << 7 | u >>> (32 - 7);
									u = x14 + x10 | 0;
									x2 ^= u << 9 | u >>> (32 - 9);
									u = x2 + x14 | 0;
									x6 ^= u << 13 | u >>> (32 - 13);
									u = x6 + x2 | 0;
									x10 ^= u << 18 | u >>> (32 - 18);
									u = x15 + x11 | 0;
									x3 ^= u << 7 | u >>> (32 - 7);
									u = x3 + x15 | 0;
									x7 ^= u << 9 | u >>> (32 - 9);
									u = x7 + x3 | 0;
									x11 ^= u << 13 | u >>> (32 - 13);
									u = x11 + x7 | 0;
									x15 ^= u << 18 | u >>> (32 - 18);
									u = x0 + x3 | 0;
									x1 ^= u << 7 | u >>> (32 - 7);
									u = x1 + x0 | 0;
									x2 ^= u << 9 | u >>> (32 - 9);
									u = x2 + x1 | 0;
									x3 ^= u << 13 | u >>> (32 - 13);
									u = x3 + x2 | 0;
									x0 ^= u << 18 | u >>> (32 - 18);
									u = x5 + x4 | 0;
									x6 ^= u << 7 | u >>> (32 - 7);
									u = x6 + x5 | 0;
									x7 ^= u << 9 | u >>> (32 - 9);
									u = x7 + x6 | 0;
									x4 ^= u << 13 | u >>> (32 - 13);
									u = x4 + x7 | 0;
									x5 ^= u << 18 | u >>> (32 - 18);
									u = x10 + x9 | 0;
									x11 ^= u << 7 | u >>> (32 - 7);
									u = x11 + x10 | 0;
									x8 ^= u << 9 | u >>> (32 - 9);
									u = x8 + x11 | 0;
									x9 ^= u << 13 | u >>> (32 - 13);
									u = x9 + x8 | 0;
									x10 ^= u << 18 | u >>> (32 - 18);
									u = x15 + x14 | 0;
									x12 ^= u << 7 | u >>> (32 - 7);
									u = x12 + x15 | 0;
									x13 ^= u << 9 | u >>> (32 - 9);
									u = x13 + x12 | 0;
									x14 ^= u << 13 | u >>> (32 - 13);
									u = x14 + x13 | 0;
									x15 ^= u << 18 | u >>> (32 - 18);
								}
								x0 = x0 + j0 | 0;
								x1 = x1 + j1 | 0;
								x2 = x2 + j2 | 0;
								x3 = x3 + j3 | 0;
								x4 = x4 + j4 | 0;
								x5 = x5 + j5 | 0;
								x6 = x6 + j6 | 0;
								x7 = x7 + j7 | 0;
								x8 = x8 + j8 | 0;
								x9 = x9 + j9 | 0;
								x10 = x10 + j10 | 0;
								x11 = x11 + j11 | 0;
								x12 = x12 + j12 | 0;
								x13 = x13 + j13 | 0;
								x14 = x14 + j14 | 0;
								x15 = x15 + j15 | 0;
								o[0] = x0 >>> 0 & 0xff;
								o[1] = x0 >>> 8 & 0xff;
								o[2] = x0 >>> 16 & 0xff;
								o[3] = x0 >>> 24 & 0xff;
								o[4] = x1 >>> 0 & 0xff;
								o[5] = x1 >>> 8 & 0xff;
								o[6] = x1 >>> 16 & 0xff;
								o[7] = x1 >>> 24 & 0xff;
								o[8] = x2 >>> 0 & 0xff;
								o[9] = x2 >>> 8 & 0xff;
								o[10] = x2 >>> 16 & 0xff;
								o[11] = x2 >>> 24 & 0xff;
								o[12] = x3 >>> 0 & 0xff;
								o[13] = x3 >>> 8 & 0xff;
								o[14] = x3 >>> 16 & 0xff;
								o[15] = x3 >>> 24 & 0xff;
								o[16] = x4 >>> 0 & 0xff;
								o[17] = x4 >>> 8 & 0xff;
								o[18] = x4 >>> 16 & 0xff;
								o[19] = x4 >>> 24 & 0xff;
								o[20] = x5 >>> 0 & 0xff;
								o[21] = x5 >>> 8 & 0xff;
								o[22] = x5 >>> 16 & 0xff;
								o[23] = x5 >>> 24 & 0xff;
								o[24] = x6 >>> 0 & 0xff;
								o[25] = x6 >>> 8 & 0xff;
								o[26] = x6 >>> 16 & 0xff;
								o[27] = x6 >>> 24 & 0xff;
								o[28] = x7 >>> 0 & 0xff;
								o[29] = x7 >>> 8 & 0xff;
								o[30] = x7 >>> 16 & 0xff;
								o[31] = x7 >>> 24 & 0xff;
								o[32] = x8 >>> 0 & 0xff;
								o[33] = x8 >>> 8 & 0xff;
								o[34] = x8 >>> 16 & 0xff;
								o[35] = x8 >>> 24 & 0xff;
								o[36] = x9 >>> 0 & 0xff;
								o[37] = x9 >>> 8 & 0xff;
								o[38] = x9 >>> 16 & 0xff;
								o[39] = x9 >>> 24 & 0xff;
								o[40] = x10 >>> 0 & 0xff;
								o[41] = x10 >>> 8 & 0xff;
								o[42] = x10 >>> 16 & 0xff;
								o[43] = x10 >>> 24 & 0xff;
								o[44] = x11 >>> 0 & 0xff;
								o[45] = x11 >>> 8 & 0xff;
								o[46] = x11 >>> 16 & 0xff;
								o[47] = x11 >>> 24 & 0xff;
								o[48] = x12 >>> 0 & 0xff;
								o[49] = x12 >>> 8 & 0xff;
								o[50] = x12 >>> 16 & 0xff;
								o[51] = x12 >>> 24 & 0xff;
								o[52] = x13 >>> 0 & 0xff;
								o[53] = x13 >>> 8 & 0xff;
								o[54] = x13 >>> 16 & 0xff;
								o[55] = x13 >>> 24 & 0xff;
								o[56] = x14 >>> 0 & 0xff;
								o[57] = x14 >>> 8 & 0xff;
								o[58] = x14 >>> 16 & 0xff;
								o[59] = x14 >>> 24 & 0xff;
								o[60] = x15 >>> 0 & 0xff;
								o[61] = x15 >>> 8 & 0xff;
								o[62] = x15 >>> 16 & 0xff;
								o[63] = x15 >>> 24 & 0xff;
							}

							function core_hsalsa20(o, p, k, c) {
								var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
									j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
									j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
									j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
									j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
									j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
									j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
									j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
									j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
									j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
									j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
									j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
									j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
									j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
									j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
									j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
								var x0 = j0,
									x1 = j1,
									x2 = j2,
									x3 = j3,
									x4 = j4,
									x5 = j5,
									x6 = j6,
									x7 = j7,
									x8 = j8,
									x9 = j9,
									x10 = j10,
									x11 = j11,
									x12 = j12,
									x13 = j13,
									x14 = j14,
									x15 = j15,
									u;
								for(var i = 0; i < 20; i += 2) {
									u = x0 + x12 | 0;
									x4 ^= u << 7 | u >>> (32 - 7);
									u = x4 + x0 | 0;
									x8 ^= u << 9 | u >>> (32 - 9);
									u = x8 + x4 | 0;
									x12 ^= u << 13 | u >>> (32 - 13);
									u = x12 + x8 | 0;
									x0 ^= u << 18 | u >>> (32 - 18);
									u = x5 + x1 | 0;
									x9 ^= u << 7 | u >>> (32 - 7);
									u = x9 + x5 | 0;
									x13 ^= u << 9 | u >>> (32 - 9);
									u = x13 + x9 | 0;
									x1 ^= u << 13 | u >>> (32 - 13);
									u = x1 + x13 | 0;
									x5 ^= u << 18 | u >>> (32 - 18);
									u = x10 + x6 | 0;
									x14 ^= u << 7 | u >>> (32 - 7);
									u = x14 + x10 | 0;
									x2 ^= u << 9 | u >>> (32 - 9);
									u = x2 + x14 | 0;
									x6 ^= u << 13 | u >>> (32 - 13);
									u = x6 + x2 | 0;
									x10 ^= u << 18 | u >>> (32 - 18);
									u = x15 + x11 | 0;
									x3 ^= u << 7 | u >>> (32 - 7);
									u = x3 + x15 | 0;
									x7 ^= u << 9 | u >>> (32 - 9);
									u = x7 + x3 | 0;
									x11 ^= u << 13 | u >>> (32 - 13);
									u = x11 + x7 | 0;
									x15 ^= u << 18 | u >>> (32 - 18);
									u = x0 + x3 | 0;
									x1 ^= u << 7 | u >>> (32 - 7);
									u = x1 + x0 | 0;
									x2 ^= u << 9 | u >>> (32 - 9);
									u = x2 + x1 | 0;
									x3 ^= u << 13 | u >>> (32 - 13);
									u = x3 + x2 | 0;
									x0 ^= u << 18 | u >>> (32 - 18);
									u = x5 + x4 | 0;
									x6 ^= u << 7 | u >>> (32 - 7);
									u = x6 + x5 | 0;
									x7 ^= u << 9 | u >>> (32 - 9);
									u = x7 + x6 | 0;
									x4 ^= u << 13 | u >>> (32 - 13);
									u = x4 + x7 | 0;
									x5 ^= u << 18 | u >>> (32 - 18);
									u = x10 + x9 | 0;
									x11 ^= u << 7 | u >>> (32 - 7);
									u = x11 + x10 | 0;
									x8 ^= u << 9 | u >>> (32 - 9);
									u = x8 + x11 | 0;
									x9 ^= u << 13 | u >>> (32 - 13);
									u = x9 + x8 | 0;
									x10 ^= u << 18 | u >>> (32 - 18);
									u = x15 + x14 | 0;
									x12 ^= u << 7 | u >>> (32 - 7);
									u = x12 + x15 | 0;
									x13 ^= u << 9 | u >>> (32 - 9);
									u = x13 + x12 | 0;
									x14 ^= u << 13 | u >>> (32 - 13);
									u = x14 + x13 | 0;
									x15 ^= u << 18 | u >>> (32 - 18);
								}
								o[0] = x0 >>> 0 & 0xff;
								o[1] = x0 >>> 8 & 0xff;
								o[2] = x0 >>> 16 & 0xff;
								o[3] = x0 >>> 24 & 0xff;
								o[4] = x5 >>> 0 & 0xff;
								o[5] = x5 >>> 8 & 0xff;
								o[6] = x5 >>> 16 & 0xff;
								o[7] = x5 >>> 24 & 0xff;
								o[8] = x10 >>> 0 & 0xff;
								o[9] = x10 >>> 8 & 0xff;
								o[10] = x10 >>> 16 & 0xff;
								o[11] = x10 >>> 24 & 0xff;
								o[12] = x15 >>> 0 & 0xff;
								o[13] = x15 >>> 8 & 0xff;
								o[14] = x15 >>> 16 & 0xff;
								o[15] = x15 >>> 24 & 0xff;
								o[16] = x6 >>> 0 & 0xff;
								o[17] = x6 >>> 8 & 0xff;
								o[18] = x6 >>> 16 & 0xff;
								o[19] = x6 >>> 24 & 0xff;
								o[20] = x7 >>> 0 & 0xff;
								o[21] = x7 >>> 8 & 0xff;
								o[22] = x7 >>> 16 & 0xff;
								o[23] = x7 >>> 24 & 0xff;
								o[24] = x8 >>> 0 & 0xff;
								o[25] = x8 >>> 8 & 0xff;
								o[26] = x8 >>> 16 & 0xff;
								o[27] = x8 >>> 24 & 0xff;
								o[28] = x9 >>> 0 & 0xff;
								o[29] = x9 >>> 8 & 0xff;
								o[30] = x9 >>> 16 & 0xff;
								o[31] = x9 >>> 24 & 0xff;
							}

							function crypto_core_salsa20(out, inp, k, c) {
								core_salsa20(out, inp, k, c);
							}

							function crypto_core_hsalsa20(out, inp, k, c) {
								core_hsalsa20(out, inp, k, c);
							}
							var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

							function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
								var z = new Uint8Array(16),
									x = new Uint8Array(64);
								var u, i;
								for(i = 0; i < 16; i++) z[i] = 0;
								for(i = 0; i < 8; i++) z[i] = n[i];
								while(b >= 64) {
									crypto_core_salsa20(x, z, k, sigma);
									for(i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
									u = 1;
									for(i = 8; i < 16; i++) {
										u = u + (z[i] & 0xff) | 0;
										z[i] = u & 0xff;
										u >>>= 8;
									}
									b -= 64;
									cpos += 64;
									mpos += 64;
								}
								if(b > 0) {
									crypto_core_salsa20(x, z, k, sigma);
									for(i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
								}
								return 0;
							}

							function crypto_stream_salsa20(c, cpos, b, n, k) {
								var z = new Uint8Array(16),
									x = new Uint8Array(64);
								var u, i;
								for(i = 0; i < 16; i++) z[i] = 0;
								for(i = 0; i < 8; i++) z[i] = n[i];
								while(b >= 64) {
									crypto_core_salsa20(x, z, k, sigma);
									for(i = 0; i < 64; i++) c[cpos + i] = x[i];
									u = 1;
									for(i = 8; i < 16; i++) {
										u = u + (z[i] & 0xff) | 0;
										z[i] = u & 0xff;
										u >>>= 8;
									}
									b -= 64;
									cpos += 64;
								}
								if(b > 0) {
									crypto_core_salsa20(x, z, k, sigma);
									for(i = 0; i < b; i++) c[cpos + i] = x[i];
								}
								return 0;
							}

							function crypto_stream(c, cpos, d, n, k) {
								var s = new Uint8Array(32);
								crypto_core_hsalsa20(s, n, k, sigma);
								var sn = new Uint8Array(8);
								for(var i = 0; i < 8; i++) sn[i] = n[i + 16];
								return crypto_stream_salsa20(c, cpos, d, sn, s);
							}

							function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
								var s = new Uint8Array(32);
								crypto_core_hsalsa20(s, n, k, sigma);
								var sn = new Uint8Array(8);
								for(var i = 0; i < 8; i++) sn[i] = n[i + 16];
								return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
							}
							var poly1305 = function (key) {
								this.buffer = new Uint8Array(16);
								this.r = new Uint16Array(10);
								this.h = new Uint16Array(10);
								this.pad = new Uint16Array(8);
								this.leftover = 0;
								this.fin = 0;
								var t0, t1, t2, t3, t4, t5, t6, t7;
								t0 = key[0] & 0xff | (key[1] & 0xff) << 8;
								this.r[0] = (t0) & 0x1fff;
								t1 = key[2] & 0xff | (key[3] & 0xff) << 8;
								this.r[1] = ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
								t2 = key[4] & 0xff | (key[5] & 0xff) << 8;
								this.r[2] = ((t1 >>> 10) | (t2 << 6)) & 0x1f03;
								t3 = key[6] & 0xff | (key[7] & 0xff) << 8;
								this.r[3] = ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
								t4 = key[8] & 0xff | (key[9] & 0xff) << 8;
								this.r[4] = ((t3 >>> 4) | (t4 << 12)) & 0x00ff;
								this.r[5] = ((t4 >>> 1)) & 0x1ffe;
								t5 = key[10] & 0xff | (key[11] & 0xff) << 8;
								this.r[6] = ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
								t6 = key[12] & 0xff | (key[13] & 0xff) << 8;
								this.r[7] = ((t5 >>> 11) | (t6 << 5)) & 0x1f81;
								t7 = key[14] & 0xff | (key[15] & 0xff) << 8;
								this.r[8] = ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
								this.r[9] = ((t7 >>> 5)) & 0x007f;
								this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
								this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
								this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
								this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
								this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
								this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
								this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
								this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
							};
							poly1305.prototype.blocks = function (m, mpos, bytes) {
								var hibit = this.fin ? 0 : (1 << 11);
								var t0, t1, t2, t3, t4, t5, t6, t7, c;
								var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
								var h0 = this.h[0],
									h1 = this.h[1],
									h2 = this.h[2],
									h3 = this.h[3],
									h4 = this.h[4],
									h5 = this.h[5],
									h6 = this.h[6],
									h7 = this.h[7],
									h8 = this.h[8],
									h9 = this.h[9];
								var r0 = this.r[0],
									r1 = this.r[1],
									r2 = this.r[2],
									r3 = this.r[3],
									r4 = this.r[4],
									r5 = this.r[5],
									r6 = this.r[6],
									r7 = this.r[7],
									r8 = this.r[8],
									r9 = this.r[9];
								while(bytes >= 16) {
									t0 = m[mpos + 0] & 0xff | (m[mpos + 1] & 0xff) << 8;
									h0 += (t0) & 0x1fff;
									t1 = m[mpos + 2] & 0xff | (m[mpos + 3] & 0xff) << 8;
									h1 += ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
									t2 = m[mpos + 4] & 0xff | (m[mpos + 5] & 0xff) << 8;
									h2 += ((t1 >>> 10) | (t2 << 6)) & 0x1fff;
									t3 = m[mpos + 6] & 0xff | (m[mpos + 7] & 0xff) << 8;
									h3 += ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
									t4 = m[mpos + 8] & 0xff | (m[mpos + 9] & 0xff) << 8;
									h4 += ((t3 >>> 4) | (t4 << 12)) & 0x1fff;
									h5 += ((t4 >>> 1)) & 0x1fff;
									t5 = m[mpos + 10] & 0xff | (m[mpos + 11] & 0xff) << 8;
									h6 += ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
									t6 = m[mpos + 12] & 0xff | (m[mpos + 13] & 0xff) << 8;
									h7 += ((t5 >>> 11) | (t6 << 5)) & 0x1fff;
									t7 = m[mpos + 14] & 0xff | (m[mpos + 15] & 0xff) << 8;
									h8 += ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
									h9 += ((t7 >>> 5)) | hibit;
									c = 0;
									d0 = c;
									d0 += h0 * r0;
									d0 += h1 * (5 * r9);
									d0 += h2 * (5 * r8);
									d0 += h3 * (5 * r7);
									d0 += h4 * (5 * r6);
									c = (d0 >>> 13);
									d0 &= 0x1fff;
									d0 += h5 * (5 * r5);
									d0 += h6 * (5 * r4);
									d0 += h7 * (5 * r3);
									d0 += h8 * (5 * r2);
									d0 += h9 * (5 * r1);
									c += (d0 >>> 13);
									d0 &= 0x1fff;
									d1 = c;
									d1 += h0 * r1;
									d1 += h1 * r0;
									d1 += h2 * (5 * r9);
									d1 += h3 * (5 * r8);
									d1 += h4 * (5 * r7);
									c = (d1 >>> 13);
									d1 &= 0x1fff;
									d1 += h5 * (5 * r6);
									d1 += h6 * (5 * r5);
									d1 += h7 * (5 * r4);
									d1 += h8 * (5 * r3);
									d1 += h9 * (5 * r2);
									c += (d1 >>> 13);
									d1 &= 0x1fff;
									d2 = c;
									d2 += h0 * r2;
									d2 += h1 * r1;
									d2 += h2 * r0;
									d2 += h3 * (5 * r9);
									d2 += h4 * (5 * r8);
									c = (d2 >>> 13);
									d2 &= 0x1fff;
									d2 += h5 * (5 * r7);
									d2 += h6 * (5 * r6);
									d2 += h7 * (5 * r5);
									d2 += h8 * (5 * r4);
									d2 += h9 * (5 * r3);
									c += (d2 >>> 13);
									d2 &= 0x1fff;
									d3 = c;
									d3 += h0 * r3;
									d3 += h1 * r2;
									d3 += h2 * r1;
									d3 += h3 * r0;
									d3 += h4 * (5 * r9);
									c = (d3 >>> 13);
									d3 &= 0x1fff;
									d3 += h5 * (5 * r8);
									d3 += h6 * (5 * r7);
									d3 += h7 * (5 * r6);
									d3 += h8 * (5 * r5);
									d3 += h9 * (5 * r4);
									c += (d3 >>> 13);
									d3 &= 0x1fff;
									d4 = c;
									d4 += h0 * r4;
									d4 += h1 * r3;
									d4 += h2 * r2;
									d4 += h3 * r1;
									d4 += h4 * r0;
									c = (d4 >>> 13);
									d4 &= 0x1fff;
									d4 += h5 * (5 * r9);
									d4 += h6 * (5 * r8);
									d4 += h7 * (5 * r7);
									d4 += h8 * (5 * r6);
									d4 += h9 * (5 * r5);
									c += (d4 >>> 13);
									d4 &= 0x1fff;
									d5 = c;
									d5 += h0 * r5;
									d5 += h1 * r4;
									d5 += h2 * r3;
									d5 += h3 * r2;
									d5 += h4 * r1;
									c = (d5 >>> 13);
									d5 &= 0x1fff;
									d5 += h5 * r0;
									d5 += h6 * (5 * r9);
									d5 += h7 * (5 * r8);
									d5 += h8 * (5 * r7);
									d5 += h9 * (5 * r6);
									c += (d5 >>> 13);
									d5 &= 0x1fff;
									d6 = c;
									d6 += h0 * r6;
									d6 += h1 * r5;
									d6 += h2 * r4;
									d6 += h3 * r3;
									d6 += h4 * r2;
									c = (d6 >>> 13);
									d6 &= 0x1fff;
									d6 += h5 * r1;
									d6 += h6 * r0;
									d6 += h7 * (5 * r9);
									d6 += h8 * (5 * r8);
									d6 += h9 * (5 * r7);
									c += (d6 >>> 13);
									d6 &= 0x1fff;
									d7 = c;
									d7 += h0 * r7;
									d7 += h1 * r6;
									d7 += h2 * r5;
									d7 += h3 * r4;
									d7 += h4 * r3;
									c = (d7 >>> 13);
									d7 &= 0x1fff;
									d7 += h5 * r2;
									d7 += h6 * r1;
									d7 += h7 * r0;
									d7 += h8 * (5 * r9);
									d7 += h9 * (5 * r8);
									c += (d7 >>> 13);
									d7 &= 0x1fff;
									d8 = c;
									d8 += h0 * r8;
									d8 += h1 * r7;
									d8 += h2 * r6;
									d8 += h3 * r5;
									d8 += h4 * r4;
									c = (d8 >>> 13);
									d8 &= 0x1fff;
									d8 += h5 * r3;
									d8 += h6 * r2;
									d8 += h7 * r1;
									d8 += h8 * r0;
									d8 += h9 * (5 * r9);
									c += (d8 >>> 13);
									d8 &= 0x1fff;
									d9 = c;
									d9 += h0 * r9;
									d9 += h1 * r8;
									d9 += h2 * r7;
									d9 += h3 * r6;
									d9 += h4 * r5;
									c = (d9 >>> 13);
									d9 &= 0x1fff;
									d9 += h5 * r4;
									d9 += h6 * r3;
									d9 += h7 * r2;
									d9 += h8 * r1;
									d9 += h9 * r0;
									c += (d9 >>> 13);
									d9 &= 0x1fff;
									c = (((c << 2) + c)) | 0;
									c = (c + d0) | 0;
									d0 = c & 0x1fff;
									c = (c >>> 13);
									d1 += c;
									h0 = d0;
									h1 = d1;
									h2 = d2;
									h3 = d3;
									h4 = d4;
									h5 = d5;
									h6 = d6;
									h7 = d7;
									h8 = d8;
									h9 = d9;
									mpos += 16;
									bytes -= 16;
								}
								this.h[0] = h0;
								this.h[1] = h1;
								this.h[2] = h2;
								this.h[3] = h3;
								this.h[4] = h4;
								this.h[5] = h5;
								this.h[6] = h6;
								this.h[7] = h7;
								this.h[8] = h8;
								this.h[9] = h9;
							};
							poly1305.prototype.finish = function (mac, macpos) {
								var g = new Uint16Array(10);
								var c, mask, f, i;
								if(this.leftover) {
									i = this.leftover;
									this.buffer[i++] = 1;
									for(; i < 16; i++) this.buffer[i] = 0;
									this.fin = 1;
									this.blocks(this.buffer, 0, 16);
								}
								c = this.h[1] >>> 13;
								this.h[1] &= 0x1fff;
								for(i = 2; i < 10; i++) {
									this.h[i] += c;
									c = this.h[i] >>> 13;
									this.h[i] &= 0x1fff;
								}
								this.h[0] += (c * 5);
								c = this.h[0] >>> 13;
								this.h[0] &= 0x1fff;
								this.h[1] += c;
								c = this.h[1] >>> 13;
								this.h[1] &= 0x1fff;
								this.h[2] += c;
								g[0] = this.h[0] + 5;
								c = g[0] >>> 13;
								g[0] &= 0x1fff;
								for(i = 1; i < 10; i++) {
									g[i] = this.h[i] + c;
									c = g[i] >>> 13;
									g[i] &= 0x1fff;
								}
								g[9] -= (1 << 13);
								mask = (c ^ 1) - 1;
								for(i = 0; i < 10; i++) g[i] &= mask;
								mask = ~mask;
								for(i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];
								this.h[0] = ((this.h[0]) | (this.h[1] << 13)) & 0xffff;
								this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 0xffff;
								this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 0xffff;
								this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 0xffff;
								this.h[4] = ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) & 0xffff;
								this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 0xffff;
								this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 0xffff;
								this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 0xffff;
								f = this.h[0] + this.pad[0];
								this.h[0] = f & 0xffff;
								for(i = 1; i < 8; i++) {
									f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
									this.h[i] = f & 0xffff;
								}
								mac[macpos + 0] = (this.h[0] >>> 0) & 0xff;
								mac[macpos + 1] = (this.h[0] >>> 8) & 0xff;
								mac[macpos + 2] = (this.h[1] >>> 0) & 0xff;
								mac[macpos + 3] = (this.h[1] >>> 8) & 0xff;
								mac[macpos + 4] = (this.h[2] >>> 0) & 0xff;
								mac[macpos + 5] = (this.h[2] >>> 8) & 0xff;
								mac[macpos + 6] = (this.h[3] >>> 0) & 0xff;
								mac[macpos + 7] = (this.h[3] >>> 8) & 0xff;
								mac[macpos + 8] = (this.h[4] >>> 0) & 0xff;
								mac[macpos + 9] = (this.h[4] >>> 8) & 0xff;
								mac[macpos + 10] = (this.h[5] >>> 0) & 0xff;
								mac[macpos + 11] = (this.h[5] >>> 8) & 0xff;
								mac[macpos + 12] = (this.h[6] >>> 0) & 0xff;
								mac[macpos + 13] = (this.h[6] >>> 8) & 0xff;
								mac[macpos + 14] = (this.h[7] >>> 0) & 0xff;
								mac[macpos + 15] = (this.h[7] >>> 8) & 0xff;
							};
							poly1305.prototype.update = function (m, mpos, bytes) {
								var i, want;
								if(this.leftover) {
									want = (16 - this.leftover);
									if(want > bytes) want = bytes;
									for(i = 0; i < want; i++) this.buffer[this.leftover + i] = m[mpos + i];
									bytes -= want;
									mpos += want;
									this.leftover += want;
									if(this.leftover < 16) return;
									this.blocks(this.buffer, 0, 16);
									this.leftover = 0;
								}
								if(bytes >= 16) {
									want = bytes - (bytes % 16);
									this.blocks(m, mpos, want);
									mpos += want;
									bytes -= want;
								}
								if(bytes) {
									for(i = 0; i < bytes; i++) this.buffer[this.leftover + i] = m[mpos + i];
									this.leftover += bytes;
								}
							};

							function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
								var s = new poly1305(k);
								s.update(m, mpos, n);
								s.finish(out, outpos);
								return 0;
							}

							function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
								var x = new Uint8Array(16);
								crypto_onetimeauth(x, 0, m, mpos, n, k);
								return crypto_verify_16(h, hpos, x, 0);
							}

							function crypto_secretbox(c, m, d, n, k) {
								var i;
								if(d < 32) return -1;
								crypto_stream_xor(c, 0, m, 0, d, n, k);
								crypto_onetimeauth(c, 16, c, 32, d - 32, c);
								for(i = 0; i < 16; i++) c[i] = 0;
								return 0;
							}

							function crypto_secretbox_open(m, c, d, n, k) {
								var i;
								var x = new Uint8Array(32);
								if(d < 32) return -1;
								crypto_stream(x, 0, 32, n, k);
								if(crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
								crypto_stream_xor(m, 0, c, 0, d, n, k);
								for(i = 0; i < 32; i++) m[i] = 0;
								return 0;
							}

							function set25519(r, a) {
								var i;
								for(i = 0; i < 16; i++) r[i] = a[i] | 0;
							}

							function car25519(o) {
								var i, v, c = 1;
								for(i = 0; i < 16; i++) {
									v = o[i] + c + 65535;
									c = Math.floor(v / 65536);
									o[i] = v - c * 65536;
								}
								o[0] += c - 1 + 37 * (c - 1);
							}

							function sel25519(p, q, b) {
								var t, c = ~(b - 1);
								for(var i = 0; i < 16; i++) {
									t = c & (p[i] ^ q[i]);
									p[i] ^= t;
									q[i] ^= t;
								}
							}

							function pack25519(o, n) {
								var i, j, b;
								var m = gf(),
									t = gf();
								for(i = 0; i < 16; i++) t[i] = n[i];
								car25519(t);
								car25519(t);
								car25519(t);
								for(j = 0; j < 2; j++) {
									m[0] = t[0] - 0xffed;
									for(i = 1; i < 15; i++) {
										m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
										m[i - 1] &= 0xffff;
									}
									m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
									b = (m[15] >> 16) & 1;
									m[14] &= 0xffff;
									sel25519(t, m, 1 - b);
								}
								for(i = 0; i < 16; i++) {
									o[2 * i] = t[i] & 0xff;
									o[2 * i + 1] = t[i] >> 8;
								}
							}

							function neq25519(a, b) {
								var c = new Uint8Array(32),
									d = new Uint8Array(32);
								pack25519(c, a);
								pack25519(d, b);
								return crypto_verify_32(c, 0, d, 0);
							}

							function par25519(a) {
								var d = new Uint8Array(32);
								pack25519(d, a);
								return d[0] & 1;
							}

							function unpack25519(o, n) {
								var i;
								for(i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
								o[15] &= 0x7fff;
							}

							function A(o, a, b) {
								for(var i = 0; i < 16; i++) o[i] = a[i] + b[i];
							}

							function Z(o, a, b) {
								for(var i = 0; i < 16; i++) o[i] = a[i] - b[i];
							}

							function M(o, a, b) {
								var v, c, t0 = 0,
									t1 = 0,
									t2 = 0,
									t3 = 0,
									t4 = 0,
									t5 = 0,
									t6 = 0,
									t7 = 0,
									t8 = 0,
									t9 = 0,
									t10 = 0,
									t11 = 0,
									t12 = 0,
									t13 = 0,
									t14 = 0,
									t15 = 0,
									t16 = 0,
									t17 = 0,
									t18 = 0,
									t19 = 0,
									t20 = 0,
									t21 = 0,
									t22 = 0,
									t23 = 0,
									t24 = 0,
									t25 = 0,
									t26 = 0,
									t27 = 0,
									t28 = 0,
									t29 = 0,
									t30 = 0,
									b0 = b[0],
									b1 = b[1],
									b2 = b[2],
									b3 = b[3],
									b4 = b[4],
									b5 = b[5],
									b6 = b[6],
									b7 = b[7],
									b8 = b[8],
									b9 = b[9],
									b10 = b[10],
									b11 = b[11],
									b12 = b[12],
									b13 = b[13],
									b14 = b[14],
									b15 = b[15];
								v = a[0];
								t0 += v * b0;
								t1 += v * b1;
								t2 += v * b2;
								t3 += v * b3;
								t4 += v * b4;
								t5 += v * b5;
								t6 += v * b6;
								t7 += v * b7;
								t8 += v * b8;
								t9 += v * b9;
								t10 += v * b10;
								t11 += v * b11;
								t12 += v * b12;
								t13 += v * b13;
								t14 += v * b14;
								t15 += v * b15;
								v = a[1];
								t1 += v * b0;
								t2 += v * b1;
								t3 += v * b2;
								t4 += v * b3;
								t5 += v * b4;
								t6 += v * b5;
								t7 += v * b6;
								t8 += v * b7;
								t9 += v * b8;
								t10 += v * b9;
								t11 += v * b10;
								t12 += v * b11;
								t13 += v * b12;
								t14 += v * b13;
								t15 += v * b14;
								t16 += v * b15;
								v = a[2];
								t2 += v * b0;
								t3 += v * b1;
								t4 += v * b2;
								t5 += v * b3;
								t6 += v * b4;
								t7 += v * b5;
								t8 += v * b6;
								t9 += v * b7;
								t10 += v * b8;
								t11 += v * b9;
								t12 += v * b10;
								t13 += v * b11;
								t14 += v * b12;
								t15 += v * b13;
								t16 += v * b14;
								t17 += v * b15;
								v = a[3];
								t3 += v * b0;
								t4 += v * b1;
								t5 += v * b2;
								t6 += v * b3;
								t7 += v * b4;
								t8 += v * b5;
								t9 += v * b6;
								t10 += v * b7;
								t11 += v * b8;
								t12 += v * b9;
								t13 += v * b10;
								t14 += v * b11;
								t15 += v * b12;
								t16 += v * b13;
								t17 += v * b14;
								t18 += v * b15;
								v = a[4];
								t4 += v * b0;
								t5 += v * b1;
								t6 += v * b2;
								t7 += v * b3;
								t8 += v * b4;
								t9 += v * b5;
								t10 += v * b6;
								t11 += v * b7;
								t12 += v * b8;
								t13 += v * b9;
								t14 += v * b10;
								t15 += v * b11;
								t16 += v * b12;
								t17 += v * b13;
								t18 += v * b14;
								t19 += v * b15;
								v = a[5];
								t5 += v * b0;
								t6 += v * b1;
								t7 += v * b2;
								t8 += v * b3;
								t9 += v * b4;
								t10 += v * b5;
								t11 += v * b6;
								t12 += v * b7;
								t13 += v * b8;
								t14 += v * b9;
								t15 += v * b10;
								t16 += v * b11;
								t17 += v * b12;
								t18 += v * b13;
								t19 += v * b14;
								t20 += v * b15;
								v = a[6];
								t6 += v * b0;
								t7 += v * b1;
								t8 += v * b2;
								t9 += v * b3;
								t10 += v * b4;
								t11 += v * b5;
								t12 += v * b6;
								t13 += v * b7;
								t14 += v * b8;
								t15 += v * b9;
								t16 += v * b10;
								t17 += v * b11;
								t18 += v * b12;
								t19 += v * b13;
								t20 += v * b14;
								t21 += v * b15;
								v = a[7];
								t7 += v * b0;
								t8 += v * b1;
								t9 += v * b2;
								t10 += v * b3;
								t11 += v * b4;
								t12 += v * b5;
								t13 += v * b6;
								t14 += v * b7;
								t15 += v * b8;
								t16 += v * b9;
								t17 += v * b10;
								t18 += v * b11;
								t19 += v * b12;
								t20 += v * b13;
								t21 += v * b14;
								t22 += v * b15;
								v = a[8];
								t8 += v * b0;
								t9 += v * b1;
								t10 += v * b2;
								t11 += v * b3;
								t12 += v * b4;
								t13 += v * b5;
								t14 += v * b6;
								t15 += v * b7;
								t16 += v * b8;
								t17 += v * b9;
								t18 += v * b10;
								t19 += v * b11;
								t20 += v * b12;
								t21 += v * b13;
								t22 += v * b14;
								t23 += v * b15;
								v = a[9];
								t9 += v * b0;
								t10 += v * b1;
								t11 += v * b2;
								t12 += v * b3;
								t13 += v * b4;
								t14 += v * b5;
								t15 += v * b6;
								t16 += v * b7;
								t17 += v * b8;
								t18 += v * b9;
								t19 += v * b10;
								t20 += v * b11;
								t21 += v * b12;
								t22 += v * b13;
								t23 += v * b14;
								t24 += v * b15;
								v = a[10];
								t10 += v * b0;
								t11 += v * b1;
								t12 += v * b2;
								t13 += v * b3;
								t14 += v * b4;
								t15 += v * b5;
								t16 += v * b6;
								t17 += v * b7;
								t18 += v * b8;
								t19 += v * b9;
								t20 += v * b10;
								t21 += v * b11;
								t22 += v * b12;
								t23 += v * b13;
								t24 += v * b14;
								t25 += v * b15;
								v = a[11];
								t11 += v * b0;
								t12 += v * b1;
								t13 += v * b2;
								t14 += v * b3;
								t15 += v * b4;
								t16 += v * b5;
								t17 += v * b6;
								t18 += v * b7;
								t19 += v * b8;
								t20 += v * b9;
								t21 += v * b10;
								t22 += v * b11;
								t23 += v * b12;
								t24 += v * b13;
								t25 += v * b14;
								t26 += v * b15;
								v = a[12];
								t12 += v * b0;
								t13 += v * b1;
								t14 += v * b2;
								t15 += v * b3;
								t16 += v * b4;
								t17 += v * b5;
								t18 += v * b6;
								t19 += v * b7;
								t20 += v * b8;
								t21 += v * b9;
								t22 += v * b10;
								t23 += v * b11;
								t24 += v * b12;
								t25 += v * b13;
								t26 += v * b14;
								t27 += v * b15;
								v = a[13];
								t13 += v * b0;
								t14 += v * b1;
								t15 += v * b2;
								t16 += v * b3;
								t17 += v * b4;
								t18 += v * b5;
								t19 += v * b6;
								t20 += v * b7;
								t21 += v * b8;
								t22 += v * b9;
								t23 += v * b10;
								t24 += v * b11;
								t25 += v * b12;
								t26 += v * b13;
								t27 += v * b14;
								t28 += v * b15;
								v = a[14];
								t14 += v * b0;
								t15 += v * b1;
								t16 += v * b2;
								t17 += v * b3;
								t18 += v * b4;
								t19 += v * b5;
								t20 += v * b6;
								t21 += v * b7;
								t22 += v * b8;
								t23 += v * b9;
								t24 += v * b10;
								t25 += v * b11;
								t26 += v * b12;
								t27 += v * b13;
								t28 += v * b14;
								t29 += v * b15;
								v = a[15];
								t15 += v * b0;
								t16 += v * b1;
								t17 += v * b2;
								t18 += v * b3;
								t19 += v * b4;
								t20 += v * b5;
								t21 += v * b6;
								t22 += v * b7;
								t23 += v * b8;
								t24 += v * b9;
								t25 += v * b10;
								t26 += v * b11;
								t27 += v * b12;
								t28 += v * b13;
								t29 += v * b14;
								t30 += v * b15;
								t0 += 38 * t16;
								t1 += 38 * t17;
								t2 += 38 * t18;
								t3 += 38 * t19;
								t4 += 38 * t20;
								t5 += 38 * t21;
								t6 += 38 * t22;
								t7 += 38 * t23;
								t8 += 38 * t24;
								t9 += 38 * t25;
								t10 += 38 * t26;
								t11 += 38 * t27;
								t12 += 38 * t28;
								t13 += 38 * t29;
								t14 += 38 * t30;
								c = 1;
								v = t0 + c + 65535;
								c = Math.floor(v / 65536);
								t0 = v - c * 65536;
								v = t1 + c + 65535;
								c = Math.floor(v / 65536);
								t1 = v - c * 65536;
								v = t2 + c + 65535;
								c = Math.floor(v / 65536);
								t2 = v - c * 65536;
								v = t3 + c + 65535;
								c = Math.floor(v / 65536);
								t3 = v - c * 65536;
								v = t4 + c + 65535;
								c = Math.floor(v / 65536);
								t4 = v - c * 65536;
								v = t5 + c + 65535;
								c = Math.floor(v / 65536);
								t5 = v - c * 65536;
								v = t6 + c + 65535;
								c = Math.floor(v / 65536);
								t6 = v - c * 65536;
								v = t7 + c + 65535;
								c = Math.floor(v / 65536);
								t7 = v - c * 65536;
								v = t8 + c + 65535;
								c = Math.floor(v / 65536);
								t8 = v - c * 65536;
								v = t9 + c + 65535;
								c = Math.floor(v / 65536);
								t9 = v - c * 65536;
								v = t10 + c + 65535;
								c = Math.floor(v / 65536);
								t10 = v - c * 65536;
								v = t11 + c + 65535;
								c = Math.floor(v / 65536);
								t11 = v - c * 65536;
								v = t12 + c + 65535;
								c = Math.floor(v / 65536);
								t12 = v - c * 65536;
								v = t13 + c + 65535;
								c = Math.floor(v / 65536);
								t13 = v - c * 65536;
								v = t14 + c + 65535;
								c = Math.floor(v / 65536);
								t14 = v - c * 65536;
								v = t15 + c + 65535;
								c = Math.floor(v / 65536);
								t15 = v - c * 65536;
								t0 += c - 1 + 37 * (c - 1);
								c = 1;
								v = t0 + c + 65535;
								c = Math.floor(v / 65536);
								t0 = v - c * 65536;
								v = t1 + c + 65535;
								c = Math.floor(v / 65536);
								t1 = v - c * 65536;
								v = t2 + c + 65535;
								c = Math.floor(v / 65536);
								t2 = v - c * 65536;
								v = t3 + c + 65535;
								c = Math.floor(v / 65536);
								t3 = v - c * 65536;
								v = t4 + c + 65535;
								c = Math.floor(v / 65536);
								t4 = v - c * 65536;
								v = t5 + c + 65535;
								c = Math.floor(v / 65536);
								t5 = v - c * 65536;
								v = t6 + c + 65535;
								c = Math.floor(v / 65536);
								t6 = v - c * 65536;
								v = t7 + c + 65535;
								c = Math.floor(v / 65536);
								t7 = v - c * 65536;
								v = t8 + c + 65535;
								c = Math.floor(v / 65536);
								t8 = v - c * 65536;
								v = t9 + c + 65535;
								c = Math.floor(v / 65536);
								t9 = v - c * 65536;
								v = t10 + c + 65535;
								c = Math.floor(v / 65536);
								t10 = v - c * 65536;
								v = t11 + c + 65535;
								c = Math.floor(v / 65536);
								t11 = v - c * 65536;
								v = t12 + c + 65535;
								c = Math.floor(v / 65536);
								t12 = v - c * 65536;
								v = t13 + c + 65535;
								c = Math.floor(v / 65536);
								t13 = v - c * 65536;
								v = t14 + c + 65535;
								c = Math.floor(v / 65536);
								t14 = v - c * 65536;
								v = t15 + c + 65535;
								c = Math.floor(v / 65536);
								t15 = v - c * 65536;
								t0 += c - 1 + 37 * (c - 1);
								o[0] = t0;
								o[1] = t1;
								o[2] = t2;
								o[3] = t3;
								o[4] = t4;
								o[5] = t5;
								o[6] = t6;
								o[7] = t7;
								o[8] = t8;
								o[9] = t9;
								o[10] = t10;
								o[11] = t11;
								o[12] = t12;
								o[13] = t13;
								o[14] = t14;
								o[15] = t15;
							}

							function S(o, a) {
								M(o, a, a);
							}

							function inv25519(o, i) {
								var c = gf();
								var a;
								for(a = 0; a < 16; a++) c[a] = i[a];
								for(a = 253; a >= 0; a--) {
									S(c, c);
									if(a !== 2 && a !== 4) M(c, c, i);
								}
								for(a = 0; a < 16; a++) o[a] = c[a];
							}

							function pow2523(o, i) {
								var c = gf();
								var a;
								for(a = 0; a < 16; a++) c[a] = i[a];
								for(a = 250; a >= 0; a--) {
									S(c, c);
									if(a !== 1) M(c, c, i);
								}
								for(a = 0; a < 16; a++) o[a] = c[a];
							}

							function crypto_scalarmult(q, n, p) {
								var z = new Uint8Array(32);
								var x = new Float64Array(80),
									r, i;
								var a = gf(),
									b = gf(),
									c = gf(),
									d = gf(),
									e = gf(),
									f = gf();
								for(i = 0; i < 31; i++) z[i] = n[i];
								z[31] = (n[31] & 127) | 64;
								z[0] &= 248;
								unpack25519(x, p);
								for(i = 0; i < 16; i++) {
									b[i] = x[i];
									d[i] = a[i] = c[i] = 0;
								}
								a[0] = d[0] = 1;
								for(i = 254; i >= 0; --i) {
									r = (z[i >>> 3] >>> (i & 7)) & 1;
									sel25519(a, b, r);
									sel25519(c, d, r);
									A(e, a, c);
									Z(a, a, c);
									A(c, b, d);
									Z(b, b, d);
									S(d, e);
									S(f, a);
									M(a, c, a);
									M(c, b, e);
									A(e, a, c);
									Z(a, a, c);
									S(b, a);
									Z(c, d, f);
									M(a, c, _121665);
									A(a, a, d);
									M(c, c, a);
									M(a, d, f);
									M(d, b, x);
									S(b, e);
									sel25519(a, b, r);
									sel25519(c, d, r);
								}
								for(i = 0; i < 16; i++) {
									x[i + 16] = a[i];
									x[i + 32] = c[i];
									x[i + 48] = b[i];
									x[i + 64] = d[i];
								}
								var x32 = x.subarray(32);
								var x16 = x.subarray(16);
								inv25519(x32, x32);
								M(x16, x16, x32);
								pack25519(q, x16);
								return 0;
							}

							function crypto_scalarmult_base(q, n) {
								return crypto_scalarmult(q, n, _9);
							}

							function crypto_box_keypair(y, x) {
								randombytes(x, 32);
								return crypto_scalarmult_base(y, x);
							}

							function crypto_box_beforenm(k, y, x) {
								var s = new Uint8Array(32);
								crypto_scalarmult(s, x, y);
								return crypto_core_hsalsa20(k, _0, s, sigma);
							}
							var crypto_box_afternm = crypto_secretbox;
							var crypto_box_open_afternm = crypto_secretbox_open;

							function crypto_box(c, m, d, n, y, x) {
								var k = new Uint8Array(32);
								crypto_box_beforenm(k, y, x);
								return crypto_box_afternm(c, m, d, n, k);
							}

							function crypto_box_open(m, c, d, n, y, x) {
								var k = new Uint8Array(32);
								crypto_box_beforenm(k, y, x);
								return crypto_box_open_afternm(m, c, d, n, k);
							}
							var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

							function crypto_hashblocks_hl(hh, hl, m, n) {
								var wh = new Int32Array(16),
									wl = new Int32Array(16),
									bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
								var ah0 = hh[0],
									ah1 = hh[1],
									ah2 = hh[2],
									ah3 = hh[3],
									ah4 = hh[4],
									ah5 = hh[5],
									ah6 = hh[6],
									ah7 = hh[7],
									al0 = hl[0],
									al1 = hl[1],
									al2 = hl[2],
									al3 = hl[3],
									al4 = hl[4],
									al5 = hl[5],
									al6 = hl[6],
									al7 = hl[7];
								var pos = 0;
								while(n >= 128) {
									for(i = 0; i < 16; i++) {
										j = 8 * i + pos;
										wh[i] = (m[j + 0] << 24) | (m[j + 1] << 16) | (m[j + 2] << 8) | m[j + 3];
										wl[i] = (m[j + 4] << 24) | (m[j + 5] << 16) | (m[j + 6] << 8) | m[j + 7];
									}
									for(i = 0; i < 80; i++) {
										bh0 = ah0;
										bh1 = ah1;
										bh2 = ah2;
										bh3 = ah3;
										bh4 = ah4;
										bh5 = ah5;
										bh6 = ah6;
										bh7 = ah7;
										bl0 = al0;
										bl1 = al1;
										bl2 = al2;
										bl3 = al3;
										bl4 = al4;
										bl5 = al5;
										bl6 = al6;
										bl7 = al7;
										h = ah7;
										l = al7;
										a = l & 0xffff;
										b = l >>> 16;
										c = h & 0xffff;
										d = h >>> 16;
										h = ((ah4 >>> 14) | (al4 << (32 - 14))) ^ ((ah4 >>> 18) | (al4 << (32 - 18))) ^ ((al4 >>> (41 - 32)) | (ah4 << (32 - (41 - 32))));
										l = ((al4 >>> 14) | (ah4 << (32 - 14))) ^ ((al4 >>> 18) | (ah4 << (32 - 18))) ^ ((ah4 >>> (41 - 32)) | (al4 << (32 - (41 - 32))));
										a += l & 0xffff;
										b += l >>> 16;
										c += h & 0xffff;
										d += h >>> 16;
										h = (ah4 & ah5) ^ (~ah4 & ah6);
										l = (al4 & al5) ^ (~al4 & al6);
										a += l & 0xffff;
										b += l >>> 16;
										c += h & 0xffff;
										d += h >>> 16;
										h = K[i * 2];
										l = K[i * 2 + 1];
										a += l & 0xffff;
										b += l >>> 16;
										c += h & 0xffff;
										d += h >>> 16;
										h = wh[i % 16];
										l = wl[i % 16];
										a += l & 0xffff;
										b += l >>> 16;
										c += h & 0xffff;
										d += h >>> 16;
										b += a >>> 16;
										c += b >>> 16;
										d += c >>> 16;
										th = c & 0xffff | d << 16;
										tl = a & 0xffff | b << 16;
										h = th;
										l = tl;
										a = l & 0xffff;
										b = l >>> 16;
										c = h & 0xffff;
										d = h >>> 16;
										h = ((ah0 >>> 28) | (al0 << (32 - 28))) ^ ((al0 >>> (34 - 32)) | (ah0 << (32 - (34 - 32)))) ^ ((al0 >>> (39 - 32)) | (ah0 << (32 - (39 - 32))));
										l = ((al0 >>> 28) | (ah0 << (32 - 28))) ^ ((ah0 >>> (34 - 32)) | (al0 << (32 - (34 - 32)))) ^ ((ah0 >>> (39 - 32)) | (al0 << (32 - (39 - 32))));
										a += l & 0xffff;
										b += l >>> 16;
										c += h & 0xffff;
										d += h >>> 16;
										h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
										l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);
										a += l & 0xffff;
										b += l >>> 16;
										c += h & 0xffff;
										d += h >>> 16;
										b += a >>> 16;
										c += b >>> 16;
										d += c >>> 16;
										bh7 = (c & 0xffff) | (d << 16);
										bl7 = (a & 0xffff) | (b << 16);
										h = bh3;
										l = bl3;
										a = l & 0xffff;
										b = l >>> 16;
										c = h & 0xffff;
										d = h >>> 16;
										h = th;
										l = tl;
										a += l & 0xffff;
										b += l >>> 16;
										c += h & 0xffff;
										d += h >>> 16;
										b += a >>> 16;
										c += b >>> 16;
										d += c >>> 16;
										bh3 = (c & 0xffff) | (d << 16);
										bl3 = (a & 0xffff) | (b << 16);
										ah1 = bh0;
										ah2 = bh1;
										ah3 = bh2;
										ah4 = bh3;
										ah5 = bh4;
										ah6 = bh5;
										ah7 = bh6;
										ah0 = bh7;
										al1 = bl0;
										al2 = bl1;
										al3 = bl2;
										al4 = bl3;
										al5 = bl4;
										al6 = bl5;
										al7 = bl6;
										al0 = bl7;
										if(i % 16 === 15) {
											for(j = 0; j < 16; j++) {
												h = wh[j];
												l = wl[j];
												a = l & 0xffff;
												b = l >>> 16;
												c = h & 0xffff;
												d = h >>> 16;
												h = wh[(j + 9) % 16];
												l = wl[(j + 9) % 16];
												a += l & 0xffff;
												b += l >>> 16;
												c += h & 0xffff;
												d += h >>> 16;
												th = wh[(j + 1) % 16];
												tl = wl[(j + 1) % 16];
												h = ((th >>> 1) | (tl << (32 - 1))) ^ ((th >>> 8) | (tl << (32 - 8))) ^ (th >>> 7);
												l = ((tl >>> 1) | (th << (32 - 1))) ^ ((tl >>> 8) | (th << (32 - 8))) ^ ((tl >>> 7) | (th << (32 - 7)));
												a += l & 0xffff;
												b += l >>> 16;
												c += h & 0xffff;
												d += h >>> 16;
												th = wh[(j + 14) % 16];
												tl = wl[(j + 14) % 16];
												h = ((th >>> 19) | (tl << (32 - 19))) ^ ((tl >>> (61 - 32)) | (th << (32 - (61 - 32)))) ^ (th >>> 6);
												l = ((tl >>> 19) | (th << (32 - 19))) ^ ((th >>> (61 - 32)) | (tl << (32 - (61 - 32)))) ^ ((tl >>> 6) | (th << (32 - 6)));
												a += l & 0xffff;
												b += l >>> 16;
												c += h & 0xffff;
												d += h >>> 16;
												b += a >>> 16;
												c += b >>> 16;
												d += c >>> 16;
												wh[j] = (c & 0xffff) | (d << 16);
												wl[j] = (a & 0xffff) | (b << 16);
											}
										}
									}
									h = ah0;
									l = al0;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[0];
									l = hl[0];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[0] = ah0 = (c & 0xffff) | (d << 16);
									hl[0] = al0 = (a & 0xffff) | (b << 16);
									h = ah1;
									l = al1;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[1];
									l = hl[1];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[1] = ah1 = (c & 0xffff) | (d << 16);
									hl[1] = al1 = (a & 0xffff) | (b << 16);
									h = ah2;
									l = al2;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[2];
									l = hl[2];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[2] = ah2 = (c & 0xffff) | (d << 16);
									hl[2] = al2 = (a & 0xffff) | (b << 16);
									h = ah3;
									l = al3;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[3];
									l = hl[3];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[3] = ah3 = (c & 0xffff) | (d << 16);
									hl[3] = al3 = (a & 0xffff) | (b << 16);
									h = ah4;
									l = al4;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[4];
									l = hl[4];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[4] = ah4 = (c & 0xffff) | (d << 16);
									hl[4] = al4 = (a & 0xffff) | (b << 16);
									h = ah5;
									l = al5;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[5];
									l = hl[5];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[5] = ah5 = (c & 0xffff) | (d << 16);
									hl[5] = al5 = (a & 0xffff) | (b << 16);
									h = ah6;
									l = al6;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[6];
									l = hl[6];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[6] = ah6 = (c & 0xffff) | (d << 16);
									hl[6] = al6 = (a & 0xffff) | (b << 16);
									h = ah7;
									l = al7;
									a = l & 0xffff;
									b = l >>> 16;
									c = h & 0xffff;
									d = h >>> 16;
									h = hh[7];
									l = hl[7];
									a += l & 0xffff;
									b += l >>> 16;
									c += h & 0xffff;
									d += h >>> 16;
									b += a >>> 16;
									c += b >>> 16;
									d += c >>> 16;
									hh[7] = ah7 = (c & 0xffff) | (d << 16);
									hl[7] = al7 = (a & 0xffff) | (b << 16);
									pos += 128;
									n -= 128;
								}
								return n;
							}

							function crypto_hash(out, m, n) {
								var hh = new Int32Array(8),
									hl = new Int32Array(8),
									x = new Uint8Array(256),
									i, b = n;
								hh[0] = 0x6a09e667;
								hh[1] = 0xbb67ae85;
								hh[2] = 0x3c6ef372;
								hh[3] = 0xa54ff53a;
								hh[4] = 0x510e527f;
								hh[5] = 0x9b05688c;
								hh[6] = 0x1f83d9ab;
								hh[7] = 0x5be0cd19;
								hl[0] = 0xf3bcc908;
								hl[1] = 0x84caa73b;
								hl[2] = 0xfe94f82b;
								hl[3] = 0x5f1d36f1;
								hl[4] = 0xade682d1;
								hl[5] = 0x2b3e6c1f;
								hl[6] = 0xfb41bd6b;
								hl[7] = 0x137e2179;
								crypto_hashblocks_hl(hh, hl, m, n);
								n %= 128;
								for(i = 0; i < n; i++) x[i] = m[b - n + i];
								x[n] = 128;
								n = 256 - 128 * (n < 112 ? 1 : 0);
								x[n - 9] = 0;
								ts64(x, n - 8, (b / 0x20000000) | 0, b << 3);
								crypto_hashblocks_hl(hh, hl, x, n);
								for(i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
								return 0;
							}

							function add(p, q) {
								var a = gf(),
									b = gf(),
									c = gf(),
									d = gf(),
									e = gf(),
									f = gf(),
									g = gf(),
									h = gf(),
									t = gf();
								Z(a, p[1], p[0]);
								Z(t, q[1], q[0]);
								M(a, a, t);
								A(b, p[0], p[1]);
								A(t, q[0], q[1]);
								M(b, b, t);
								M(c, p[3], q[3]);
								M(c, c, D2);
								M(d, p[2], q[2]);
								A(d, d, d);
								Z(e, b, a);
								Z(f, d, c);
								A(g, d, c);
								A(h, b, a);
								M(p[0], e, f);
								M(p[1], h, g);
								M(p[2], g, f);
								M(p[3], e, h);
							}

							function cswap(p, q, b) {
								var i;
								for(i = 0; i < 4; i++) {
									sel25519(p[i], q[i], b);
								}
							}

							function pack(r, p) {
								var tx = gf(),
									ty = gf(),
									zi = gf();
								inv25519(zi, p[2]);
								M(tx, p[0], zi);
								M(ty, p[1], zi);
								pack25519(r, ty);
								r[31] ^= par25519(tx) << 7;
							}

							function scalarmult(p, q, s) {
								var b, i;
								set25519(p[0], gf0);
								set25519(p[1], gf1);
								set25519(p[2], gf1);
								set25519(p[3], gf0);
								for(i = 255; i >= 0; --i) {
									b = (s[(i / 8) | 0] >> (i & 7)) & 1;
									cswap(p, q, b);
									add(q, p);
									add(p, p);
									cswap(p, q, b);
								}
							}

							function scalarbase(p, s) {
								var q = [gf(), gf(), gf(), gf()];
								set25519(q[0], X);
								set25519(q[1], Y);
								set25519(q[2], gf1);
								M(q[3], X, Y);
								scalarmult(p, q, s);
							}

							function crypto_sign_keypair(pk, sk, seeded) {
								var d = new Uint8Array(64);
								var p = [gf(), gf(), gf(), gf()];
								var i;
								if(!seeded) randombytes(sk, 32);
								crypto_hash(d, sk, 32);
								d[0] &= 248;
								d[31] &= 127;
								d[31] |= 64;
								scalarbase(p, d);
								pack(pk, p);
								for(i = 0; i < 32; i++) sk[i + 32] = pk[i];
								return 0;
							}
							var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

							function modL(r, x) {
								var carry, i, j, k;
								for(i = 63; i >= 32; --i) {
									carry = 0;
									for(j = i - 32, k = i - 12; j < k; ++j) {
										x[j] += carry - 16 * x[i] * L[j - (i - 32)];
										carry = (x[j] + 128) >> 8;
										x[j] -= carry * 256;
									}
									x[j] += carry;
									x[i] = 0;
								}
								carry = 0;
								for(j = 0; j < 32; j++) {
									x[j] += carry - (x[31] >> 4) * L[j];
									carry = x[j] >> 8;
									x[j] &= 255;
								}
								for(j = 0; j < 32; j++) x[j] -= carry * L[j];
								for(i = 0; i < 32; i++) {
									x[i + 1] += x[i] >> 8;
									r[i] = x[i] & 255;
								}
							}

							function reduce(r) {
								var x = new Float64Array(64),
									i;
								for(i = 0; i < 64; i++) x[i] = r[i];
								for(i = 0; i < 64; i++) r[i] = 0;
								modL(r, x);
							}

							function crypto_sign(sm, m, n, sk) {
								var d = new Uint8Array(64),
									h = new Uint8Array(64),
									r = new Uint8Array(64);
								var i, j, x = new Float64Array(64);
								var p = [gf(), gf(), gf(), gf()];
								crypto_hash(d, sk, 32);
								d[0] &= 248;
								d[31] &= 127;
								d[31] |= 64;
								var smlen = n + 64;
								for(i = 0; i < n; i++) sm[64 + i] = m[i];
								for(i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
								crypto_hash(r, sm.subarray(32), n + 32);
								reduce(r);
								scalarbase(p, r);
								pack(sm, p);
								for(i = 32; i < 64; i++) sm[i] = sk[i];
								crypto_hash(h, sm, n + 64);
								reduce(h);
								for(i = 0; i < 64; i++) x[i] = 0;
								for(i = 0; i < 32; i++) x[i] = r[i];
								for(i = 0; i < 32; i++) {
									for(j = 0; j < 32; j++) {
										x[i + j] += h[i] * d[j];
									}
								}
								modL(sm.subarray(32), x);
								return smlen;
							}

							function unpackneg(r, p) {
								var t = gf(),
									chk = gf(),
									num = gf(),
									den = gf(),
									den2 = gf(),
									den4 = gf(),
									den6 = gf();
								set25519(r[2], gf1);
								unpack25519(r[1], p);
								S(num, r[1]);
								M(den, num, D);
								Z(num, num, r[2]);
								A(den, r[2], den);
								S(den2, den);
								S(den4, den2);
								M(den6, den4, den2);
								M(t, den6, num);
								M(t, t, den);
								pow2523(t, t);
								M(t, t, num);
								M(t, t, den);
								M(t, t, den);
								M(r[0], t, den);
								S(chk, r[0]);
								M(chk, chk, den);
								if(neq25519(chk, num)) M(r[0], r[0], I);
								S(chk, r[0]);
								M(chk, chk, den);
								if(neq25519(chk, num)) return -1;
								if(par25519(r[0]) === (p[31] >> 7)) Z(r[0], gf0, r[0]);
								M(r[3], r[0], r[1]);
								return 0;
							}

							function crypto_sign_open(m, sm, n, pk) {
								var i, mlen;
								var t = new Uint8Array(32),
									h = new Uint8Array(64);
								var p = [gf(), gf(), gf(), gf()],
									q = [gf(), gf(), gf(), gf()];
								mlen = -1;
								if(n < 64) return -1;
								if(unpackneg(q, pk)) return -1;
								for(i = 0; i < n; i++) m[i] = sm[i];
								for(i = 0; i < 32; i++) m[i + 32] = pk[i];
								crypto_hash(h, m, n);
								reduce(h);
								scalarmult(p, q, h);
								scalarbase(q, sm.subarray(32));
								add(p, q);
								pack(t, p);
								n -= 64;
								if(crypto_verify_32(sm, 0, t, 0)) {
									for(i = 0; i < n; i++) m[i] = 0;
									return -1;
								}
								for(i = 0; i < n; i++) m[i] = sm[i + 64];
								mlen = n;
								return mlen;
							}
							var crypto_secretbox_KEYBYTES = 32,
								crypto_secretbox_NONCEBYTES = 24,
								crypto_secretbox_ZEROBYTES = 32,
								crypto_secretbox_BOXZEROBYTES = 16,
								crypto_scalarmult_BYTES = 32,
								crypto_scalarmult_SCALARBYTES = 32,
								crypto_box_PUBLICKEYBYTES = 32,
								crypto_box_SECRETKEYBYTES = 32,
								crypto_box_BEFORENMBYTES = 32,
								crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
								crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
								crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
								crypto_sign_BYTES = 64,
								crypto_sign_PUBLICKEYBYTES = 32,
								crypto_sign_SECRETKEYBYTES = 64,
								crypto_sign_SEEDBYTES = 32,
								crypto_hash_BYTES = 64;
							nacl.lowlevel = {
								crypto_core_hsalsa20: crypto_core_hsalsa20,
								crypto_stream_xor: crypto_stream_xor,
								crypto_stream: crypto_stream,
								crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
								crypto_stream_salsa20: crypto_stream_salsa20,
								crypto_onetimeauth: crypto_onetimeauth,
								crypto_onetimeauth_verify: crypto_onetimeauth_verify,
								crypto_verify_16: crypto_verify_16,
								crypto_verify_32: crypto_verify_32,
								crypto_secretbox: crypto_secretbox,
								crypto_secretbox_open: crypto_secretbox_open,
								crypto_scalarmult: crypto_scalarmult,
								crypto_scalarmult_base: crypto_scalarmult_base,
								crypto_box_beforenm: crypto_box_beforenm,
								crypto_box_afternm: crypto_box_afternm,
								crypto_box: crypto_box,
								crypto_box_open: crypto_box_open,
								crypto_box_keypair: crypto_box_keypair,
								crypto_hash: crypto_hash,
								crypto_sign: crypto_sign,
								crypto_sign_keypair: crypto_sign_keypair,
								crypto_sign_open: crypto_sign_open,
								crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
								crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
								crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
								crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
								crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
								crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
								crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
								crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
								crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
								crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
								crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
								crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
								crypto_sign_BYTES: crypto_sign_BYTES,
								crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
								crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
								crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
								crypto_hash_BYTES: crypto_hash_BYTES
							};

							function checkLengths(k, n) {
								if(k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
								if(n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
							}

							function checkBoxLengths(pk, sk) {
								if(pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
								if(sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
							}

							function checkArrayTypes() {
								var t, i;
								for(i = 0; i < arguments.length; i++) {
									if((t = Object.prototype.toString.call(arguments[i])) !== '[object Uint8Array]') throw new TypeError('unexpected type ' + t + ', use Uint8Array');
								}
							}

							function cleanup(arr) {
								for(var i = 0; i < arr.length; i++) arr[i] = 0;
							}
							if(!nacl.util) {
								nacl.util = {};
								nacl.util.decodeUTF8 = nacl.util.encodeUTF8 = nacl.util.encodeBase64 = nacl.util.decodeBase64 = function () {
									throw new Error('nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js');
								};
							}
							nacl.randomBytes = function (n) {
								var b = new Uint8Array(n);
								randombytes(b, n);
								return b;
							};
							nacl.secretbox = function (msg, nonce, key) {
								checkArrayTypes(msg, nonce, key);
								checkLengths(key, nonce);
								var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
								var c = new Uint8Array(m.length);
								for(var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
								crypto_secretbox(c, m, m.length, nonce, key);
								return c.subarray(crypto_secretbox_BOXZEROBYTES);
							};
							nacl.secretbox.open = function (box, nonce, key) {
								checkArrayTypes(box, nonce, key);
								checkLengths(key, nonce);
								var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
								var m = new Uint8Array(c.length);
								for(var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
								if(c.length < 32) return false;
								if(crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return false;
								return m.subarray(crypto_secretbox_ZEROBYTES);
							};
							nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
							nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
							nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
							nacl.scalarMult = function (n, p) {
								checkArrayTypes(n, p);
								if(n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
								if(p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
								var q = new Uint8Array(crypto_scalarmult_BYTES);
								crypto_scalarmult(q, n, p);
								return q;
							};
							nacl.scalarMult.base = function (n) {
								checkArrayTypes(n);
								if(n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
								var q = new Uint8Array(crypto_scalarmult_BYTES);
								crypto_scalarmult_base(q, n);
								return q;
							};
							nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
							nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
							nacl.box = function (msg, nonce, publicKey, secretKey) {
								var k = nacl.box.before(publicKey, secretKey);
								return nacl.secretbox(msg, nonce, k);
							};
							nacl.box.before = function (publicKey, secretKey) {
								checkArrayTypes(publicKey, secretKey);
								checkBoxLengths(publicKey, secretKey);
								var k = new Uint8Array(crypto_box_BEFORENMBYTES);
								crypto_box_beforenm(k, publicKey, secretKey);
								return k;
							};
							nacl.box.after = nacl.secretbox;
							nacl.box.open = function (msg, nonce, publicKey, secretKey) {
								var k = nacl.box.before(publicKey, secretKey);
								return nacl.secretbox.open(msg, nonce, k);
							};
							nacl.box.open.after = nacl.secretbox.open;
							nacl.box.keyPair = function () {
								var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
								var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
								crypto_box_keypair(pk, sk);
								return {
									publicKey: pk,
									secretKey: sk
								};
							};
							nacl.box.keyPair.fromSecretKey = function (secretKey) {
								checkArrayTypes(secretKey);
								if(secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
								var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
								crypto_scalarmult_base(pk, secretKey);
								return {
									publicKey: pk,
									secretKey: new Uint8Array(secretKey)
								};
							};
							nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
							nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
							nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
							nacl.box.nonceLength = crypto_box_NONCEBYTES;
							nacl.box.overheadLength = nacl.secretbox.overheadLength;
							nacl.sign = function (msg, secretKey) {
								checkArrayTypes(msg, secretKey);
								if(secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
								var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
								crypto_sign(signedMsg, msg, msg.length, secretKey);
								return signedMsg;
							};
							nacl.sign.open = function (signedMsg, publicKey) {
								if(arguments.length !== 2) throw new Error('nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?');
								checkArrayTypes(signedMsg, publicKey);
								if(publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
								var tmp = new Uint8Array(signedMsg.length);
								var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
								if(mlen < 0) return null;
								var m = new Uint8Array(mlen);
								for(var i = 0; i < m.length; i++) m[i] = tmp[i];
								return m;
							};
							nacl.sign.detached = function (msg, secretKey) {
								var signedMsg = nacl.sign(msg, secretKey);
								var sig = new Uint8Array(crypto_sign_BYTES);
								for(var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
								return sig;
							};
							nacl.sign.detached.verify = function (msg, sig, publicKey) {
								checkArrayTypes(msg, sig, publicKey);
								if(sig.length !== crypto_sign_BYTES) throw new Error('bad signature size');
								if(publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
								var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
								var m = new Uint8Array(crypto_sign_BYTES + msg.length);
								var i;
								for(i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
								for(i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
								return(crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
							};
							nacl.sign.keyPair = function () {
								var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
								var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
								crypto_sign_keypair(pk, sk);
								return {
									publicKey: pk,
									secretKey: sk
								};
							};
							nacl.sign.keyPair.fromSecretKey = function (secretKey) {
								checkArrayTypes(secretKey);
								if(secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
								var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
								for(var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
								return {
									publicKey: pk,
									secretKey: new Uint8Array(secretKey)
								};
							};
							nacl.sign.keyPair.fromSeed = function (seed) {
								checkArrayTypes(seed);
								if(seed.length !== crypto_sign_SEEDBYTES) throw new Error('bad seed size');
								var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
								var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
								for(var i = 0; i < 32; i++) sk[i] = seed[i];
								crypto_sign_keypair(pk, sk, true);
								return {
									publicKey: pk,
									secretKey: sk
								};
							};
							nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
							nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
							nacl.sign.seedLength = crypto_sign_SEEDBYTES;
							nacl.sign.signatureLength = crypto_sign_BYTES;
							nacl.hash = function (msg) {
								checkArrayTypes(msg);
								var h = new Uint8Array(crypto_hash_BYTES);
								crypto_hash(h, msg, msg.length);
								return h;
							};
							nacl.hash.hashLength = crypto_hash_BYTES;
							nacl.verify = function (x, y) {
								checkArrayTypes(x, y);
								if(x.length === 0 || y.length === 0) return false;
								if(x.length !== y.length) return false;
								return(vn(x, 0, y, 0, x.length) === 0) ? true : false;
							};
							nacl.setPRNG = function (fn) {
								randombytes = fn;
							};
							(function () {
								var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
								if(crypto && crypto.getRandomValues) {
									var QUOTA = 65536;
									nacl.setPRNG(function (x, n) {
										var i, v = new Uint8Array(n);
										for(i = 0; i < n; i += QUOTA) {
											crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
										}
										for(i = 0; i < n; i++) x[i] = v[i];
										cleanup(v);
									});
								} else if(typeof require !== 'undefined') {
									crypto = require('crypto');
									if(crypto && crypto.randomBytes) {
										nacl.setPRNG(function (x, n) {
											var i, v = crypto.randomBytes(n);
											for(i = 0; i < n; i++) x[i] = v[i];
											cleanup(v);
										});
									}
								}
							})();
						})(typeof module !== 'undefined' && module.exports ? module.exports : (self.nacl = self.nacl || {}));
					}, {
						"crypto": 169
					}], 166: [function (require, module, exports) {}, {}], 167: [function (require, module, exports) {
						(function (global) {
							'use strict';

							function compare(a, b) {
								if(a === b) {
									return 0;
								}
								var x = a.length;
								var y = b.length;
								for(var i = 0, len = Math.min(x, y); i < len; ++i) {
									if(a[i] !== b[i]) {
										x = a[i];
										y = b[i];
										break;
									}
								}
								if(x < y) {
									return -1;
								}
								if(y < x) {
									return 1;
								}
								return 0;
							}

							function isBuffer(b) {
								if(global.Buffer && typeof global.Buffer.isBuffer === 'function') {
									return global.Buffer.isBuffer(b);
								}
								return !!(b != null && b._isBuffer);
							}
							var util = require('util/');
							var hasOwn = Object.prototype.hasOwnProperty;
							var pSlice = Array.prototype.slice;
							var functionsHaveNames = (function () {
								return function foo() {}.name === 'foo';
							}());

							function pToString(obj) {
								return Object.prototype.toString.call(obj);
							}

							function isView(arrbuf) {
								if(isBuffer(arrbuf)) {
									return false;
								}
								if(typeof global.ArrayBuffer !== 'function') {
									return false;
								}
								if(typeof ArrayBuffer.isView === 'function') {
									return ArrayBuffer.isView(arrbuf);
								}
								if(!arrbuf) {
									return false;
								}
								if(arrbuf instanceof DataView) {
									return true;
								}
								if(arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
									return true;
								}
								return false;
							}
							var assert = module.exports = ok;
							var regex = /\s*function\s+([^\(\s]*)\s*/;

							function getName(func) {
								if(!util.isFunction(func)) {
									return;
								}
								if(functionsHaveNames) {
									return func.name;
								}
								var str = func.toString();
								var match = str.match(regex);
								return match && match[1];
							}
							assert.AssertionError = function AssertionError(options) {
								this.name = 'AssertionError';
								this.actual = options.actual;
								this.expected = options.expected;
								this.operator = options.operator;
								if(options.message) {
									this.message = options.message;
									this.generatedMessage = false;
								} else {
									this.message = getMessage(this);
									this.generatedMessage = true;
								}
								var stackStartFunction = options.stackStartFunction || fail;
								if(Error.captureStackTrace) {
									Error.captureStackTrace(this, stackStartFunction);
								} else {
									var err = new Error();
									if(err.stack) {
										var out = err.stack;
										var fn_name = getName(stackStartFunction);
										var idx = out.indexOf('\n' + fn_name);
										if(idx >= 0) {
											var next_line = out.indexOf('\n', idx + 1);
											out = out.substring(next_line + 1);
										}
										this.stack = out;
									}
								}
							};
							util.inherits(assert.AssertionError, Error);

							function truncate(s, n) {
								if(typeof s === 'string') {
									return s.length < n ? s : s.slice(0, n);
								} else {
									return s;
								}
							}

							function inspect(something) {
								if(functionsHaveNames || !util.isFunction(something)) {
									return util.inspect(something);
								}
								var rawname = getName(something);
								var name = rawname ? ': ' + rawname : '';
								return '[Function' + name + ']';
							}

							function getMessage(self) {
								return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
							}

							function fail(actual, expected, message, operator, stackStartFunction) {
								throw new assert.AssertionError({
									message: message,
									actual: actual,
									expected: expected,
									operator: operator,
									stackStartFunction: stackStartFunction
								});
							}
							assert.fail = fail;

							function ok(value, message) {
								if(!value) fail(value, true, message, '==', assert.ok);
							}
							assert.ok = ok;
							assert.equal = function equal(actual, expected, message) {
								if(actual != expected) fail(actual, expected, message, '==', assert.equal);
							};
							assert.notEqual = function notEqual(actual, expected, message) {
								if(actual == expected) {
									fail(actual, expected, message, '!=', assert.notEqual);
								}
							};
							assert.deepEqual = function deepEqual(actual, expected, message) {
								if(!_deepEqual(actual, expected, false)) {
									fail(actual, expected, message, 'deepEqual', assert.deepEqual);
								}
							};
							assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
								if(!_deepEqual(actual, expected, true)) {
									fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
								}
							};

							function _deepEqual(actual, expected, strict, memos) {
								if(actual === expected) {
									return true;
								} else if(isBuffer(actual) && isBuffer(expected)) {
									return compare(actual, expected) === 0;
								} else if(util.isDate(actual) && util.isDate(expected)) {
									return actual.getTime() === expected.getTime();
								} else if(util.isRegExp(actual) && util.isRegExp(expected)) {
									return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
								} else if((actual === null || typeof actual !== 'object') && (expected === null || typeof expected !== 'object')) {
									return strict ? actual === expected : actual == expected;
								} else if(isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
									return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;
								} else if(isBuffer(actual) !== isBuffer(expected)) {
									return false;
								} else {
									memos = memos || {
										actual: [],
										expected: []
									};
									var actualIndex = memos.actual.indexOf(actual);
									if(actualIndex !== -1) {
										if(actualIndex === memos.expected.indexOf(expected)) {
											return true;
										}
									}
									memos.actual.push(actual);
									memos.expected.push(expected);
									return objEquiv(actual, expected, strict, memos);
								}
							}

							function isArguments(object) {
								return Object.prototype.toString.call(object) == '[object Arguments]';
							}

							function objEquiv(a, b, strict, actualVisitedObjects) {
								if(a === null || a === undefined || b === null || b === undefined) return false;
								if(util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
								if(strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
								var aIsArgs = isArguments(a);
								var bIsArgs = isArguments(b);
								if((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs)) return false;
								if(aIsArgs) {
									a = pSlice.call(a);
									b = pSlice.call(b);
									return _deepEqual(a, b, strict);
								}
								var ka = objectKeys(a);
								var kb = objectKeys(b);
								var key, i;
								if(ka.length !== kb.length) return false;
								ka.sort();
								kb.sort();
								for(i = ka.length - 1; i >= 0; i--) {
									if(ka[i] !== kb[i]) return false;
								}
								for(i = ka.length - 1; i >= 0; i--) {
									key = ka[i];
									if(!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
								}
								return true;
							}
							assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
								if(_deepEqual(actual, expected, false)) {
									fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
								}
							};
							assert.notDeepStrictEqual = notDeepStrictEqual;

							function notDeepStrictEqual(actual, expected, message) {
								if(_deepEqual(actual, expected, true)) {
									fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
								}
							}
							assert.strictEqual = function strictEqual(actual, expected, message) {
								if(actual !== expected) {
									fail(actual, expected, message, '===', assert.strictEqual);
								}
							};
							assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
								if(actual === expected) {
									fail(actual, expected, message, '!==', assert.notStrictEqual);
								}
							};

							function expectedException(actual, expected) {
								if(!actual || !expected) {
									return false;
								}
								if(Object.prototype.toString.call(expected) == '[object RegExp]') {
									return expected.test(actual);
								}
								try {
									if(actual instanceof expected) {
										return true;
									}
								} catch(e) {}
								if(Error.isPrototypeOf(expected)) {
									return false;
								}
								return expected.call({}, actual) === true;
							}

							function _tryBlock(block) {
								var error;
								try {
									block();
								} catch(e) {
									error = e;
								}
								return error;
							}

							function _throws(shouldThrow, block, expected, message) {
								var actual;
								if(typeof block !== 'function') {
									throw new TypeError('"block" argument must be a function');
								}
								if(typeof expected === 'string') {
									message = expected;
									expected = null;
								}
								actual = _tryBlock(block);
								message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
								if(shouldThrow && !actual) {
									fail(actual, expected, 'Missing expected exception' + message);
								}
								var userProvidedMessage = typeof message === 'string';
								var isUnwantedException = !shouldThrow && util.isError(actual);
								var isUnexpectedException = !shouldThrow && actual && !expected;
								if((isUnwantedException && userProvidedMessage && expectedException(actual, expected)) || isUnexpectedException) {
									fail(actual, expected, 'Got unwanted exception' + message);
								}
								if((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) {
									throw actual;
								}
							}
							assert.throws = function (block, error, message) {
								_throws(true, block, error, message);
							};
							assert.doesNotThrow = function (block, error, message) {
								_throws(false, block, error, message);
							};
							assert.ifError = function (err) {
								if(err) throw err;
							};
							var objectKeys = Object.keys || function (obj) {
								var keys = [];
								for(var key in obj) {
									if(hasOwn.call(obj, key)) keys.push(key);
								}
								return keys;
							};
						}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
					}, {
						"util/": 211
					}], 168: [function (require, module, exports) {
						'use strict'
						exports.byteLength = byteLength
						exports.toByteArray = toByteArray
						exports.fromByteArray = fromByteArray
						var lookup = []
						var revLookup = []
						var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
						var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
						for(var i = 0, len = code.length; i < len; ++i) {
							lookup[i] = code[i]
							revLookup[code.charCodeAt(i)] = i
						}
						revLookup['-'.charCodeAt(0)] = 62
						revLookup['_'.charCodeAt(0)] = 63

						function placeHoldersCount(b64) {
							var len = b64.length
							if(len % 4 > 0) {
								throw new Error('Invalid string. Length must be a multiple of 4')
							}
							return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
						}

						function byteLength(b64) {
							return b64.length * 3 / 4 - placeHoldersCount(b64)
						}

						function toByteArray(b64) {
							var i, j, l, tmp, placeHolders, arr
							var len = b64.length
							placeHolders = placeHoldersCount(b64)
							arr = new Arr(len * 3 / 4 - placeHolders)
							l = placeHolders > 0 ? len - 4 : len
							var L = 0
							for(i = 0, j = 0; i < l; i += 4, j += 3) {
								tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
								arr[L++] = (tmp >> 16) & 0xFF
								arr[L++] = (tmp >> 8) & 0xFF
								arr[L++] = tmp & 0xFF
							}
							if(placeHolders === 2) {
								tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
								arr[L++] = tmp & 0xFF
							} else if(placeHolders === 1) {
								tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
								arr[L++] = (tmp >> 8) & 0xFF
								arr[L++] = tmp & 0xFF
							}
							return arr
						}

						function tripletToBase64(num) {
							return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
						}

						function encodeChunk(uint8, start, end) {
							var tmp
							var output = []
							for(var i = start; i < end; i += 3) {
								tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
								output.push(tripletToBase64(tmp))
							}
							return output.join('')
						}

						function fromByteArray(uint8) {
							var tmp
							var len = uint8.length
							var extraBytes = len % 3
							var output = ''
							var parts = []
							var maxChunkLength = 16383
							for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
								parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
							}
							if(extraBytes === 1) {
								tmp = uint8[len - 1]
								output += lookup[tmp >> 2]
								output += lookup[(tmp << 4) & 0x3F]
								output += '=='
							} else if(extraBytes === 2) {
								tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
								output += lookup[tmp >> 10]
								output += lookup[(tmp >> 4) & 0x3F]
								output += lookup[(tmp << 2) & 0x3F]
								output += '='
							}
							parts.push(output)
							return parts.join('')
						}
					}, {}], 169: [function (require, module, exports) {
						arguments[4][166][0].apply(exports, arguments)
					}, {
						"dup": 166
					}], 170: [function (require, module, exports) {
						(function (process, Buffer) {
							var msg = require('pako/lib/zlib/messages');
							var zstream = require('pako/lib/zlib/zstream');
							var zlib_deflate = require('pako/lib/zlib/deflate.js');
							var zlib_inflate = require('pako/lib/zlib/inflate.js');
							var constants = require('pako/lib/zlib/constants');
							for(var key in constants) {
								exports[key] = constants[key];
							}
							exports.NONE = 0;
							exports.DEFLATE = 1;
							exports.INFLATE = 2;
							exports.GZIP = 3;
							exports.GUNZIP = 4;
							exports.DEFLATERAW = 5;
							exports.INFLATERAW = 6;
							exports.UNZIP = 7;

							function Zlib(mode) {
								if(mode < exports.DEFLATE || mode > exports.UNZIP) throw new TypeError("Bad argument");
								this.mode = mode;
								this.init_done = false;
								this.write_in_progress = false;
								this.pending_close = false;
								this.windowBits = 0;
								this.level = 0;
								this.memLevel = 0;
								this.strategy = 0;
								this.dictionary = null;
							}
							Zlib.prototype.init = function (windowBits, level, memLevel, strategy, dictionary) {
								this.windowBits = windowBits;
								this.level = level;
								this.memLevel = memLevel;
								this.strategy = strategy;
								if(this.mode === exports.GZIP || this.mode === exports.GUNZIP) this.windowBits += 16;
								if(this.mode === exports.UNZIP) this.windowBits += 32;
								if(this.mode === exports.DEFLATERAW || this.mode === exports.INFLATERAW) this.windowBits = -this.windowBits;
								this.strm = new zstream();
								switch(this.mode) {
								case exports.DEFLATE:
								case exports.GZIP:
								case exports.DEFLATERAW:
									var status = zlib_deflate.deflateInit2(this.strm, this.level, exports.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
									break;
								case exports.INFLATE:
								case exports.GUNZIP:
								case exports.INFLATERAW:
								case exports.UNZIP:
									var status = zlib_inflate.inflateInit2(this.strm, this.windowBits);
									break;
								default:
									throw new Error("Unknown mode " + this.mode);
								}
								if(status !== exports.Z_OK) {
									this._error(status);
									return;
								}
								this.write_in_progress = false;
								this.init_done = true;
							};
							Zlib.prototype.params = function () {
								throw new Error("deflateParams Not supported");
							};
							Zlib.prototype._writeCheck = function () {
								if(!this.init_done) throw new Error("write before init");
								if(this.mode === exports.NONE) throw new Error("already finalized");
								if(this.write_in_progress) throw new Error("write already in progress");
								if(this.pending_close) throw new Error("close is pending");
							};
							Zlib.prototype.write = function (flush, input, in_off, in_len, out, out_off, out_len) {
								this._writeCheck();
								this.write_in_progress = true;
								var self = this;
								process.nextTick(function () {
									self.write_in_progress = false;
									var res = self._write(flush, input, in_off, in_len, out, out_off, out_len);
									self.callback(res[0], res[1]);
									if(self.pending_close) self.close();
								});
								return this;
							};

							function bufferSet(data, offset) {
								for(var i = 0; i < data.length; i++) {
									this[offset + i] = data[i];
								}
							}
							Zlib.prototype.writeSync = function (flush, input, in_off, in_len, out, out_off, out_len) {
								this._writeCheck();
								return this._write(flush, input, in_off, in_len, out, out_off, out_len);
							};
							Zlib.prototype._write = function (flush, input, in_off, in_len, out, out_off, out_len) {
								this.write_in_progress = true;
								if(flush !== exports.Z_NO_FLUSH && flush !== exports.Z_PARTIAL_FLUSH && flush !== exports.Z_SYNC_FLUSH && flush !== exports.Z_FULL_FLUSH && flush !== exports.Z_FINISH && flush !== exports.Z_BLOCK) {
									throw new Error("Invalid flush value");
								}
								if(input == null) {
									input = new Buffer(0);
									in_len = 0;
									in_off = 0;
								}
								if(out._set) out.set = out._set;
								else out.set = bufferSet;
								var strm = this.strm;
								strm.avail_in = in_len;
								strm.input = input;
								strm.next_in = in_off;
								strm.avail_out = out_len;
								strm.output = out;
								strm.next_out = out_off;
								switch(this.mode) {
								case exports.DEFLATE:
								case exports.GZIP:
								case exports.DEFLATERAW:
									var status = zlib_deflate.deflate(strm, flush);
									break;
								case exports.UNZIP:
								case exports.INFLATE:
								case exports.GUNZIP:
								case exports.INFLATERAW:
									var status = zlib_inflate.inflate(strm, flush);
									break;
								default:
									throw new Error("Unknown mode " + this.mode);
								}
								if(status !== exports.Z_STREAM_END && status !== exports.Z_OK) {
									this._error(status);
								}
								this.write_in_progress = false;
								return [strm.avail_in, strm.avail_out];
							};
							Zlib.prototype.close = function () {
								if(this.write_in_progress) {
									this.pending_close = true;
									return;
								}
								this.pending_close = false;
								if(this.mode === exports.DEFLATE || this.mode === exports.GZIP || this.mode === exports.DEFLATERAW) {
									zlib_deflate.deflateEnd(this.strm);
								} else {
									zlib_inflate.inflateEnd(this.strm);
								}
								this.mode = exports.NONE;
							};
							Zlib.prototype.reset = function () {
								switch(this.mode) {
								case exports.DEFLATE:
								case exports.DEFLATERAW:
									var status = zlib_deflate.deflateReset(this.strm);
									break;
								case exports.INFLATE:
								case exports.INFLATERAW:
									var status = zlib_inflate.inflateReset(this.strm);
									break;
								}
								if(status !== exports.Z_OK) {
									this._error(status);
								}
							};
							Zlib.prototype._error = function (status) {
								this.onerror(msg[status] + ': ' + this.strm.msg, status);
								this.write_in_progress = false;
								if(this.pending_close) this.close();
							};
							exports.Zlib = Zlib;
						}).call(this, require('_process'), require("buffer").Buffer)
					}, {
						"_process": 193,
						"buffer": 173,
						"pako/lib/zlib/constants": 182,
						"pako/lib/zlib/deflate.js": 184,
						"pako/lib/zlib/inflate.js": 186,
						"pako/lib/zlib/messages": 188,
						"pako/lib/zlib/zstream": 190
					}], 171: [function (require, module, exports) {
						(function (process, Buffer) {
							var Transform = require('_stream_transform');
							var binding = require('./binding');
							var util = require('util');
							var assert = require('assert').ok;
							binding.Z_MIN_WINDOWBITS = 8;
							binding.Z_MAX_WINDOWBITS = 15;
							binding.Z_DEFAULT_WINDOWBITS = 15;
							binding.Z_MIN_CHUNK = 64;
							binding.Z_MAX_CHUNK = Infinity;
							binding.Z_DEFAULT_CHUNK = (16 * 1024);
							binding.Z_MIN_MEMLEVEL = 1;
							binding.Z_MAX_MEMLEVEL = 9;
							binding.Z_DEFAULT_MEMLEVEL = 8;
							binding.Z_MIN_LEVEL = -1;
							binding.Z_MAX_LEVEL = 9;
							binding.Z_DEFAULT_LEVEL = binding.Z_DEFAULT_COMPRESSION;
							Object.keys(binding).forEach(function (k) {
								if(k.match(/^Z/)) exports[k] = binding[k];
							});
							exports.codes = {
								Z_OK: binding.Z_OK,
								Z_STREAM_END: binding.Z_STREAM_END,
								Z_NEED_DICT: binding.Z_NEED_DICT,
								Z_ERRNO: binding.Z_ERRNO,
								Z_STREAM_ERROR: binding.Z_STREAM_ERROR,
								Z_DATA_ERROR: binding.Z_DATA_ERROR,
								Z_MEM_ERROR: binding.Z_MEM_ERROR,
								Z_BUF_ERROR: binding.Z_BUF_ERROR,
								Z_VERSION_ERROR: binding.Z_VERSION_ERROR
							};
							Object.keys(exports.codes).forEach(function (k) {
								exports.codes[exports.codes[k]] = k;
							});
							exports.Deflate = Deflate;
							exports.Inflate = Inflate;
							exports.Gzip = Gzip;
							exports.Gunzip = Gunzip;
							exports.DeflateRaw = DeflateRaw;
							exports.InflateRaw = InflateRaw;
							exports.Unzip = Unzip;
							exports.createDeflate = function (o) {
								return new Deflate(o);
							};
							exports.createInflate = function (o) {
								return new Inflate(o);
							};
							exports.createDeflateRaw = function (o) {
								return new DeflateRaw(o);
							};
							exports.createInflateRaw = function (o) {
								return new InflateRaw(o);
							};
							exports.createGzip = function (o) {
								return new Gzip(o);
							};
							exports.createGunzip = function (o) {
								return new Gunzip(o);
							};
							exports.createUnzip = function (o) {
								return new Unzip(o);
							};
							exports.deflate = function (buffer, opts, callback) {
								if(typeof opts === 'function') {
									callback = opts;
									opts = {};
								}
								return zlibBuffer(new Deflate(opts), buffer, callback);
							};
							exports.deflateSync = function (buffer, opts) {
								return zlibBufferSync(new Deflate(opts), buffer);
							};
							exports.gzip = function (buffer, opts, callback) {
								if(typeof opts === 'function') {
									callback = opts;
									opts = {};
								}
								return zlibBuffer(new Gzip(opts), buffer, callback);
							};
							exports.gzipSync = function (buffer, opts) {
								return zlibBufferSync(new Gzip(opts), buffer);
							};
							exports.deflateRaw = function (buffer, opts, callback) {
								if(typeof opts === 'function') {
									callback = opts;
									opts = {};
								}
								return zlibBuffer(new DeflateRaw(opts), buffer, callback);
							};
							exports.deflateRawSync = function (buffer, opts) {
								return zlibBufferSync(new DeflateRaw(opts), buffer);
							};
							exports.unzip = function (buffer, opts, callback) {
								if(typeof opts === 'function') {
									callback = opts;
									opts = {};
								}
								return zlibBuffer(new Unzip(opts), buffer, callback);
							};
							exports.unzipSync = function (buffer, opts) {
								return zlibBufferSync(new Unzip(opts), buffer);
							};
							exports.inflate = function (buffer, opts, callback) {
								if(typeof opts === 'function') {
									callback = opts;
									opts = {};
								}
								return zlibBuffer(new Inflate(opts), buffer, callback);
							};
							exports.inflateSync = function (buffer, opts) {
								return zlibBufferSync(new Inflate(opts), buffer);
							};
							exports.gunzip = function (buffer, opts, callback) {
								if(typeof opts === 'function') {
									callback = opts;
									opts = {};
								}
								return zlibBuffer(new Gunzip(opts), buffer, callback);
							};
							exports.gunzipSync = function (buffer, opts) {
								return zlibBufferSync(new Gunzip(opts), buffer);
							};
							exports.inflateRaw = function (buffer, opts, callback) {
								if(typeof opts === 'function') {
									callback = opts;
									opts = {};
								}
								return zlibBuffer(new InflateRaw(opts), buffer, callback);
							};
							exports.inflateRawSync = function (buffer, opts) {
								return zlibBufferSync(new InflateRaw(opts), buffer);
							};

							function zlibBuffer(engine, buffer, callback) {
								var buffers = [];
								var nread = 0;
								engine.on('error', onError);
								engine.on('end', onEnd);
								engine.end(buffer);
								flow();

								function flow() {
									var chunk;
									while(null !== (chunk = engine.read())) {
										buffers.push(chunk);
										nread += chunk.length;
									}
									engine.once('readable', flow);
								}

								function onError(err) {
									engine.removeListener('end', onEnd);
									engine.removeListener('readable', flow);
									callback(err);
								}

								function onEnd() {
									var buf = Buffer.concat(buffers, nread);
									buffers = [];
									callback(null, buf);
									engine.close();
								}
							}

							function zlibBufferSync(engine, buffer) {
								if(typeof buffer === 'string') buffer = new Buffer(buffer);
								if(!Buffer.isBuffer(buffer)) throw new TypeError('Not a string or buffer');
								var flushFlag = binding.Z_FINISH;
								return engine._processChunk(buffer, flushFlag);
							}

							function Deflate(opts) {
								if(!(this instanceof Deflate)) return new Deflate(opts);
								Zlib.call(this, opts, binding.DEFLATE);
							}

							function Inflate(opts) {
								if(!(this instanceof Inflate)) return new Inflate(opts);
								Zlib.call(this, opts, binding.INFLATE);
							}

							function Gzip(opts) {
								if(!(this instanceof Gzip)) return new Gzip(opts);
								Zlib.call(this, opts, binding.GZIP);
							}

							function Gunzip(opts) {
								if(!(this instanceof Gunzip)) return new Gunzip(opts);
								Zlib.call(this, opts, binding.GUNZIP);
							}

							function DeflateRaw(opts) {
								if(!(this instanceof DeflateRaw)) return new DeflateRaw(opts);
								Zlib.call(this, opts, binding.DEFLATERAW);
							}

							function InflateRaw(opts) {
								if(!(this instanceof InflateRaw)) return new InflateRaw(opts);
								Zlib.call(this, opts, binding.INFLATERAW);
							}

							function Unzip(opts) {
								if(!(this instanceof Unzip)) return new Unzip(opts);
								Zlib.call(this, opts, binding.UNZIP);
							}

							function Zlib(opts, mode) {
								this._opts = opts = opts || {};
								this._chunkSize = opts.chunkSize || exports.Z_DEFAULT_CHUNK;
								Transform.call(this, opts);
								if(opts.flush) {
									if(opts.flush !== binding.Z_NO_FLUSH && opts.flush !== binding.Z_PARTIAL_FLUSH && opts.flush !== binding.Z_SYNC_FLUSH && opts.flush !== binding.Z_FULL_FLUSH && opts.flush !== binding.Z_FINISH && opts.flush !== binding.Z_BLOCK) {
										throw new Error('Invalid flush flag: ' + opts.flush);
									}
								}
								this._flushFlag = opts.flush || binding.Z_NO_FLUSH;
								if(opts.chunkSize) {
									if(opts.chunkSize < exports.Z_MIN_CHUNK || opts.chunkSize > exports.Z_MAX_CHUNK) {
										throw new Error('Invalid chunk size: ' + opts.chunkSize);
									}
								}
								if(opts.windowBits) {
									if(opts.windowBits < exports.Z_MIN_WINDOWBITS || opts.windowBits > exports.Z_MAX_WINDOWBITS) {
										throw new Error('Invalid windowBits: ' + opts.windowBits);
									}
								}
								if(opts.level) {
									if(opts.level < exports.Z_MIN_LEVEL || opts.level > exports.Z_MAX_LEVEL) {
										throw new Error('Invalid compression level: ' + opts.level);
									}
								}
								if(opts.memLevel) {
									if(opts.memLevel < exports.Z_MIN_MEMLEVEL || opts.memLevel > exports.Z_MAX_MEMLEVEL) {
										throw new Error('Invalid memLevel: ' + opts.memLevel);
									}
								}
								if(opts.strategy) {
									if(opts.strategy != exports.Z_FILTERED && opts.strategy != exports.Z_HUFFMAN_ONLY && opts.strategy != exports.Z_RLE && opts.strategy != exports.Z_FIXED && opts.strategy != exports.Z_DEFAULT_STRATEGY) {
										throw new Error('Invalid strategy: ' + opts.strategy);
									}
								}
								if(opts.dictionary) {
									if(!Buffer.isBuffer(opts.dictionary)) {
										throw new Error('Invalid dictionary: it should be a Buffer instance');
									}
								}
								this._binding = new binding.Zlib(mode);
								var self = this;
								this._hadError = false;
								this._binding.onerror = function (message, errno) {
									self._binding = null;
									self._hadError = true;
									var error = new Error(message);
									error.errno = errno;
									error.code = exports.codes[errno];
									self.emit('error', error);
								};
								var level = exports.Z_DEFAULT_COMPRESSION;
								if(typeof opts.level === 'number') level = opts.level;
								var strategy = exports.Z_DEFAULT_STRATEGY;
								if(typeof opts.strategy === 'number') strategy = opts.strategy;
								this._binding.init(opts.windowBits || exports.Z_DEFAULT_WINDOWBITS, level, opts.memLevel || exports.Z_DEFAULT_MEMLEVEL, strategy, opts.dictionary);
								this._buffer = new Buffer(this._chunkSize);
								this._offset = 0;
								this._closed = false;
								this._level = level;
								this._strategy = strategy;
								this.once('end', this.close);
							}
							util.inherits(Zlib, Transform);
							Zlib.prototype.params = function (level, strategy, callback) {
								if(level < exports.Z_MIN_LEVEL || level > exports.Z_MAX_LEVEL) {
									throw new RangeError('Invalid compression level: ' + level);
								}
								if(strategy != exports.Z_FILTERED && strategy != exports.Z_HUFFMAN_ONLY && strategy != exports.Z_RLE && strategy != exports.Z_FIXED && strategy != exports.Z_DEFAULT_STRATEGY) {
									throw new TypeError('Invalid strategy: ' + strategy);
								}
								if(this._level !== level || this._strategy !== strategy) {
									var self = this;
									this.flush(binding.Z_SYNC_FLUSH, function () {
										self._binding.params(level, strategy);
										if(!self._hadError) {
											self._level = level;
											self._strategy = strategy;
											if(callback) callback();
										}
									});
								} else {
									process.nextTick(callback);
								}
							};
							Zlib.prototype.reset = function () {
								return this._binding.reset();
							};
							Zlib.prototype._flush = function (callback) {
								this._transform(new Buffer(0), '', callback);
							};
							Zlib.prototype.flush = function (kind, callback) {
								var ws = this._writableState;
								if(typeof kind === 'function' || (kind === void 0 && !callback)) {
									callback = kind;
									kind = binding.Z_FULL_FLUSH;
								}
								if(ws.ended) {
									if(callback) process.nextTick(callback);
								} else if(ws.ending) {
									if(callback) this.once('end', callback);
								} else if(ws.needDrain) {
									var self = this;
									this.once('drain', function () {
										self.flush(callback);
									});
								} else {
									this._flushFlag = kind;
									this.write(new Buffer(0), '', callback);
								}
							};
							Zlib.prototype.close = function (callback) {
								if(callback) process.nextTick(callback);
								if(this._closed) return;
								this._closed = true;
								this._binding.close();
								var self = this;
								process.nextTick(function () {
									self.emit('close');
								});
							};
							Zlib.prototype._transform = function (chunk, encoding, cb) {
								var flushFlag;
								var ws = this._writableState;
								var ending = ws.ending || ws.ended;
								var last = ending && (!chunk || ws.length === chunk.length);
								if(!chunk === null && !Buffer.isBuffer(chunk)) return cb(new Error('invalid input'));
								if(last) flushFlag = binding.Z_FINISH;
								else {
									flushFlag = this._flushFlag;
									if(chunk.length >= ws.length) {
										this._flushFlag = this._opts.flush || binding.Z_NO_FLUSH;
									}
								}
								var self = this;
								this._processChunk(chunk, flushFlag, cb);
							};
							Zlib.prototype._processChunk = function (chunk, flushFlag, cb) {
								var availInBefore = chunk && chunk.length;
								var availOutBefore = this._chunkSize - this._offset;
								var inOff = 0;
								var self = this;
								var async = typeof cb === 'function';
								if(!async) {
									var buffers = [];
									var nread = 0;
									var error;
									this.on('error', function (er) {
										error = er;
									});
									do {
										var res = this._binding.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore);
									} while (!this._hadError && callback(res[0], res[1]));
									if(this._hadError) {
										throw error;
									}
									var buf = Buffer.concat(buffers, nread);
									this.close();
									return buf;
								}
								var req = this._binding.write(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore);
								req.buffer = chunk;
								req.callback = callback;

								function callback(availInAfter, availOutAfter) {
									if(self._hadError) return;
									var have = availOutBefore - availOutAfter;
									assert(have >= 0, 'have should not go down');
									if(have > 0) {
										var out = self._buffer.slice(self._offset, self._offset + have);
										self._offset += have;
										if(async) {
											self.push(out);
										} else {
											buffers.push(out);
											nread += out.length;
										}
									}
									if(availOutAfter === 0 || self._offset >= self._chunkSize) {
										availOutBefore = self._chunkSize;
										self._offset = 0;
										self._buffer = new Buffer(self._chunkSize);
									}
									if(availOutAfter === 0) {
										inOff += (availInBefore - availInAfter);
										availInBefore = availInAfter;
										if(!async) return true;
										var newReq = self._binding.write(flushFlag, chunk, inOff, availInBefore, self._buffer, self._offset, self._chunkSize);
										newReq.callback = callback;
										newReq.buffer = chunk;
										return;
									}
									if(!async) return false;
									cb();
								}
							};
							util.inherits(Deflate, Zlib);
							util.inherits(Inflate, Zlib);
							util.inherits(Gzip, Zlib);
							util.inherits(Gunzip, Zlib);
							util.inherits(DeflateRaw, Zlib);
							util.inherits(InflateRaw, Zlib);
							util.inherits(Unzip, Zlib);
						}).call(this, require('_process'), require("buffer").Buffer)
					}, {
						"./binding": 170,
						"_process": 193,
						"_stream_transform": 205,
						"assert": 167,
						"buffer": 173,
						"util": 211
					}], 172: [function (require, module, exports) {
						(function (global) {
							'use strict';
							var buffer = require('buffer');
							var Buffer = buffer.Buffer;
							var SlowBuffer = buffer.SlowBuffer;
							var MAX_LEN = buffer.kMaxLength || 2147483647;
							exports.alloc = function alloc(size, fill, encoding) {
								if(typeof Buffer.alloc === 'function') {
									return Buffer.alloc(size, fill, encoding);
								}
								if(typeof encoding === 'number') {
									throw new TypeError('encoding must not be number');
								}
								if(typeof size !== 'number') {
									throw new TypeError('size must be a number');
								}
								if(size > MAX_LEN) {
									throw new RangeError('size is too large');
								}
								var enc = encoding;
								var _fill = fill;
								if(_fill === undefined) {
									enc = undefined;
									_fill = 0;
								}
								var buf = new Buffer(size);
								if(typeof _fill === 'string') {
									var fillBuf = new Buffer(_fill, enc);
									var flen = fillBuf.length;
									var i = -1;
									while(++i < size) {
										buf[i] = fillBuf[i % flen];
									}
								} else {
									buf.fill(_fill);
								}
								return buf;
							}
							exports.allocUnsafe = function allocUnsafe(size) {
								if(typeof Buffer.allocUnsafe === 'function') {
									return Buffer.allocUnsafe(size);
								}
								if(typeof size !== 'number') {
									throw new TypeError('size must be a number');
								}
								if(size > MAX_LEN) {
									throw new RangeError('size is too large');
								}
								return new Buffer(size);
							}
							exports.from = function from(value, encodingOrOffset, length) {
								if(typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
									return Buffer.from(value, encodingOrOffset, length);
								}
								if(typeof value === 'number') {
									throw new TypeError('"value" argument must not be a number');
								}
								if(typeof value === 'string') {
									return new Buffer(value, encodingOrOffset);
								}
								if(typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
									var offset = encodingOrOffset;
									if(arguments.length === 1) {
										return new Buffer(value);
									}
									if(typeof offset === 'undefined') {
										offset = 0;
									}
									var len = length;
									if(typeof len === 'undefined') {
										len = value.byteLength - offset;
									}
									if(offset >= value.byteLength) {
										throw new RangeError('\'offset\' is out of bounds');
									}
									if(len > value.byteLength - offset) {
										throw new RangeError('\'length\' is out of bounds');
									}
									return new Buffer(value.slice(offset, offset + len));
								}
								if(Buffer.isBuffer(value)) {
									var out = new Buffer(value.length);
									value.copy(out, 0, 0, value.length);
									return out;
								}
								if(value) {
									if(Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
										return new Buffer(value);
									}
									if(value.type === 'Buffer' && Array.isArray(value.data)) {
										return new Buffer(value.data);
									}
								}
								throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
							}
							exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
								if(typeof Buffer.allocUnsafeSlow === 'function') {
									return Buffer.allocUnsafeSlow(size);
								}
								if(typeof size !== 'number') {
									throw new TypeError('size must be a number');
								}
								if(size >= MAX_LEN) {
									throw new RangeError('size is too large');
								}
								return new SlowBuffer(size);
							}
						}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
					}, {
						"buffer": 173
					}], 173: [function (require, module, exports) {
						'use strict'
						var base64 = require('base64-js')
						var ieee754 = require('ieee754')
						exports.Buffer = Buffer
						exports.SlowBuffer = SlowBuffer
						exports.INSPECT_MAX_BYTES = 50
						var K_MAX_LENGTH = 0x7fffffff
						exports.kMaxLength = K_MAX_LENGTH
						Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
						if(!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
							console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.')
						}

						function typedArraySupport() {
							try {
								var arr = new Uint8Array(1)
								arr.__proto__ = {
									__proto__: Uint8Array.prototype,
									foo: function () {
										return 42
									}
								}
								return arr.foo() === 42
							} catch(e) {
								return false
							}
						}

						function createBuffer(length) {
							if(length > K_MAX_LENGTH) {
								throw new RangeError('Invalid typed array length')
							}
							var buf = new Uint8Array(length)
							buf.__proto__ = Buffer.prototype
							return buf
						}

						function Buffer(arg, encodingOrOffset, length) {
							if(typeof arg === 'number') {
								if(typeof encodingOrOffset === 'string') {
									throw new Error('If encoding is specified then the first argument must be a string')
								}
								return allocUnsafe(arg)
							}
							return from(arg, encodingOrOffset, length)
						}
						if(typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
							Object.defineProperty(Buffer, Symbol.species, {
								value: null,
								configurable: true,
								enumerable: false,
								writable: false
							})
						}
						Buffer.poolSize = 8192

						function from(value, encodingOrOffset, length) {
							if(typeof value === 'number') {
								throw new TypeError('"value" argument must not be a number')
							}
							if(value instanceof ArrayBuffer) {
								return fromArrayBuffer(value, encodingOrOffset, length)
							}
							if(typeof value === 'string') {
								return fromString(value, encodingOrOffset)
							}
							return fromObject(value)
						}
						Buffer.from = function (value, encodingOrOffset, length) {
							return from(value, encodingOrOffset, length)
						}
						Buffer.prototype.__proto__ = Uint8Array.prototype
						Buffer.__proto__ = Uint8Array

						function assertSize(size) {
							if(typeof size !== 'number') {
								throw new TypeError('"size" argument must be a number')
							} else if(size < 0) {
								throw new RangeError('"size" argument must not be negative')
							}
						}

						function alloc(size, fill, encoding) {
							assertSize(size)
							if(size <= 0) {
								return createBuffer(size)
							}
							if(fill !== undefined) {
								return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill)
							}
							return createBuffer(size)
						}
						Buffer.alloc = function (size, fill, encoding) {
							return alloc(size, fill, encoding)
						}

						function allocUnsafe(size) {
							assertSize(size)
							return createBuffer(size < 0 ? 0 : checked(size) | 0)
						}
						Buffer.allocUnsafe = function (size) {
							return allocUnsafe(size)
						}
						Buffer.allocUnsafeSlow = function (size) {
							return allocUnsafe(size)
						}

						function fromString(string, encoding) {
							if(typeof encoding !== 'string' || encoding === '') {
								encoding = 'utf8'
							}
							if(!Buffer.isEncoding(encoding)) {
								throw new TypeError('"encoding" must be a valid string encoding')
							}
							var length = byteLength(string, encoding) | 0
							var buf = createBuffer(length)
							var actual = buf.write(string, encoding)
							if(actual !== length) {
								buf = buf.slice(0, actual)
							}
							return buf
						}

						function fromArrayLike(array) {
							var length = array.length < 0 ? 0 : checked(array.length) | 0
							var buf = createBuffer(length)
							for(var i = 0; i < length; i += 1) {
								buf[i] = array[i] & 255
							}
							return buf
						}

						function fromArrayBuffer(array, byteOffset, length) {
							if(byteOffset < 0 || array.byteLength < byteOffset) {
								throw new RangeError('\'offset\' is out of bounds')
							}
							if(array.byteLength < byteOffset + (length || 0)) {
								throw new RangeError('\'length\' is out of bounds')
							}
							var buf
							if(byteOffset === undefined && length === undefined) {
								buf = new Uint8Array(array)
							} else if(length === undefined) {
								buf = new Uint8Array(array, byteOffset)
							} else {
								buf = new Uint8Array(array, byteOffset, length)
							}
							buf.__proto__ = Buffer.prototype
							return buf
						}

						function fromObject(obj) {
							if(Buffer.isBuffer(obj)) {
								var len = checked(obj.length) | 0
								var buf = createBuffer(len)
								if(buf.length === 0) {
									return buf
								}
								obj.copy(buf, 0, 0, len)
								return buf
							}
							if(obj) {
								if(isArrayBufferView(obj) || 'length' in obj) {
									if(typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
										return createBuffer(0)
									}
									return fromArrayLike(obj)
								}
								if(obj.type === 'Buffer' && Array.isArray(obj.data)) {
									return fromArrayLike(obj.data)
								}
							}
							throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
						}

						function checked(length) {
							if(length >= K_MAX_LENGTH) {
								throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
							}
							return length | 0
						}

						function SlowBuffer(length) {
							if(+length != length) {
								length = 0
							}
							return Buffer.alloc(+length)
						}
						Buffer.isBuffer = function isBuffer(b) {
							return b != null && b._isBuffer === true
						}
						Buffer.compare = function compare(a, b) {
							if(!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
								throw new TypeError('Arguments must be Buffers')
							}
							if(a === b) return 0
							var x = a.length
							var y = b.length
							for(var i = 0, len = Math.min(x, y); i < len; ++i) {
								if(a[i] !== b[i]) {
									x = a[i]
									y = b[i]
									break
								}
							}
							if(x < y) return -1
							if(y < x) return 1
							return 0
						}
						Buffer.isEncoding = function isEncoding(encoding) {
							switch(String(encoding).toLowerCase()) {
							case 'hex':
							case 'utf8':
							case 'utf-8':
							case 'ascii':
							case 'latin1':
							case 'binary':
							case 'base64':
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
								return true
							default:
								return false
							}
						}
						Buffer.concat = function concat(list, length) {
							if(!Array.isArray(list)) {
								throw new TypeError('"list" argument must be an Array of Buffers')
							}
							if(list.length === 0) {
								return Buffer.alloc(0)
							}
							var i
							if(length === undefined) {
								length = 0
								for(i = 0; i < list.length; ++i) {
									length += list[i].length
								}
							}
							var buffer = Buffer.allocUnsafe(length)
							var pos = 0
							for(i = 0; i < list.length; ++i) {
								var buf = list[i]
								if(!Buffer.isBuffer(buf)) {
									throw new TypeError('"list" argument must be an Array of Buffers')
								}
								buf.copy(buffer, pos)
								pos += buf.length
							}
							return buffer
						}

						function byteLength(string, encoding) {
							if(Buffer.isBuffer(string)) {
								return string.length
							}
							if(isArrayBufferView(string) || string instanceof ArrayBuffer) {
								return string.byteLength
							}
							if(typeof string !== 'string') {
								string = '' + string
							}
							var len = string.length
							if(len === 0) return 0
							var loweredCase = false
							for(;;) {
								switch(encoding) {
								case 'ascii':
								case 'latin1':
								case 'binary':
									return len
								case 'utf8':
								case 'utf-8':
								case undefined:
									return utf8ToBytes(string).length
								case 'ucs2':
								case 'ucs-2':
								case 'utf16le':
								case 'utf-16le':
									return len * 2
								case 'hex':
									return len >>> 1
								case 'base64':
									return base64ToBytes(string).length
								default:
									if(loweredCase) return utf8ToBytes(string).length
									encoding = ('' + encoding).toLowerCase()
									loweredCase = true
								}
							}
						}
						Buffer.byteLength = byteLength

						function slowToString(encoding, start, end) {
							var loweredCase = false
							if(start === undefined || start < 0) {
								start = 0
							}
							if(start > this.length) {
								return ''
							}
							if(end === undefined || end > this.length) {
								end = this.length
							}
							if(end <= 0) {
								return ''
							}
							end >>>= 0
							start >>>= 0
							if(end <= start) {
								return ''
							}
							if(!encoding) encoding = 'utf8'
							while(true) {
								switch(encoding) {
								case 'hex':
									return hexSlice(this, start, end)
								case 'utf8':
								case 'utf-8':
									return utf8Slice(this, start, end)
								case 'ascii':
									return asciiSlice(this, start, end)
								case 'latin1':
								case 'binary':
									return latin1Slice(this, start, end)
								case 'base64':
									return base64Slice(this, start, end)
								case 'ucs2':
								case 'ucs-2':
								case 'utf16le':
								case 'utf-16le':
									return utf16leSlice(this, start, end)
								default:
									if(loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
									encoding = (encoding + '').toLowerCase()
									loweredCase = true
								}
							}
						}
						Buffer.prototype._isBuffer = true

						function swap(b, n, m) {
							var i = b[n]
							b[n] = b[m]
							b[m] = i
						}
						Buffer.prototype.swap16 = function swap16() {
							var len = this.length
							if(len % 2 !== 0) {
								throw new RangeError('Buffer size must be a multiple of 16-bits')
							}
							for(var i = 0; i < len; i += 2) {
								swap(this, i, i + 1)
							}
							return this
						}
						Buffer.prototype.swap32 = function swap32() {
							var len = this.length
							if(len % 4 !== 0) {
								throw new RangeError('Buffer size must be a multiple of 32-bits')
							}
							for(var i = 0; i < len; i += 4) {
								swap(this, i, i + 3)
								swap(this, i + 1, i + 2)
							}
							return this
						}
						Buffer.prototype.swap64 = function swap64() {
							var len = this.length
							if(len % 8 !== 0) {
								throw new RangeError('Buffer size must be a multiple of 64-bits')
							}
							for(var i = 0; i < len; i += 8) {
								swap(this, i, i + 7)
								swap(this, i + 1, i + 6)
								swap(this, i + 2, i + 5)
								swap(this, i + 3, i + 4)
							}
							return this
						}
						Buffer.prototype.toString = function toString() {
							var length = this.length
							if(length === 0) return ''
							if(arguments.length === 0) return utf8Slice(this, 0, length)
							return slowToString.apply(this, arguments)
						}
						Buffer.prototype.equals = function equals(b) {
							if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
							if(this === b) return true
							return Buffer.compare(this, b) === 0
						}
						Buffer.prototype.inspect = function inspect() {
							var str = ''
							var max = exports.INSPECT_MAX_BYTES
							if(this.length > 0) {
								str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
								if(this.length > max) str += ' ... '
							}
							return '<Buffer ' + str + '>'
						}
						Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
							if(!Buffer.isBuffer(target)) {
								throw new TypeError('Argument must be a Buffer')
							}
							if(start === undefined) {
								start = 0
							}
							if(end === undefined) {
								end = target ? target.length : 0
							}
							if(thisStart === undefined) {
								thisStart = 0
							}
							if(thisEnd === undefined) {
								thisEnd = this.length
							}
							if(start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
								throw new RangeError('out of range index')
							}
							if(thisStart >= thisEnd && start >= end) {
								return 0
							}
							if(thisStart >= thisEnd) {
								return -1
							}
							if(start >= end) {
								return 1
							}
							start >>>= 0
							end >>>= 0
							thisStart >>>= 0
							thisEnd >>>= 0
							if(this === target) return 0
							var x = thisEnd - thisStart
							var y = end - start
							var len = Math.min(x, y)
							var thisCopy = this.slice(thisStart, thisEnd)
							var targetCopy = target.slice(start, end)
							for(var i = 0; i < len; ++i) {
								if(thisCopy[i] !== targetCopy[i]) {
									x = thisCopy[i]
									y = targetCopy[i]
									break
								}
							}
							if(x < y) return -1
							if(y < x) return 1
							return 0
						}

						function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
							if(buffer.length === 0) return -1
							if(typeof byteOffset === 'string') {
								encoding = byteOffset
								byteOffset = 0
							} else if(byteOffset > 0x7fffffff) {
								byteOffset = 0x7fffffff
							} else if(byteOffset < -0x80000000) {
								byteOffset = -0x80000000
							}
							byteOffset = +byteOffset
							if(numberIsNaN(byteOffset)) {
								byteOffset = dir ? 0 : (buffer.length - 1)
							}
							if(byteOffset < 0) byteOffset = buffer.length + byteOffset
							if(byteOffset >= buffer.length) {
								if(dir) return -1
								else byteOffset = buffer.length - 1
							} else if(byteOffset < 0) {
								if(dir) byteOffset = 0
								else return -1
							}
							if(typeof val === 'string') {
								val = Buffer.from(val, encoding)
							}
							if(Buffer.isBuffer(val)) {
								if(val.length === 0) {
									return -1
								}
								return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
							} else if(typeof val === 'number') {
								val = val & 0xFF
								if(typeof Uint8Array.prototype.indexOf === 'function') {
									if(dir) {
										return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
									} else {
										return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
									}
								}
								return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
							}
							throw new TypeError('val must be string, number or Buffer')
						}

						function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
							var indexSize = 1
							var arrLength = arr.length
							var valLength = val.length
							if(encoding !== undefined) {
								encoding = String(encoding).toLowerCase()
								if(encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
									if(arr.length < 2 || val.length < 2) {
										return -1
									}
									indexSize = 2
									arrLength /= 2
									valLength /= 2
									byteOffset /= 2
								}
							}

							function read(buf, i) {
								if(indexSize === 1) {
									return buf[i]
								} else {
									return buf.readUInt16BE(i * indexSize)
								}
							}
							var i
							if(dir) {
								var foundIndex = -1
								for(i = byteOffset; i < arrLength; i++) {
									if(read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
										if(foundIndex === -1) foundIndex = i
										if(i - foundIndex + 1 === valLength) return foundIndex * indexSize
									} else {
										if(foundIndex !== -1) i -= i - foundIndex
										foundIndex = -1
									}
								}
							} else {
								if(byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
								for(i = byteOffset; i >= 0; i--) {
									var found = true
									for(var j = 0; j < valLength; j++) {
										if(read(arr, i + j) !== read(val, j)) {
											found = false
											break
										}
									}
									if(found) return i
								}
							}
							return -1
						}
						Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
							return this.indexOf(val, byteOffset, encoding) !== -1
						}
						Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
							return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
						}
						Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
							return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
						}

						function hexWrite(buf, string, offset, length) {
							offset = Number(offset) || 0
							var remaining = buf.length - offset
							if(!length) {
								length = remaining
							} else {
								length = Number(length)
								if(length > remaining) {
									length = remaining
								}
							}
							var strLen = string.length
							if(strLen % 2 !== 0) throw new TypeError('Invalid hex string')
							if(length > strLen / 2) {
								length = strLen / 2
							}
							for(var i = 0; i < length; ++i) {
								var parsed = parseInt(string.substr(i * 2, 2), 16)
								if(numberIsNaN(parsed)) return i
								buf[offset + i] = parsed
							}
							return i
						}

						function utf8Write(buf, string, offset, length) {
							return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
						}

						function asciiWrite(buf, string, offset, length) {
							return blitBuffer(asciiToBytes(string), buf, offset, length)
						}

						function latin1Write(buf, string, offset, length) {
							return asciiWrite(buf, string, offset, length)
						}

						function base64Write(buf, string, offset, length) {
							return blitBuffer(base64ToBytes(string), buf, offset, length)
						}

						function ucs2Write(buf, string, offset, length) {
							return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
						}
						Buffer.prototype.write = function write(string, offset, length, encoding) {
							if(offset === undefined) {
								encoding = 'utf8'
								length = this.length
								offset = 0
							} else if(length === undefined && typeof offset === 'string') {
								encoding = offset
								length = this.length
								offset = 0
							} else if(isFinite(offset)) {
								offset = offset >>> 0
								if(isFinite(length)) {
									length = length >>> 0
									if(encoding === undefined) encoding = 'utf8'
								} else {
									encoding = length
									length = undefined
								}
							} else {
								throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported')
							}
							var remaining = this.length - offset
							if(length === undefined || length > remaining) length = remaining
							if((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
								throw new RangeError('Attempt to write outside buffer bounds')
							}
							if(!encoding) encoding = 'utf8'
							var loweredCase = false
							for(;;) {
								switch(encoding) {
								case 'hex':
									return hexWrite(this, string, offset, length)
								case 'utf8':
								case 'utf-8':
									return utf8Write(this, string, offset, length)
								case 'ascii':
									return asciiWrite(this, string, offset, length)
								case 'latin1':
								case 'binary':
									return latin1Write(this, string, offset, length)
								case 'base64':
									return base64Write(this, string, offset, length)
								case 'ucs2':
								case 'ucs-2':
								case 'utf16le':
								case 'utf-16le':
									return ucs2Write(this, string, offset, length)
								default:
									if(loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
									encoding = ('' + encoding).toLowerCase()
									loweredCase = true
								}
							}
						}
						Buffer.prototype.toJSON = function toJSON() {
							return {
								type: 'Buffer',
								data: Array.prototype.slice.call(this._arr || this, 0)
							}
						}

						function base64Slice(buf, start, end) {
							if(start === 0 && end === buf.length) {
								return base64.fromByteArray(buf)
							} else {
								return base64.fromByteArray(buf.slice(start, end))
							}
						}

						function utf8Slice(buf, start, end) {
							end = Math.min(buf.length, end)
							var res = []
							var i = start
							while(i < end) {
								var firstByte = buf[i]
								var codePoint = null
								var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1
								if(i + bytesPerSequence <= end) {
									var secondByte, thirdByte, fourthByte, tempCodePoint
									switch(bytesPerSequence) {
									case 1:
										if(firstByte < 0x80) {
											codePoint = firstByte
										}
										break
									case 2:
										secondByte = buf[i + 1]
										if((secondByte & 0xC0) === 0x80) {
											tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
											if(tempCodePoint > 0x7F) {
												codePoint = tempCodePoint
											}
										}
										break
									case 3:
										secondByte = buf[i + 1]
										thirdByte = buf[i + 2]
										if((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
											tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
											if(tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
												codePoint = tempCodePoint
											}
										}
										break
									case 4:
										secondByte = buf[i + 1]
										thirdByte = buf[i + 2]
										fourthByte = buf[i + 3]
										if((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
											tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
											if(tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
												codePoint = tempCodePoint
											}
										}
									}
								}
								if(codePoint === null) {
									codePoint = 0xFFFD
									bytesPerSequence = 1
								} else if(codePoint > 0xFFFF) {
									codePoint -= 0x10000
									res.push(codePoint >>> 10 & 0x3FF | 0xD800)
									codePoint = 0xDC00 | codePoint & 0x3FF
								}
								res.push(codePoint)
								i += bytesPerSequence
							}
							return decodeCodePointsArray(res)
						}
						var MAX_ARGUMENTS_LENGTH = 0x1000

						function decodeCodePointsArray(codePoints) {
							var len = codePoints.length
							if(len <= MAX_ARGUMENTS_LENGTH) {
								return String.fromCharCode.apply(String, codePoints)
							}
							var res = ''
							var i = 0
							while(i < len) {
								res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH))
							}
							return res
						}

						function asciiSlice(buf, start, end) {
							var ret = ''
							end = Math.min(buf.length, end)
							for(var i = start; i < end; ++i) {
								ret += String.fromCharCode(buf[i] & 0x7F)
							}
							return ret
						}

						function latin1Slice(buf, start, end) {
							var ret = ''
							end = Math.min(buf.length, end)
							for(var i = start; i < end; ++i) {
								ret += String.fromCharCode(buf[i])
							}
							return ret
						}

						function hexSlice(buf, start, end) {
							var len = buf.length
							if(!start || start < 0) start = 0
							if(!end || end < 0 || end > len) end = len
							var out = ''
							for(var i = start; i < end; ++i) {
								out += toHex(buf[i])
							}
							return out
						}

						function utf16leSlice(buf, start, end) {
							var bytes = buf.slice(start, end)
							var res = ''
							for(var i = 0; i < bytes.length; i += 2) {
								res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
							}
							return res
						}
						Buffer.prototype.slice = function slice(start, end) {
							var len = this.length
							start = ~~start
							end = end === undefined ? len : ~~end
							if(start < 0) {
								start += len
								if(start < 0) start = 0
							} else if(start > len) {
								start = len
							}
							if(end < 0) {
								end += len
								if(end < 0) end = 0
							} else if(end > len) {
								end = len
							}
							if(end < start) end = start
							var newBuf = this.subarray(start, end)
							newBuf.__proto__ = Buffer.prototype
							return newBuf
						}

						function checkOffset(offset, ext, length) {
							if((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
							if(offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
						}
						Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
							offset = offset >>> 0
							byteLength = byteLength >>> 0
							if(!noAssert) checkOffset(offset, byteLength, this.length)
							var val = this[offset]
							var mul = 1
							var i = 0
							while(++i < byteLength && (mul *= 0x100)) {
								val += this[offset + i] * mul
							}
							return val
						}
						Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
							offset = offset >>> 0
							byteLength = byteLength >>> 0
							if(!noAssert) {
								checkOffset(offset, byteLength, this.length)
							}
							var val = this[offset + --byteLength]
							var mul = 1
							while(byteLength > 0 && (mul *= 0x100)) {
								val += this[offset + --byteLength] * mul
							}
							return val
						}
						Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 1, this.length)
							return this[offset]
						}
						Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 2, this.length)
							return this[offset] | (this[offset + 1] << 8)
						}
						Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 2, this.length)
							return(this[offset] << 8) | this[offset + 1]
						}
						Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 4, this.length)
							return((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000)
						}
						Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 4, this.length)
							return(this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3])
						}
						Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
							offset = offset >>> 0
							byteLength = byteLength >>> 0
							if(!noAssert) checkOffset(offset, byteLength, this.length)
							var val = this[offset]
							var mul = 1
							var i = 0
							while(++i < byteLength && (mul *= 0x100)) {
								val += this[offset + i] * mul
							}
							mul *= 0x80
							if(val >= mul) val -= Math.pow(2, 8 * byteLength)
							return val
						}
						Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
							offset = offset >>> 0
							byteLength = byteLength >>> 0
							if(!noAssert) checkOffset(offset, byteLength, this.length)
							var i = byteLength
							var mul = 1
							var val = this[offset + --i]
							while(i > 0 && (mul *= 0x100)) {
								val += this[offset + --i] * mul
							}
							mul *= 0x80
							if(val >= mul) val -= Math.pow(2, 8 * byteLength)
							return val
						}
						Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 1, this.length)
							if(!(this[offset] & 0x80)) return(this[offset])
							return((0xff - this[offset] + 1) * -1)
						}
						Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 2, this.length)
							var val = this[offset] | (this[offset + 1] << 8)
							return(val & 0x8000) ? val | 0xFFFF0000 : val
						}
						Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 2, this.length)
							var val = this[offset + 1] | (this[offset] << 8)
							return(val & 0x8000) ? val | 0xFFFF0000 : val
						}
						Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 4, this.length)
							return(this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24)
						}
						Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 4, this.length)
							return(this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3])
						}
						Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 4, this.length)
							return ieee754.read(this, offset, true, 23, 4)
						}
						Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 4, this.length)
							return ieee754.read(this, offset, false, 23, 4)
						}
						Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 8, this.length)
							return ieee754.read(this, offset, true, 52, 8)
						}
						Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
							offset = offset >>> 0
							if(!noAssert) checkOffset(offset, 8, this.length)
							return ieee754.read(this, offset, false, 52, 8)
						}

						function checkInt(buf, value, offset, ext, max, min) {
							if(!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
							if(value > max || value < min) throw new RangeError('"value" argument is out of bounds')
							if(offset + ext > buf.length) throw new RangeError('Index out of range')
						}
						Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
							value = +value
							offset = offset >>> 0
							byteLength = byteLength >>> 0
							if(!noAssert) {
								var maxBytes = Math.pow(2, 8 * byteLength) - 1
								checkInt(this, value, offset, byteLength, maxBytes, 0)
							}
							var mul = 1
							var i = 0
							this[offset] = value & 0xFF
							while(++i < byteLength && (mul *= 0x100)) {
								this[offset + i] = (value / mul) & 0xFF
							}
							return offset + byteLength
						}
						Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
							value = +value
							offset = offset >>> 0
							byteLength = byteLength >>> 0
							if(!noAssert) {
								var maxBytes = Math.pow(2, 8 * byteLength) - 1
								checkInt(this, value, offset, byteLength, maxBytes, 0)
							}
							var i = byteLength - 1
							var mul = 1
							this[offset + i] = value & 0xFF
							while(--i >= 0 && (mul *= 0x100)) {
								this[offset + i] = (value / mul) & 0xFF
							}
							return offset + byteLength
						}
						Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
							this[offset] = (value & 0xff)
							return offset + 1
						}
						Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
							this[offset] = (value & 0xff)
							this[offset + 1] = (value >>> 8)
							return offset + 2
						}
						Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
							this[offset] = (value >>> 8)
							this[offset + 1] = (value & 0xff)
							return offset + 2
						}
						Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
							this[offset + 3] = (value >>> 24)
							this[offset + 2] = (value >>> 16)
							this[offset + 1] = (value >>> 8)
							this[offset] = (value & 0xff)
							return offset + 4
						}
						Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
							this[offset] = (value >>> 24)
							this[offset + 1] = (value >>> 16)
							this[offset + 2] = (value >>> 8)
							this[offset + 3] = (value & 0xff)
							return offset + 4
						}
						Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) {
								var limit = Math.pow(2, (8 * byteLength) - 1)
								checkInt(this, value, offset, byteLength, limit - 1, -limit)
							}
							var i = 0
							var mul = 1
							var sub = 0
							this[offset] = value & 0xFF
							while(++i < byteLength && (mul *= 0x100)) {
								if(value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
									sub = 1
								}
								this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
							}
							return offset + byteLength
						}
						Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) {
								var limit = Math.pow(2, (8 * byteLength) - 1)
								checkInt(this, value, offset, byteLength, limit - 1, -limit)
							}
							var i = byteLength - 1
							var mul = 1
							var sub = 0
							this[offset + i] = value & 0xFF
							while(--i >= 0 && (mul *= 0x100)) {
								if(value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
									sub = 1
								}
								this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
							}
							return offset + byteLength
						}
						Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
							if(value < 0) value = 0xff + value + 1
							this[offset] = (value & 0xff)
							return offset + 1
						}
						Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
							this[offset] = (value & 0xff)
							this[offset + 1] = (value >>> 8)
							return offset + 2
						}
						Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
							this[offset] = (value >>> 8)
							this[offset + 1] = (value & 0xff)
							return offset + 2
						}
						Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
							this[offset] = (value & 0xff)
							this[offset + 1] = (value >>> 8)
							this[offset + 2] = (value >>> 16)
							this[offset + 3] = (value >>> 24)
							return offset + 4
						}
						Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
							if(value < 0) value = 0xffffffff + value + 1
							this[offset] = (value >>> 24)
							this[offset + 1] = (value >>> 16)
							this[offset + 2] = (value >>> 8)
							this[offset + 3] = (value & 0xff)
							return offset + 4
						}

						function checkIEEE754(buf, value, offset, ext, max, min) {
							if(offset + ext > buf.length) throw new RangeError('Index out of range')
							if(offset < 0) throw new RangeError('Index out of range')
						}

						function writeFloat(buf, value, offset, littleEndian, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) {
								checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
							}
							ieee754.write(buf, value, offset, littleEndian, 23, 4)
							return offset + 4
						}
						Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
							return writeFloat(this, value, offset, true, noAssert)
						}
						Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
							return writeFloat(this, value, offset, false, noAssert)
						}

						function writeDouble(buf, value, offset, littleEndian, noAssert) {
							value = +value
							offset = offset >>> 0
							if(!noAssert) {
								checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
							}
							ieee754.write(buf, value, offset, littleEndian, 52, 8)
							return offset + 8
						}
						Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
							return writeDouble(this, value, offset, true, noAssert)
						}
						Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
							return writeDouble(this, value, offset, false, noAssert)
						}
						Buffer.prototype.copy = function copy(target, targetStart, start, end) {
							if(!start) start = 0
							if(!end && end !== 0) end = this.length
							if(targetStart >= target.length) targetStart = target.length
							if(!targetStart) targetStart = 0
							if(end > 0 && end < start) end = start
							if(end === start) return 0
							if(target.length === 0 || this.length === 0) return 0
							if(targetStart < 0) {
								throw new RangeError('targetStart out of bounds')
							}
							if(start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
							if(end < 0) throw new RangeError('sourceEnd out of bounds')
							if(end > this.length) end = this.length
							if(target.length - targetStart < end - start) {
								end = target.length - targetStart + start
							}
							var len = end - start
							var i
							if(this === target && start < targetStart && targetStart < end) {
								for(i = len - 1; i >= 0; --i) {
									target[i + targetStart] = this[i + start]
								}
							} else if(len < 1000) {
								for(i = 0; i < len; ++i) {
									target[i + targetStart] = this[i + start]
								}
							} else {
								Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart)
							}
							return len
						}
						Buffer.prototype.fill = function fill(val, start, end, encoding) {
							if(typeof val === 'string') {
								if(typeof start === 'string') {
									encoding = start
									start = 0
									end = this.length
								} else if(typeof end === 'string') {
									encoding = end
									end = this.length
								}
								if(val.length === 1) {
									var code = val.charCodeAt(0)
									if(code < 256) {
										val = code
									}
								}
								if(encoding !== undefined && typeof encoding !== 'string') {
									throw new TypeError('encoding must be a string')
								}
								if(typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
									throw new TypeError('Unknown encoding: ' + encoding)
								}
							} else if(typeof val === 'number') {
								val = val & 255
							}
							if(start < 0 || this.length < start || this.length < end) {
								throw new RangeError('Out of range index')
							}
							if(end <= start) {
								return this
							}
							start = start >>> 0
							end = end === undefined ? this.length : end >>> 0
							if(!val) val = 0
							var i
							if(typeof val === 'number') {
								for(i = start; i < end; ++i) {
									this[i] = val
								}
							} else {
								var bytes = Buffer.isBuffer(val) ? val : new Buffer(val, encoding)
								var len = bytes.length
								for(i = 0; i < end - start; ++i) {
									this[i + start] = bytes[i % len]
								}
							}
							return this
						}
						var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

						function base64clean(str) {
							str = str.trim().replace(INVALID_BASE64_RE, '')
							if(str.length < 2) return ''
							while(str.length % 4 !== 0) {
								str = str + '='
							}
							return str
						}

						function toHex(n) {
							if(n < 16) return '0' + n.toString(16)
							return n.toString(16)
						}

						function utf8ToBytes(string, units) {
							units = units || Infinity
							var codePoint
							var length = string.length
							var leadSurrogate = null
							var bytes = []
							for(var i = 0; i < length; ++i) {
								codePoint = string.charCodeAt(i)
								if(codePoint > 0xD7FF && codePoint < 0xE000) {
									if(!leadSurrogate) {
										if(codePoint > 0xDBFF) {
											if((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
											continue
										} else if(i + 1 === length) {
											if((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
											continue
										}
										leadSurrogate = codePoint
										continue
									}
									if(codePoint < 0xDC00) {
										if((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
										leadSurrogate = codePoint
										continue
									}
									codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
								} else if(leadSurrogate) {
									if((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
								}
								leadSurrogate = null
								if(codePoint < 0x80) {
									if((units -= 1) < 0) break
									bytes.push(codePoint)
								} else if(codePoint < 0x800) {
									if((units -= 2) < 0) break
									bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80)
								} else if(codePoint < 0x10000) {
									if((units -= 3) < 0) break
									bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80)
								} else if(codePoint < 0x110000) {
									if((units -= 4) < 0) break
									bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80)
								} else {
									throw new Error('Invalid code point')
								}
							}
							return bytes
						}

						function asciiToBytes(str) {
							var byteArray = []
							for(var i = 0; i < str.length; ++i) {
								byteArray.push(str.charCodeAt(i) & 0xFF)
							}
							return byteArray
						}

						function utf16leToBytes(str, units) {
							var c, hi, lo
							var byteArray = []
							for(var i = 0; i < str.length; ++i) {
								if((units -= 2) < 0) break
								c = str.charCodeAt(i)
								hi = c >> 8
								lo = c % 256
								byteArray.push(lo)
								byteArray.push(hi)
							}
							return byteArray
						}

						function base64ToBytes(str) {
							return base64.toByteArray(base64clean(str))
						}

						function blitBuffer(src, dst, offset, length) {
							for(var i = 0; i < length; ++i) {
								if((i + offset >= dst.length) || (i >= src.length)) break
								dst[i + offset] = src[i]
							}
							return i
						}

						function isArrayBufferView(obj) {
							return(typeof ArrayBuffer.isView === 'function') && ArrayBuffer.isView(obj)
						}

						function numberIsNaN(obj) {
							return obj !== obj
						}
					}, {
						"base64-js": 168,
						"ieee754": 176
					}], 174: [function (require, module, exports) {
						(function (Buffer) {
							function isArray(arg) {
								if(Array.isArray) {
									return Array.isArray(arg);
								}
								return objectToString(arg) === '[object Array]';
							}
							exports.isArray = isArray;

							function isBoolean(arg) {
								return typeof arg === 'boolean';
							}
							exports.isBoolean = isBoolean;

							function isNull(arg) {
								return arg === null;
							}
							exports.isNull = isNull;

							function isNullOrUndefined(arg) {
								return arg == null;
							}
							exports.isNullOrUndefined = isNullOrUndefined;

							function isNumber(arg) {
								return typeof arg === 'number';
							}
							exports.isNumber = isNumber;

							function isString(arg) {
								return typeof arg === 'string';
							}
							exports.isString = isString;

							function isSymbol(arg) {
								return typeof arg === 'symbol';
							}
							exports.isSymbol = isSymbol;

							function isUndefined(arg) {
								return arg === void 0;
							}
							exports.isUndefined = isUndefined;

							function isRegExp(re) {
								return objectToString(re) === '[object RegExp]';
							}
							exports.isRegExp = isRegExp;

							function isObject(arg) {
								return typeof arg === 'object' && arg !== null;
							}
							exports.isObject = isObject;

							function isDate(d) {
								return objectToString(d) === '[object Date]';
							}
							exports.isDate = isDate;

							function isError(e) {
								return(objectToString(e) === '[object Error]' || e instanceof Error);
							}
							exports.isError = isError;

							function isFunction(arg) {
								return typeof arg === 'function';
							}
							exports.isFunction = isFunction;

							function isPrimitive(arg) {
								return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
							}
							exports.isPrimitive = isPrimitive;
							exports.isBuffer = Buffer.isBuffer;

							function objectToString(o) {
								return Object.prototype.toString.call(o);
							}
						}).call(this, {
							"isBuffer": require("../../is-buffer/index.js")
						})
					}, {
						"../../is-buffer/index.js": 178
					}], 175: [function (require, module, exports) {
						function EventEmitter() {
							this._events = this._events || {};
							this._maxListeners = this._maxListeners || undefined;
						}
						module.exports = EventEmitter;
						EventEmitter.EventEmitter = EventEmitter;
						EventEmitter.prototype._events = undefined;
						EventEmitter.prototype._maxListeners = undefined;
						EventEmitter.defaultMaxListeners = 10;
						EventEmitter.prototype.setMaxListeners = function (n) {
							if(!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
							this._maxListeners = n;
							return this;
						};
						EventEmitter.prototype.emit = function (type) {
							var er, handler, len, args, i, listeners;
							if(!this._events) this._events = {};
							if(type === 'error') {
								if(!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
									er = arguments[1];
									if(er instanceof Error) {
										throw er;
									} else {
										var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
										err.context = er;
										throw err;
									}
								}
							}
							handler = this._events[type];
							if(isUndefined(handler)) return false;
							if(isFunction(handler)) {
								switch(arguments.length) {
								case 1:
									handler.call(this);
									break;
								case 2:
									handler.call(this, arguments[1]);
									break;
								case 3:
									handler.call(this, arguments[1], arguments[2]);
									break;
								default:
									args = Array.prototype.slice.call(arguments, 1);
									handler.apply(this, args);
								}
							} else if(isObject(handler)) {
								args = Array.prototype.slice.call(arguments, 1);
								listeners = handler.slice();
								len = listeners.length;
								for(i = 0; i < len; i++) listeners[i].apply(this, args);
							}
							return true;
						};
						EventEmitter.prototype.addListener = function (type, listener) {
							var m;
							if(!isFunction(listener)) throw TypeError('listener must be a function');
							if(!this._events) this._events = {};
							if(this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
							if(!this._events[type]) this._events[type] = listener;
							else if(isObject(this._events[type])) this._events[type].push(listener);
							else this._events[type] = [this._events[type], listener];
							if(isObject(this._events[type]) && !this._events[type].warned) {
								if(!isUndefined(this._maxListeners)) {
									m = this._maxListeners;
								} else {
									m = EventEmitter.defaultMaxListeners;
								}
								if(m && m > 0 && this._events[type].length > m) {
									this._events[type].warned = true;
									console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
									if(typeof console.trace === 'function') {
										console.trace();
									}
								}
							}
							return this;
						};
						EventEmitter.prototype.on = EventEmitter.prototype.addListener;
						EventEmitter.prototype.once = function (type, listener) {
							if(!isFunction(listener)) throw TypeError('listener must be a function');
							var fired = false;

							function g() {
								this.removeListener(type, g);
								if(!fired) {
									fired = true;
									listener.apply(this, arguments);
								}
							}
							g.listener = listener;
							this.on(type, g);
							return this;
						};
						EventEmitter.prototype.removeListener = function (type, listener) {
							var list, position, length, i;
							if(!isFunction(listener)) throw TypeError('listener must be a function');
							if(!this._events || !this._events[type]) return this;
							list = this._events[type];
							length = list.length;
							position = -1;
							if(list === listener || (isFunction(list.listener) && list.listener === listener)) {
								delete this._events[type];
								if(this._events.removeListener) this.emit('removeListener', type, listener);
							} else if(isObject(list)) {
								for(i = length; i-- > 0;) {
									if(list[i] === listener || (list[i].listener && list[i].listener === listener)) {
										position = i;
										break;
									}
								}
								if(position < 0) return this;
								if(list.length === 1) {
									list.length = 0;
									delete this._events[type];
								} else {
									list.splice(position, 1);
								}
								if(this._events.removeListener) this.emit('removeListener', type, listener);
							}
							return this;
						};
						EventEmitter.prototype.removeAllListeners = function (type) {
							var key, listeners;
							if(!this._events) return this;
							if(!this._events.removeListener) {
								if(arguments.length === 0) this._events = {};
								else if(this._events[type]) delete this._events[type];
								return this;
							}
							if(arguments.length === 0) {
								for(key in this._events) {
									if(key === 'removeListener') continue;
									this.removeAllListeners(key);
								}
								this.removeAllListeners('removeListener');
								this._events = {};
								return this;
							}
							listeners = this._events[type];
							if(isFunction(listeners)) {
								this.removeListener(type, listeners);
							} else if(listeners) {
								while(listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
							}
							delete this._events[type];
							return this;
						};
						EventEmitter.prototype.listeners = function (type) {
							var ret;
							if(!this._events || !this._events[type]) ret = [];
							else if(isFunction(this._events[type])) ret = [this._events[type]];
							else ret = this._events[type].slice();
							return ret;
						};
						EventEmitter.prototype.listenerCount = function (type) {
							if(this._events) {
								var evlistener = this._events[type];
								if(isFunction(evlistener)) return 1;
								else if(evlistener) return evlistener.length;
							}
							return 0;
						};
						EventEmitter.listenerCount = function (emitter, type) {
							return emitter.listenerCount(type);
						};

						function isFunction(arg) {
							return typeof arg === 'function';
						}

						function isNumber(arg) {
							return typeof arg === 'number';
						}

						function isObject(arg) {
							return typeof arg === 'object' && arg !== null;
						}

						function isUndefined(arg) {
							return arg === void 0;
						}
					}, {}], 176: [function (require, module, exports) {
						exports.read = function (buffer, offset, isLE, mLen, nBytes) {
							var e, m
							var eLen = nBytes * 8 - mLen - 1
							var eMax = (1 << eLen) - 1
							var eBias = eMax >> 1
							var nBits = -7
							var i = isLE ? (nBytes - 1) : 0
							var d = isLE ? -1 : 1
							var s = buffer[offset + i]
							i += d
							e = s & ((1 << (-nBits)) - 1)
							s >>= (-nBits)
							nBits += eLen
							for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
							m = e & ((1 << (-nBits)) - 1)
							e >>= (-nBits)
							nBits += mLen
							for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
							if(e === 0) {
								e = 1 - eBias
							} else if(e === eMax) {
								return m ? NaN : ((s ? -1 : 1) * Infinity)
							} else {
								m = m + Math.pow(2, mLen)
								e = e - eBias
							}
							return(s ? -1 : 1) * m * Math.pow(2, e - mLen)
						}
						exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
							var e, m, c
							var eLen = nBytes * 8 - mLen - 1
							var eMax = (1 << eLen) - 1
							var eBias = eMax >> 1
							var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
							var i = isLE ? 0 : (nBytes - 1)
							var d = isLE ? 1 : -1
							var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
							value = Math.abs(value)
							if(isNaN(value) || value === Infinity) {
								m = isNaN(value) ? 1 : 0
								e = eMax
							} else {
								e = Math.floor(Math.log(value) / Math.LN2)
								if(value * (c = Math.pow(2, -e)) < 1) {
									e--
									c *= 2
								}
								if(e + eBias >= 1) {
									value += rt / c
								} else {
									value += rt * Math.pow(2, 1 - eBias)
								}
								if(value * c >= 2) {
									e++
									c /= 2
								}
								if(e + eBias >= eMax) {
									m = 0
									e = eMax
								} else if(e + eBias >= 1) {
									m = (value * c - 1) * Math.pow(2, mLen)
									e = e + eBias
								} else {
									m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
									e = 0
								}
							}
							for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
							e = (e << mLen) | m
							eLen += mLen
							for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
							buffer[offset + i - d] |= s * 128
						}
					}, {}], 177: [function (require, module, exports) {
						if(typeof Object.create === 'function') {
							module.exports = function inherits(ctor, superCtor) {
								ctor.super_ = superCtor
								ctor.prototype = Object.create(superCtor.prototype, {
									constructor: {
										value: ctor,
										enumerable: false,
										writable: true,
										configurable: true
									}
								});
							};
						} else {
							module.exports = function inherits(ctor, superCtor) {
								ctor.super_ = superCtor
								var TempCtor = function () {}
								TempCtor.prototype = superCtor.prototype
								ctor.prototype = new TempCtor()
								ctor.prototype.constructor = ctor
							}
						}
					}, {}], 178: [function (require, module, exports) {
						module.exports = function (obj) {
							return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
						}

						function isBuffer(obj) {
							return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
						}

						function isSlowBuffer(obj) {
							return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
						}
					}, {}], 179: [function (require, module, exports) {
						var toString = {}.toString;
						module.exports = Array.isArray || function (arr) {
							return toString.call(arr) == '[object Array]';
						};
					}, {}], 180: [function (require, module, exports) {
						arguments[4][146][0].apply(exports, arguments)
					}, {
						"dup": 146
					}], 181: [function (require, module, exports) {
						arguments[4][148][0].apply(exports, arguments)
					}, {
						"dup": 148
					}], 182: [function (require, module, exports) {
						arguments[4][149][0].apply(exports, arguments)
					}, {
						"dup": 149
					}], 183: [function (require, module, exports) {
						arguments[4][150][0].apply(exports, arguments)
					}, {
						"dup": 150
					}], 184: [function (require, module, exports) {
						arguments[4][151][0].apply(exports, arguments)
					}, {
						"../utils/common": 180,
						"./adler32": 181,
						"./crc32": 183,
						"./messages": 188,
						"./trees": 189,
						"dup": 151
					}], 185: [function (require, module, exports) {
						arguments[4][153][0].apply(exports, arguments)
					}, {
						"dup": 153
					}], 186: [function (require, module, exports) {
						arguments[4][154][0].apply(exports, arguments)
					}, {
						"../utils/common": 180,
						"./adler32": 181,
						"./crc32": 183,
						"./inffast": 185,
						"./inftrees": 187,
						"dup": 154
					}], 187: [function (require, module, exports) {
						'use strict';
						var utils = require('../utils/common');
						var MAXBITS = 15;
						var ENOUGH_LENS = 852;
						var ENOUGH_DISTS = 592;
						var CODES = 0;
						var LENS = 1;
						var DISTS = 2;
						var lbase = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
						var lext = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
						var dbase = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
						var dext = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
						module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
							var bits = opts.bits;
							var len = 0;
							var sym = 0;
							var min = 0,
								max = 0;
							var root = 0;
							var curr = 0;
							var drop = 0;
							var left = 0;
							var used = 0;
							var huff = 0;
							var incr;
							var fill;
							var low;
							var mask;
							var next;
							var base = null;
							var base_index = 0;
							var end;
							var count = new utils.Buf16(MAXBITS + 1);
							var offs = new utils.Buf16(MAXBITS + 1);
							var extra = null;
							var extra_index = 0;
							var here_bits, here_op, here_val;
							for(len = 0; len <= MAXBITS; len++) {
								count[len] = 0;
							}
							for(sym = 0; sym < codes; sym++) {
								count[lens[lens_index + sym]]++;
							}
							root = bits;
							for(max = MAXBITS; max >= 1; max--) {
								if(count[max] !== 0) {
									break;
								}
							}
							if(root > max) {
								root = max;
							}
							if(max === 0) {
								table[table_index++] = (1 << 24) | (64 << 16) | 0;
								table[table_index++] = (1 << 24) | (64 << 16) | 0;
								opts.bits = 1;
								return 0;
							}
							for(min = 1; min < max; min++) {
								if(count[min] !== 0) {
									break;
								}
							}
							if(root < min) {
								root = min;
							}
							left = 1;
							for(len = 1; len <= MAXBITS; len++) {
								left <<= 1;
								left -= count[len];
								if(left < 0) {
									return -1;
								}
							}
							if(left > 0 && (type === CODES || max !== 1)) {
								return -1;
							}
							offs[1] = 0;
							for(len = 1; len < MAXBITS; len++) {
								offs[len + 1] = offs[len] + count[len];
							}
							for(sym = 0; sym < codes; sym++) {
								if(lens[lens_index + sym] !== 0) {
									work[offs[lens[lens_index + sym]]++] = sym;
								}
							}
							if(type === CODES) {
								base = extra = work;
								end = 19;
							} else if(type === LENS) {
								base = lbase;
								base_index -= 257;
								extra = lext;
								extra_index -= 257;
								end = 256;
							} else {
								base = dbase;
								extra = dext;
								end = -1;
							}
							huff = 0;
							sym = 0;
							len = min;
							next = table_index;
							curr = root;
							drop = 0;
							low = -1;
							used = 1 << root;
							mask = used - 1;
							if((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
								return 1;
							}
							var i = 0;
							for(;;) {
								i++;
								here_bits = len - drop;
								if(work[sym] < end) {
									here_op = 0;
									here_val = work[sym];
								} else if(work[sym] > end) {
									here_op = extra[extra_index + work[sym]];
									here_val = base[base_index + work[sym]];
								} else {
									here_op = 32 + 64;
									here_val = 0;
								}
								incr = 1 << (len - drop);
								fill = 1 << curr;
								min = fill;
								do {
									fill -= incr;
									table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val | 0;
								} while (fill !== 0);
								incr = 1 << (len - 1);
								while(huff & incr) {
									incr >>= 1;
								}
								if(incr !== 0) {
									huff &= incr - 1;
									huff += incr;
								} else {
									huff = 0;
								}
								sym++;
								if(--count[len] === 0) {
									if(len === max) {
										break;
									}
									len = lens[lens_index + work[sym]];
								}
								if(len > root && (huff & mask) !== low) {
									if(drop === 0) {
										drop = root;
									}
									next += min;
									curr = len - drop;
									left = 1 << curr;
									while(curr + drop < max) {
										left -= count[curr + drop];
										if(left <= 0) {
											break;
										}
										curr++;
										left <<= 1;
									}
									used += 1 << curr;
									if((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
										return 1;
									}
									low = huff & mask;
									table[low] = (root << 24) | (curr << 16) | (next - table_index) | 0;
								}
							}
							if(huff !== 0) {
								table[next + huff] = ((len - drop) << 24) | (64 << 16) | 0;
							}
							opts.bits = root;
							return 0;
						};
					}, {
						"../utils/common": 180
					}], 188: [function (require, module, exports) {
						arguments[4][156][0].apply(exports, arguments)
					}, {
						"dup": 156
					}], 189: [function (require, module, exports) {
						arguments[4][157][0].apply(exports, arguments)
					}, {
						"../utils/common": 180,
						"dup": 157
					}], 190: [function (require, module, exports) {
						arguments[4][158][0].apply(exports, arguments)
					}, {
						"dup": 158
					}], 191: [function (require, module, exports) {
						(function (process) {
							function normalizeArray(parts, allowAboveRoot) {
								var up = 0;
								for(var i = parts.length - 1; i >= 0; i--) {
									var last = parts[i];
									if(last === '.') {
										parts.splice(i, 1);
									} else if(last === '..') {
										parts.splice(i, 1);
										up++;
									} else if(up) {
										parts.splice(i, 1);
										up--;
									}
								}
								if(allowAboveRoot) {
									for(; up--; up) {
										parts.unshift('..');
									}
								}
								return parts;
							}
							var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
							var splitPath = function (filename) {
								return splitPathRe.exec(filename).slice(1);
							};
							exports.resolve = function () {
								var resolvedPath = '',
									resolvedAbsolute = false;
								for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
									var path = (i >= 0) ? arguments[i] : process.cwd();
									if(typeof path !== 'string') {
										throw new TypeError('Arguments to path.resolve must be strings');
									} else if(!path) {
										continue;
									}
									resolvedPath = path + '/' + resolvedPath;
									resolvedAbsolute = path.charAt(0) === '/';
								}
								resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
									return !!p;
								}), !resolvedAbsolute).join('/');
								return((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
							};
							exports.normalize = function (path) {
								var isAbsolute = exports.isAbsolute(path),
									trailingSlash = substr(path, -1) === '/';
								path = normalizeArray(filter(path.split('/'), function (p) {
									return !!p;
								}), !isAbsolute).join('/');
								if(!path && !isAbsolute) {
									path = '.';
								}
								if(path && trailingSlash) {
									path += '/';
								}
								return(isAbsolute ? '/' : '') + path;
							};
							exports.isAbsolute = function (path) {
								return path.charAt(0) === '/';
							};
							exports.join = function () {
								var paths = Array.prototype.slice.call(arguments, 0);
								return exports.normalize(filter(paths, function (p, index) {
									if(typeof p !== 'string') {
										throw new TypeError('Arguments to path.join must be strings');
									}
									return p;
								}).join('/'));
							};
							exports.relative = function (from, to) {
								from = exports.resolve(from).substr(1);
								to = exports.resolve(to).substr(1);

								function trim(arr) {
									var start = 0;
									for(; start < arr.length; start++) {
										if(arr[start] !== '') break;
									}
									var end = arr.length - 1;
									for(; end >= 0; end--) {
										if(arr[end] !== '') break;
									}
									if(start > end) return [];
									return arr.slice(start, end - start + 1);
								}
								var fromParts = trim(from.split('/'));
								var toParts = trim(to.split('/'));
								var length = Math.min(fromParts.length, toParts.length);
								var samePartsLength = length;
								for(var i = 0; i < length; i++) {
									if(fromParts[i] !== toParts[i]) {
										samePartsLength = i;
										break;
									}
								}
								var outputParts = [];
								for(var i = samePartsLength; i < fromParts.length; i++) {
									outputParts.push('..');
								}
								outputParts = outputParts.concat(toParts.slice(samePartsLength));
								return outputParts.join('/');
							};
							exports.sep = '/';
							exports.delimiter = ':';
							exports.dirname = function (path) {
								var result = splitPath(path),
									root = result[0],
									dir = result[1];
								if(!root && !dir) {
									return '.';
								}
								if(dir) {
									dir = dir.substr(0, dir.length - 1);
								}
								return root + dir;
							};
							exports.basename = function (path, ext) {
								var f = splitPath(path)[2];
								if(ext && f.substr(-1 * ext.length) === ext) {
									f = f.substr(0, f.length - ext.length);
								}
								return f;
							};
							exports.extname = function (path) {
								return splitPath(path)[3];
							};

							function filter(xs, f) {
								if(xs.filter) return xs.filter(f);
								var res = [];
								for(var i = 0; i < xs.length; i++) {
									if(f(xs[i], i, xs)) res.push(xs[i]);
								}
								return res;
							}
							var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
								return str.substr(start, len)
							} : function (str, start, len) {
								if(start < 0) start = str.length + start;
								return str.substr(start, len);
							};
						}).call(this, require('_process'))
					}, {
						"_process": 193
					}], 192: [function (require, module, exports) {
						(function (process) {
							'use strict';
							if(!process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
								module.exports = nextTick;
							} else {
								module.exports = process.nextTick;
							}

							function nextTick(fn, arg1, arg2, arg3) {
								if(typeof fn !== 'function') {
									throw new TypeError('"callback" argument must be a function');
								}
								var len = arguments.length;
								var args, i;
								switch(len) {
								case 0:
								case 1:
									return process.nextTick(fn);
								case 2:
									return process.nextTick(function afterTickOne() {
										fn.call(null, arg1);
									});
								case 3:
									return process.nextTick(function afterTickTwo() {
										fn.call(null, arg1, arg2);
									});
								case 4:
									return process.nextTick(function afterTickThree() {
										fn.call(null, arg1, arg2, arg3);
									});
								default:
									args = new Array(len - 1);
									i = 0;
									while(i < args.length) {
										args[i++] = arguments[i];
									}
									return process.nextTick(function afterTick() {
										fn.apply(null, args);
									});
								}
							}
						}).call(this, require('_process'))
					}, {
						"_process": 193
					}], 193: [function (require, module, exports) {
						var process = module.exports = {};
						var cachedSetTimeout;
						var cachedClearTimeout;

						function defaultSetTimout() {
							throw new Error('setTimeout has not been defined');
						}

						function defaultClearTimeout() {
							throw new Error('clearTimeout has not been defined');
						}
						(function () {
							try {
								if(typeof setTimeout === 'function') {
									cachedSetTimeout = setTimeout;
								} else {
									cachedSetTimeout = defaultSetTimout;
								}
							} catch(e) {
								cachedSetTimeout = defaultSetTimout;
							}
							try {
								if(typeof clearTimeout === 'function') {
									cachedClearTimeout = clearTimeout;
								} else {
									cachedClearTimeout = defaultClearTimeout;
								}
							} catch(e) {
								cachedClearTimeout = defaultClearTimeout;
							}
						}())

						function runTimeout(fun) {
							if(cachedSetTimeout === setTimeout) {
								return setTimeout(fun, 0);
							}
							if((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
								cachedSetTimeout = setTimeout;
								return setTimeout(fun, 0);
							}
							try {
								return cachedSetTimeout(fun, 0);
							} catch(e) {
								try {
									return cachedSetTimeout.call(null, fun, 0);
								} catch(e) {
									return cachedSetTimeout.call(this, fun, 0);
								}
							}
						}

						function runClearTimeout(marker) {
							if(cachedClearTimeout === clearTimeout) {
								return clearTimeout(marker);
							}
							if((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
								cachedClearTimeout = clearTimeout;
								return clearTimeout(marker);
							}
							try {
								return cachedClearTimeout(marker);
							} catch(e) {
								try {
									return cachedClearTimeout.call(null, marker);
								} catch(e) {
									return cachedClearTimeout.call(this, marker);
								}
							}
						}
						var queue = [];
						var draining = false;
						var currentQueue;
						var queueIndex = -1;

						function cleanUpNextTick() {
							if(!draining || !currentQueue) {
								return;
							}
							draining = false;
							if(currentQueue.length) {
								queue = currentQueue.concat(queue);
							} else {
								queueIndex = -1;
							}
							if(queue.length) {
								drainQueue();
							}
						}

						function drainQueue() {
							if(draining) {
								return;
							}
							var timeout = runTimeout(cleanUpNextTick);
							draining = true;
							var len = queue.length;
							while(len) {
								currentQueue = queue;
								queue = [];
								while(++queueIndex < len) {
									if(currentQueue) {
										currentQueue[queueIndex].run();
									}
								}
								queueIndex = -1;
								len = queue.length;
							}
							currentQueue = null;
							draining = false;
							runClearTimeout(timeout);
						}
						process.nextTick = function (fun) {
							var args = new Array(arguments.length - 1);
							if(arguments.length > 1) {
								for(var i = 1; i < arguments.length; i++) {
									args[i - 1] = arguments[i];
								}
							}
							queue.push(new Item(fun, args));
							if(queue.length === 1 && !draining) {
								runTimeout(drainQueue);
							}
						};

						function Item(fun, array) {
							this.fun = fun;
							this.array = array;
						}
						Item.prototype.run = function () {
							this.fun.apply(null, this.array);
						};
						process.title = 'browser';
						process.browser = true;
						process.env = {};
						process.argv = [];
						process.version = '';
						process.versions = {};

						function noop() {}
						process.on = noop;
						process.addListener = noop;
						process.once = noop;
						process.off = noop;
						process.removeListener = noop;
						process.removeAllListeners = noop;
						process.emit = noop;
						process.binding = function (name) {
							throw new Error('process.binding is not supported');
						};
						process.cwd = function () {
							return '/'
						};
						process.chdir = function (dir) {
							throw new Error('process.chdir is not supported');
						};
						process.umask = function () {
							return 0;
						};
					}, {}], 194: [function (require, module, exports) {
						module.exports = require('./lib/_stream_duplex.js');
					}, {
						"./lib/_stream_duplex.js": 195
					}], 195: [function (require, module, exports) {
						'use strict';
						var objectKeys = Object.keys || function (obj) {
							var keys = [];
							for(var key in obj) {
								keys.push(key);
							}
							return keys;
						};
						module.exports = Duplex;
						var processNextTick = require('process-nextick-args');
						var util = require('core-util-is');
						util.inherits = require('inherits');
						var Readable = require('./_stream_readable');
						var Writable = require('./_stream_writable');
						util.inherits(Duplex, Readable);
						var keys = objectKeys(Writable.prototype);
						for(var v = 0; v < keys.length; v++) {
							var method = keys[v];
							if(!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
						}

						function Duplex(options) {
							if(!(this instanceof Duplex)) return new Duplex(options);
							Readable.call(this, options);
							Writable.call(this, options);
							if(options && options.readable === false) this.readable = false;
							if(options && options.writable === false) this.writable = false;
							this.allowHalfOpen = true;
							if(options && options.allowHalfOpen === false) this.allowHalfOpen = false;
							this.once('end', onend);
						}

						function onend() {
							if(this.allowHalfOpen || this._writableState.ended) return;
							processNextTick(onEndNT, this);
						}

						function onEndNT(self) {
							self.end();
						}

						function forEach(xs, f) {
							for(var i = 0, l = xs.length; i < l; i++) {
								f(xs[i], i);
							}
						}
					}, {
						"./_stream_readable": 197,
						"./_stream_writable": 199,
						"core-util-is": 174,
						"inherits": 177,
						"process-nextick-args": 192
					}], 196: [function (require, module, exports) {
						'use strict';
						module.exports = PassThrough;
						var Transform = require('./_stream_transform');
						var util = require('core-util-is');
						util.inherits = require('inherits');
						util.inherits(PassThrough, Transform);

						function PassThrough(options) {
							if(!(this instanceof PassThrough)) return new PassThrough(options);
							Transform.call(this, options);
						}
						PassThrough.prototype._transform = function (chunk, encoding, cb) {
							cb(null, chunk);
						};
					}, {
						"./_stream_transform": 198,
						"core-util-is": 174,
						"inherits": 177
					}], 197: [function (require, module, exports) {
						(function (process) {
							'use strict';
							module.exports = Readable;
							var processNextTick = require('process-nextick-args');
							var isArray = require('isarray');
							var Duplex;
							Readable.ReadableState = ReadableState;
							var EE = require('events').EventEmitter;
							var EElistenerCount = function (emitter, type) {
								return emitter.listeners(type).length;
							};
							var Stream = require('./internal/streams/stream');
							var Buffer = require('buffer').Buffer;
							var bufferShim = require('buffer-shims');
							var util = require('core-util-is');
							util.inherits = require('inherits');
							var debugUtil = require('util');
							var debug = void 0;
							if(debugUtil && debugUtil.debuglog) {
								debug = debugUtil.debuglog('stream');
							} else {
								debug = function () {};
							}
							var BufferList = require('./internal/streams/BufferList');
							var StringDecoder;
							util.inherits(Readable, Stream);
							var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

							function prependListener(emitter, event, fn) {
								if(typeof emitter.prependListener === 'function') {
									return emitter.prependListener(event, fn);
								} else {
									if(!emitter._events || !emitter._events[event]) emitter.on(event, fn);
									else if(isArray(emitter._events[event])) emitter._events[event].unshift(fn);
									else emitter._events[event] = [fn, emitter._events[event]];
								}
							}

							function ReadableState(options, stream) {
								Duplex = Duplex || require('./_stream_duplex');
								options = options || {};
								this.objectMode = !!options.objectMode;
								if(stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
								var hwm = options.highWaterMark;
								var defaultHwm = this.objectMode ? 16 : 16 * 1024;
								this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
								this.highWaterMark = ~~this.highWaterMark;
								this.buffer = new BufferList();
								this.length = 0;
								this.pipes = null;
								this.pipesCount = 0;
								this.flowing = null;
								this.ended = false;
								this.endEmitted = false;
								this.reading = false;
								this.sync = true;
								this.needReadable = false;
								this.emittedReadable = false;
								this.readableListening = false;
								this.resumeScheduled = false;
								this.defaultEncoding = options.defaultEncoding || 'utf8';
								this.ranOut = false;
								this.awaitDrain = 0;
								this.readingMore = false;
								this.decoder = null;
								this.encoding = null;
								if(options.encoding) {
									if(!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
									this.decoder = new StringDecoder(options.encoding);
									this.encoding = options.encoding;
								}
							}

							function Readable(options) {
								Duplex = Duplex || require('./_stream_duplex');
								if(!(this instanceof Readable)) return new Readable(options);
								this._readableState = new ReadableState(options, this);
								this.readable = true;
								if(options && typeof options.read === 'function') this._read = options.read;
								Stream.call(this);
							}
							Readable.prototype.push = function (chunk, encoding) {
								var state = this._readableState;
								if(!state.objectMode && typeof chunk === 'string') {
									encoding = encoding || state.defaultEncoding;
									if(encoding !== state.encoding) {
										chunk = bufferShim.from(chunk, encoding);
										encoding = '';
									}
								}
								return readableAddChunk(this, state, chunk, encoding, false);
							};
							Readable.prototype.unshift = function (chunk) {
								var state = this._readableState;
								return readableAddChunk(this, state, chunk, '', true);
							};
							Readable.prototype.isPaused = function () {
								return this._readableState.flowing === false;
							};

							function readableAddChunk(stream, state, chunk, encoding, addToFront) {
								var er = chunkInvalid(state, chunk);
								if(er) {
									stream.emit('error', er);
								} else if(chunk === null) {
									state.reading = false;
									onEofChunk(stream, state);
								} else if(state.objectMode || chunk && chunk.length > 0) {
									if(state.ended && !addToFront) {
										var e = new Error('stream.push() after EOF');
										stream.emit('error', e);
									} else if(state.endEmitted && addToFront) {
										var _e = new Error('stream.unshift() after end event');
										stream.emit('error', _e);
									} else {
										var skipAdd;
										if(state.decoder && !addToFront && !encoding) {
											chunk = state.decoder.write(chunk);
											skipAdd = !state.objectMode && chunk.length === 0;
										}
										if(!addToFront) state.reading = false;
										if(!skipAdd) {
											if(state.flowing && state.length === 0 && !state.sync) {
												stream.emit('data', chunk);
												stream.read(0);
											} else {
												state.length += state.objectMode ? 1 : chunk.length;
												if(addToFront) state.buffer.unshift(chunk);
												else state.buffer.push(chunk);
												if(state.needReadable) emitReadable(stream);
											}
										}
										maybeReadMore(stream, state);
									}
								} else if(!addToFront) {
									state.reading = false;
								}
								return needMoreData(state);
							}

							function needMoreData(state) {
								return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
							}
							Readable.prototype.setEncoding = function (enc) {
								if(!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
								this._readableState.decoder = new StringDecoder(enc);
								this._readableState.encoding = enc;
								return this;
							};
							var MAX_HWM = 0x800000;

							function computeNewHighWaterMark(n) {
								if(n >= MAX_HWM) {
									n = MAX_HWM;
								} else {
									n--;
									n |= n >>> 1;
									n |= n >>> 2;
									n |= n >>> 4;
									n |= n >>> 8;
									n |= n >>> 16;
									n++;
								}
								return n;
							}

							function howMuchToRead(n, state) {
								if(n <= 0 || state.length === 0 && state.ended) return 0;
								if(state.objectMode) return 1;
								if(n !== n) {
									if(state.flowing && state.length) return state.buffer.head.data.length;
									else return state.length;
								}
								if(n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
								if(n <= state.length) return n;
								if(!state.ended) {
									state.needReadable = true;
									return 0;
								}
								return state.length;
							}
							Readable.prototype.read = function (n) {
								debug('read', n);
								n = parseInt(n, 10);
								var state = this._readableState;
								var nOrig = n;
								if(n !== 0) state.emittedReadable = false;
								if(n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
									debug('read: emitReadable', state.length, state.ended);
									if(state.length === 0 && state.ended) endReadable(this);
									else emitReadable(this);
									return null;
								}
								n = howMuchToRead(n, state);
								if(n === 0 && state.ended) {
									if(state.length === 0) endReadable(this);
									return null;
								}
								var doRead = state.needReadable;
								debug('need readable', doRead);
								if(state.length === 0 || state.length - n < state.highWaterMark) {
									doRead = true;
									debug('length less than watermark', doRead);
								}
								if(state.ended || state.reading) {
									doRead = false;
									debug('reading or ended', doRead);
								} else if(doRead) {
									debug('do read');
									state.reading = true;
									state.sync = true;
									if(state.length === 0) state.needReadable = true;
									this._read(state.highWaterMark);
									state.sync = false;
									if(!state.reading) n = howMuchToRead(nOrig, state);
								}
								var ret;
								if(n > 0) ret = fromList(n, state);
								else ret = null;
								if(ret === null) {
									state.needReadable = true;
									n = 0;
								} else {
									state.length -= n;
								}
								if(state.length === 0) {
									if(!state.ended) state.needReadable = true;
									if(nOrig !== n && state.ended) endReadable(this);
								}
								if(ret !== null) this.emit('data', ret);
								return ret;
							};

							function chunkInvalid(state, chunk) {
								var er = null;
								if(!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
									er = new TypeError('Invalid non-string/buffer chunk');
								}
								return er;
							}

							function onEofChunk(stream, state) {
								if(state.ended) return;
								if(state.decoder) {
									var chunk = state.decoder.end();
									if(chunk && chunk.length) {
										state.buffer.push(chunk);
										state.length += state.objectMode ? 1 : chunk.length;
									}
								}
								state.ended = true;
								emitReadable(stream);
							}

							function emitReadable(stream) {
								var state = stream._readableState;
								state.needReadable = false;
								if(!state.emittedReadable) {
									debug('emitReadable', state.flowing);
									state.emittedReadable = true;
									if(state.sync) processNextTick(emitReadable_, stream);
									else emitReadable_(stream);
								}
							}

							function emitReadable_(stream) {
								debug('emit readable');
								stream.emit('readable');
								flow(stream);
							}

							function maybeReadMore(stream, state) {
								if(!state.readingMore) {
									state.readingMore = true;
									processNextTick(maybeReadMore_, stream, state);
								}
							}

							function maybeReadMore_(stream, state) {
								var len = state.length;
								while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
									debug('maybeReadMore read 0');
									stream.read(0);
									if(len === state.length) break;
									else len = state.length;
								}
								state.readingMore = false;
							}
							Readable.prototype._read = function (n) {
								this.emit('error', new Error('_read() is not implemented'));
							};
							Readable.prototype.pipe = function (dest, pipeOpts) {
								var src = this;
								var state = this._readableState;
								switch(state.pipesCount) {
								case 0:
									state.pipes = dest;
									break;
								case 1:
									state.pipes = [state.pipes, dest];
									break;
								default:
									state.pipes.push(dest);
									break;
								}
								state.pipesCount += 1;
								debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
								var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
								var endFn = doEnd ? onend : cleanup;
								if(state.endEmitted) processNextTick(endFn);
								else src.once('end', endFn);
								dest.on('unpipe', onunpipe);

								function onunpipe(readable) {
									debug('onunpipe');
									if(readable === src) {
										cleanup();
									}
								}

								function onend() {
									debug('onend');
									dest.end();
								}
								var ondrain = pipeOnDrain(src);
								dest.on('drain', ondrain);
								var cleanedUp = false;

								function cleanup() {
									debug('cleanup');
									dest.removeListener('close', onclose);
									dest.removeListener('finish', onfinish);
									dest.removeListener('drain', ondrain);
									dest.removeListener('error', onerror);
									dest.removeListener('unpipe', onunpipe);
									src.removeListener('end', onend);
									src.removeListener('end', cleanup);
									src.removeListener('data', ondata);
									cleanedUp = true;
									if(state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
								}
								var increasedAwaitDrain = false;
								src.on('data', ondata);

								function ondata(chunk) {
									debug('ondata');
									increasedAwaitDrain = false;
									var ret = dest.write(chunk);
									if(false === ret && !increasedAwaitDrain) {
										if((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
											debug('false write response, pause', src._readableState.awaitDrain);
											src._readableState.awaitDrain++;
											increasedAwaitDrain = true;
										}
										src.pause();
									}
								}

								function onerror(er) {
									debug('onerror', er);
									unpipe();
									dest.removeListener('error', onerror);
									if(EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
								}
								prependListener(dest, 'error', onerror);

								function onclose() {
									dest.removeListener('finish', onfinish);
									unpipe();
								}
								dest.once('close', onclose);

								function onfinish() {
									debug('onfinish');
									dest.removeListener('close', onclose);
									unpipe();
								}
								dest.once('finish', onfinish);

								function unpipe() {
									debug('unpipe');
									src.unpipe(dest);
								}
								dest.emit('pipe', src);
								if(!state.flowing) {
									debug('pipe resume');
									src.resume();
								}
								return dest;
							};

							function pipeOnDrain(src) {
								return function () {
									var state = src._readableState;
									debug('pipeOnDrain', state.awaitDrain);
									if(state.awaitDrain) state.awaitDrain--;
									if(state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
										state.flowing = true;
										flow(src);
									}
								};
							}
							Readable.prototype.unpipe = function (dest) {
								var state = this._readableState;
								if(state.pipesCount === 0) return this;
								if(state.pipesCount === 1) {
									if(dest && dest !== state.pipes) return this;
									if(!dest) dest = state.pipes;
									state.pipes = null;
									state.pipesCount = 0;
									state.flowing = false;
									if(dest) dest.emit('unpipe', this);
									return this;
								}
								if(!dest) {
									var dests = state.pipes;
									var len = state.pipesCount;
									state.pipes = null;
									state.pipesCount = 0;
									state.flowing = false;
									for(var i = 0; i < len; i++) {
										dests[i].emit('unpipe', this);
									}
									return this;
								}
								var index = indexOf(state.pipes, dest);
								if(index === -1) return this;
								state.pipes.splice(index, 1);
								state.pipesCount -= 1;
								if(state.pipesCount === 1) state.pipes = state.pipes[0];
								dest.emit('unpipe', this);
								return this;
							};
							Readable.prototype.on = function (ev, fn) {
								var res = Stream.prototype.on.call(this, ev, fn);
								if(ev === 'data') {
									if(this._readableState.flowing !== false) this.resume();
								} else if(ev === 'readable') {
									var state = this._readableState;
									if(!state.endEmitted && !state.readableListening) {
										state.readableListening = state.needReadable = true;
										state.emittedReadable = false;
										if(!state.reading) {
											processNextTick(nReadingNextTick, this);
										} else if(state.length) {
											emitReadable(this, state);
										}
									}
								}
								return res;
							};
							Readable.prototype.addListener = Readable.prototype.on;

							function nReadingNextTick(self) {
								debug('readable nexttick read 0');
								self.read(0);
							}
							Readable.prototype.resume = function () {
								var state = this._readableState;
								if(!state.flowing) {
									debug('resume');
									state.flowing = true;
									resume(this, state);
								}
								return this;
							};

							function resume(stream, state) {
								if(!state.resumeScheduled) {
									state.resumeScheduled = true;
									processNextTick(resume_, stream, state);
								}
							}

							function resume_(stream, state) {
								if(!state.reading) {
									debug('resume read 0');
									stream.read(0);
								}
								state.resumeScheduled = false;
								state.awaitDrain = 0;
								stream.emit('resume');
								flow(stream);
								if(state.flowing && !state.reading) stream.read(0);
							}
							Readable.prototype.pause = function () {
								debug('call pause flowing=%j', this._readableState.flowing);
								if(false !== this._readableState.flowing) {
									debug('pause');
									this._readableState.flowing = false;
									this.emit('pause');
								}
								return this;
							};

							function flow(stream) {
								var state = stream._readableState;
								debug('flow', state.flowing);
								while(state.flowing && stream.read() !== null) {}
							}
							Readable.prototype.wrap = function (stream) {
								var state = this._readableState;
								var paused = false;
								var self = this;
								stream.on('end', function () {
									debug('wrapped end');
									if(state.decoder && !state.ended) {
										var chunk = state.decoder.end();
										if(chunk && chunk.length) self.push(chunk);
									}
									self.push(null);
								});
								stream.on('data', function (chunk) {
									debug('wrapped data');
									if(state.decoder) chunk = state.decoder.write(chunk);
									if(state.objectMode && (chunk === null || chunk === undefined)) return;
									else if(!state.objectMode && (!chunk || !chunk.length)) return;
									var ret = self.push(chunk);
									if(!ret) {
										paused = true;
										stream.pause();
									}
								});
								for(var i in stream) {
									if(this[i] === undefined && typeof stream[i] === 'function') {
										this[i] = function (method) {
											return function () {
												return stream[method].apply(stream, arguments);
											};
										}(i);
									}
								}
								for(var n = 0; n < kProxyEvents.length; n++) {
									stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
								}
								self._read = function (n) {
									debug('wrapped _read', n);
									if(paused) {
										paused = false;
										stream.resume();
									}
								};
								return self;
							};
							Readable._fromList = fromList;

							function fromList(n, state) {
								if(state.length === 0) return null;
								var ret;
								if(state.objectMode) ret = state.buffer.shift();
								else if(!n || n >= state.length) {
									if(state.decoder) ret = state.buffer.join('');
									else if(state.buffer.length === 1) ret = state.buffer.head.data;
									else ret = state.buffer.concat(state.length);
									state.buffer.clear();
								} else {
									ret = fromListPartial(n, state.buffer, state.decoder);
								}
								return ret;
							}

							function fromListPartial(n, list, hasStrings) {
								var ret;
								if(n < list.head.data.length) {
									ret = list.head.data.slice(0, n);
									list.head.data = list.head.data.slice(n);
								} else if(n === list.head.data.length) {
									ret = list.shift();
								} else {
									ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
								}
								return ret;
							}

							function copyFromBufferString(n, list) {
								var p = list.head;
								var c = 1;
								var ret = p.data;
								n -= ret.length;
								while(p = p.next) {
									var str = p.data;
									var nb = n > str.length ? str.length : n;
									if(nb === str.length) ret += str;
									else ret += str.slice(0, n);
									n -= nb;
									if(n === 0) {
										if(nb === str.length) {
											++c;
											if(p.next) list.head = p.next;
											else list.head = list.tail = null;
										} else {
											list.head = p;
											p.data = str.slice(nb);
										}
										break;
									}
									++c;
								}
								list.length -= c;
								return ret;
							}

							function copyFromBuffer(n, list) {
								var ret = bufferShim.allocUnsafe(n);
								var p = list.head;
								var c = 1;
								p.data.copy(ret);
								n -= p.data.length;
								while(p = p.next) {
									var buf = p.data;
									var nb = n > buf.length ? buf.length : n;
									buf.copy(ret, ret.length - n, 0, nb);
									n -= nb;
									if(n === 0) {
										if(nb === buf.length) {
											++c;
											if(p.next) list.head = p.next;
											else list.head = list.tail = null;
										} else {
											list.head = p;
											p.data = buf.slice(nb);
										}
										break;
									}
									++c;
								}
								list.length -= c;
								return ret;
							}

							function endReadable(stream) {
								var state = stream._readableState;
								if(state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
								if(!state.endEmitted) {
									state.ended = true;
									processNextTick(endReadableNT, state, stream);
								}
							}

							function endReadableNT(state, stream) {
								if(!state.endEmitted && state.length === 0) {
									state.endEmitted = true;
									stream.readable = false;
									stream.emit('end');
								}
							}

							function forEach(xs, f) {
								for(var i = 0, l = xs.length; i < l; i++) {
									f(xs[i], i);
								}
							}

							function indexOf(xs, x) {
								for(var i = 0, l = xs.length; i < l; i++) {
									if(xs[i] === x) return i;
								}
								return -1;
							}
						}).call(this, require('_process'))
					}, {
						"./_stream_duplex": 195,
						"./internal/streams/BufferList": 200,
						"./internal/streams/stream": 201,
						"_process": 193,
						"buffer": 173,
						"buffer-shims": 172,
						"core-util-is": 174,
						"events": 175,
						"inherits": 177,
						"isarray": 179,
						"process-nextick-args": 192,
						"string_decoder/": 202,
						"util": 169
					}], 198: [function (require, module, exports) {
						'use strict';
						module.exports = Transform;
						var Duplex = require('./_stream_duplex');
						var util = require('core-util-is');
						util.inherits = require('inherits');
						util.inherits(Transform, Duplex);

						function TransformState(stream) {
							this.afterTransform = function (er, data) {
								return afterTransform(stream, er, data);
							};
							this.needTransform = false;
							this.transforming = false;
							this.writecb = null;
							this.writechunk = null;
							this.writeencoding = null;
						}

						function afterTransform(stream, er, data) {
							var ts = stream._transformState;
							ts.transforming = false;
							var cb = ts.writecb;
							if(!cb) return stream.emit('error', new Error('no writecb in Transform class'));
							ts.writechunk = null;
							ts.writecb = null;
							if(data !== null && data !== undefined) stream.push(data);
							cb(er);
							var rs = stream._readableState;
							rs.reading = false;
							if(rs.needReadable || rs.length < rs.highWaterMark) {
								stream._read(rs.highWaterMark);
							}
						}

						function Transform(options) {
							if(!(this instanceof Transform)) return new Transform(options);
							Duplex.call(this, options);
							this._transformState = new TransformState(this);
							var stream = this;
							this._readableState.needReadable = true;
							this._readableState.sync = false;
							if(options) {
								if(typeof options.transform === 'function') this._transform = options.transform;
								if(typeof options.flush === 'function') this._flush = options.flush;
							}
							this.once('prefinish', function () {
								if(typeof this._flush === 'function') this._flush(function (er, data) {
									done(stream, er, data);
								});
								else done(stream);
							});
						}
						Transform.prototype.push = function (chunk, encoding) {
							this._transformState.needTransform = false;
							return Duplex.prototype.push.call(this, chunk, encoding);
						};
						Transform.prototype._transform = function (chunk, encoding, cb) {
							throw new Error('_transform() is not implemented');
						};
						Transform.prototype._write = function (chunk, encoding, cb) {
							var ts = this._transformState;
							ts.writecb = cb;
							ts.writechunk = chunk;
							ts.writeencoding = encoding;
							if(!ts.transforming) {
								var rs = this._readableState;
								if(ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
							}
						};
						Transform.prototype._read = function (n) {
							var ts = this._transformState;
							if(ts.writechunk !== null && ts.writecb && !ts.transforming) {
								ts.transforming = true;
								this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
							} else {
								ts.needTransform = true;
							}
						};

						function done(stream, er, data) {
							if(er) return stream.emit('error', er);
							if(data !== null && data !== undefined) stream.push(data);
							var ws = stream._writableState;
							var ts = stream._transformState;
							if(ws.length) throw new Error('Calling transform done when ws.length != 0');
							if(ts.transforming) throw new Error('Calling transform done when still transforming');
							return stream.push(null);
						}
					}, {
						"./_stream_duplex": 195,
						"core-util-is": 174,
						"inherits": 177
					}], 199: [function (require, module, exports) {
						(function (process) {
							'use strict';
							module.exports = Writable;
							var processNextTick = require('process-nextick-args');
							var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
							var Duplex;
							Writable.WritableState = WritableState;
							var util = require('core-util-is');
							util.inherits = require('inherits');
							var internalUtil = {
								deprecate: require('util-deprecate')
							};
							var Stream = require('./internal/streams/stream');
							var Buffer = require('buffer').Buffer;
							var bufferShim = require('buffer-shims');
							util.inherits(Writable, Stream);

							function nop() {}

							function WriteReq(chunk, encoding, cb) {
								this.chunk = chunk;
								this.encoding = encoding;
								this.callback = cb;
								this.next = null;
							}

							function WritableState(options, stream) {
								Duplex = Duplex || require('./_stream_duplex');
								options = options || {};
								this.objectMode = !!options.objectMode;
								if(stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
								var hwm = options.highWaterMark;
								var defaultHwm = this.objectMode ? 16 : 16 * 1024;
								this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
								this.highWaterMark = ~~this.highWaterMark;
								this.needDrain = false;
								this.ending = false;
								this.ended = false;
								this.finished = false;
								var noDecode = options.decodeStrings === false;
								this.decodeStrings = !noDecode;
								this.defaultEncoding = options.defaultEncoding || 'utf8';
								this.length = 0;
								this.writing = false;
								this.corked = 0;
								this.sync = true;
								this.bufferProcessing = false;
								this.onwrite = function (er) {
									onwrite(stream, er);
								};
								this.writecb = null;
								this.writelen = 0;
								this.bufferedRequest = null;
								this.lastBufferedRequest = null;
								this.pendingcb = 0;
								this.prefinished = false;
								this.errorEmitted = false;
								this.bufferedRequestCount = 0;
								this.corkedRequestsFree = new CorkedRequest(this);
							}
							WritableState.prototype.getBuffer = function getBuffer() {
								var current = this.bufferedRequest;
								var out = [];
								while(current) {
									out.push(current);
									current = current.next;
								}
								return out;
							};
							(function () {
								try {
									Object.defineProperty(WritableState.prototype, 'buffer', {
										get: internalUtil.deprecate(function () {
											return this.getBuffer();
										}, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
									});
								} catch(_) {}
							})();
							var realHasInstance;
							if(typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
								realHasInstance = Function.prototype[Symbol.hasInstance];
								Object.defineProperty(Writable, Symbol.hasInstance, {
									value: function (object) {
										if(realHasInstance.call(this, object)) return true;
										return object && object._writableState instanceof WritableState;
									}
								});
							} else {
								realHasInstance = function (object) {
									return object instanceof this;
								};
							}

							function Writable(options) {
								Duplex = Duplex || require('./_stream_duplex');
								if(!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
									return new Writable(options);
								}
								this._writableState = new WritableState(options, this);
								this.writable = true;
								if(options) {
									if(typeof options.write === 'function') this._write = options.write;
									if(typeof options.writev === 'function') this._writev = options.writev;
								}
								Stream.call(this);
							}
							Writable.prototype.pipe = function () {
								this.emit('error', new Error('Cannot pipe, not readable'));
							};

							function writeAfterEnd(stream, cb) {
								var er = new Error('write after end');
								stream.emit('error', er);
								processNextTick(cb, er);
							}

							function validChunk(stream, state, chunk, cb) {
								var valid = true;
								var er = false;
								if(chunk === null) {
									er = new TypeError('May not write null values to stream');
								} else if(typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
									er = new TypeError('Invalid non-string/buffer chunk');
								}
								if(er) {
									stream.emit('error', er);
									processNextTick(cb, er);
									valid = false;
								}
								return valid;
							}
							Writable.prototype.write = function (chunk, encoding, cb) {
								var state = this._writableState;
								var ret = false;
								var isBuf = Buffer.isBuffer(chunk);
								if(typeof encoding === 'function') {
									cb = encoding;
									encoding = null;
								}
								if(isBuf) encoding = 'buffer';
								else if(!encoding) encoding = state.defaultEncoding;
								if(typeof cb !== 'function') cb = nop;
								if(state.ended) writeAfterEnd(this, cb);
								else if(isBuf || validChunk(this, state, chunk, cb)) {
									state.pendingcb++;
									ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
								}
								return ret;
							};
							Writable.prototype.cork = function () {
								var state = this._writableState;
								state.corked++;
							};
							Writable.prototype.uncork = function () {
								var state = this._writableState;
								if(state.corked) {
									state.corked--;
									if(!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
								}
							};
							Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
								if(typeof encoding === 'string') encoding = encoding.toLowerCase();
								if(!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
								this._writableState.defaultEncoding = encoding;
								return this;
							};

							function decodeChunk(state, chunk, encoding) {
								if(!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
									chunk = bufferShim.from(chunk, encoding);
								}
								return chunk;
							}

							function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
								if(!isBuf) {
									chunk = decodeChunk(state, chunk, encoding);
									if(Buffer.isBuffer(chunk)) encoding = 'buffer';
								}
								var len = state.objectMode ? 1 : chunk.length;
								state.length += len;
								var ret = state.length < state.highWaterMark;
								if(!ret) state.needDrain = true;
								if(state.writing || state.corked) {
									var last = state.lastBufferedRequest;
									state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
									if(last) {
										last.next = state.lastBufferedRequest;
									} else {
										state.bufferedRequest = state.lastBufferedRequest;
									}
									state.bufferedRequestCount += 1;
								} else {
									doWrite(stream, state, false, len, chunk, encoding, cb);
								}
								return ret;
							}

							function doWrite(stream, state, writev, len, chunk, encoding, cb) {
								state.writelen = len;
								state.writecb = cb;
								state.writing = true;
								state.sync = true;
								if(writev) stream._writev(chunk, state.onwrite);
								else stream._write(chunk, encoding, state.onwrite);
								state.sync = false;
							}

							function onwriteError(stream, state, sync, er, cb) {
								--state.pendingcb;
								if(sync) processNextTick(cb, er);
								else cb(er);
								stream._writableState.errorEmitted = true;
								stream.emit('error', er);
							}

							function onwriteStateUpdate(state) {
								state.writing = false;
								state.writecb = null;
								state.length -= state.writelen;
								state.writelen = 0;
							}

							function onwrite(stream, er) {
								var state = stream._writableState;
								var sync = state.sync;
								var cb = state.writecb;
								onwriteStateUpdate(state);
								if(er) onwriteError(stream, state, sync, er, cb);
								else {
									var finished = needFinish(state);
									if(!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
										clearBuffer(stream, state);
									}
									if(sync) {
										asyncWrite(afterWrite, stream, state, finished, cb);
									} else {
										afterWrite(stream, state, finished, cb);
									}
								}
							}

							function afterWrite(stream, state, finished, cb) {
								if(!finished) onwriteDrain(stream, state);
								state.pendingcb--;
								cb();
								finishMaybe(stream, state);
							}

							function onwriteDrain(stream, state) {
								if(state.length === 0 && state.needDrain) {
									state.needDrain = false;
									stream.emit('drain');
								}
							}

							function clearBuffer(stream, state) {
								state.bufferProcessing = true;
								var entry = state.bufferedRequest;
								if(stream._writev && entry && entry.next) {
									var l = state.bufferedRequestCount;
									var buffer = new Array(l);
									var holder = state.corkedRequestsFree;
									holder.entry = entry;
									var count = 0;
									while(entry) {
										buffer[count] = entry;
										entry = entry.next;
										count += 1;
									}
									doWrite(stream, state, true, state.length, buffer, '', holder.finish);
									state.pendingcb++;
									state.lastBufferedRequest = null;
									if(holder.next) {
										state.corkedRequestsFree = holder.next;
										holder.next = null;
									} else {
										state.corkedRequestsFree = new CorkedRequest(state);
									}
								} else {
									while(entry) {
										var chunk = entry.chunk;
										var encoding = entry.encoding;
										var cb = entry.callback;
										var len = state.objectMode ? 1 : chunk.length;
										doWrite(stream, state, false, len, chunk, encoding, cb);
										entry = entry.next;
										if(state.writing) {
											break;
										}
									}
									if(entry === null) state.lastBufferedRequest = null;
								}
								state.bufferedRequestCount = 0;
								state.bufferedRequest = entry;
								state.bufferProcessing = false;
							}
							Writable.prototype._write = function (chunk, encoding, cb) {
								cb(new Error('_write() is not implemented'));
							};
							Writable.prototype._writev = null;
							Writable.prototype.end = function (chunk, encoding, cb) {
								var state = this._writableState;
								if(typeof chunk === 'function') {
									cb = chunk;
									chunk = null;
									encoding = null;
								} else if(typeof encoding === 'function') {
									cb = encoding;
									encoding = null;
								}
								if(chunk !== null && chunk !== undefined) this.write(chunk, encoding);
								if(state.corked) {
									state.corked = 1;
									this.uncork();
								}
								if(!state.ending && !state.finished) endWritable(this, state, cb);
							};

							function needFinish(state) {
								return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
							}

							function prefinish(stream, state) {
								if(!state.prefinished) {
									state.prefinished = true;
									stream.emit('prefinish');
								}
							}

							function finishMaybe(stream, state) {
								var need = needFinish(state);
								if(need) {
									if(state.pendingcb === 0) {
										prefinish(stream, state);
										state.finished = true;
										stream.emit('finish');
									} else {
										prefinish(stream, state);
									}
								}
								return need;
							}

							function endWritable(stream, state, cb) {
								state.ending = true;
								finishMaybe(stream, state);
								if(cb) {
									if(state.finished) processNextTick(cb);
									else stream.once('finish', cb);
								}
								state.ended = true;
								stream.writable = false;
							}

							function CorkedRequest(state) {
								var _this = this;
								this.next = null;
								this.entry = null;
								this.finish = function (err) {
									var entry = _this.entry;
									_this.entry = null;
									while(entry) {
										var cb = entry.callback;
										state.pendingcb--;
										cb(err);
										entry = entry.next;
									}
									if(state.corkedRequestsFree) {
										state.corkedRequestsFree.next = _this;
									} else {
										state.corkedRequestsFree = _this;
									}
								};
							}
						}).call(this, require('_process'))
					}, {
						"./_stream_duplex": 195,
						"./internal/streams/stream": 201,
						"_process": 193,
						"buffer": 173,
						"buffer-shims": 172,
						"core-util-is": 174,
						"inherits": 177,
						"process-nextick-args": 192,
						"util-deprecate": 208
					}], 200: [function (require, module, exports) {
						'use strict';
						var Buffer = require('buffer').Buffer;
						var bufferShim = require('buffer-shims');
						module.exports = BufferList;

						function BufferList() {
							this.head = null;
							this.tail = null;
							this.length = 0;
						}
						BufferList.prototype.push = function (v) {
							var entry = {
								data: v,
								next: null
							};
							if(this.length > 0) this.tail.next = entry;
							else this.head = entry;
							this.tail = entry;
							++this.length;
						};
						BufferList.prototype.unshift = function (v) {
							var entry = {
								data: v,
								next: this.head
							};
							if(this.length === 0) this.tail = entry;
							this.head = entry;
							++this.length;
						};
						BufferList.prototype.shift = function () {
							if(this.length === 0) return;
							var ret = this.head.data;
							if(this.length === 1) this.head = this.tail = null;
							else this.head = this.head.next;
							--this.length;
							return ret;
						};
						BufferList.prototype.clear = function () {
							this.head = this.tail = null;
							this.length = 0;
						};
						BufferList.prototype.join = function (s) {
							if(this.length === 0) return '';
							var p = this.head;
							var ret = '' + p.data;
							while(p = p.next) {
								ret += s + p.data;
							}
							return ret;
						};
						BufferList.prototype.concat = function (n) {
							if(this.length === 0) return bufferShim.alloc(0);
							if(this.length === 1) return this.head.data;
							var ret = bufferShim.allocUnsafe(n >>> 0);
							var p = this.head;
							var i = 0;
							while(p) {
								p.data.copy(ret, i);
								i += p.data.length;
								p = p.next;
							}
							return ret;
						};
					}, {
						"buffer": 173,
						"buffer-shims": 172
					}], 201: [function (require, module, exports) {
						module.exports = require('events').EventEmitter;
					}, {
						"events": 175
					}], 202: [function (require, module, exports) {
						'use strict';
						var Buffer = require('buffer').Buffer;
						var bufferShim = require('buffer-shims');
						var isEncoding = Buffer.isEncoding || function (encoding) {
							encoding = '' + encoding;
							switch(encoding && encoding.toLowerCase()) {
							case 'hex':
							case 'utf8':
							case 'utf-8':
							case 'ascii':
							case 'binary':
							case 'base64':
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
							case 'raw':
								return true;
							default:
								return false;
							}
						};

						function _normalizeEncoding(enc) {
							if(!enc) return 'utf8';
							var retried;
							while(true) {
								switch(enc) {
								case 'utf8':
								case 'utf-8':
									return 'utf8';
								case 'ucs2':
								case 'ucs-2':
								case 'utf16le':
								case 'utf-16le':
									return 'utf16le';
								case 'latin1':
								case 'binary':
									return 'latin1';
								case 'base64':
								case 'ascii':
								case 'hex':
									return enc;
								default:
									if(retried) return;
									enc = ('' + enc).toLowerCase();
									retried = true;
								}
							}
						};

						function normalizeEncoding(enc) {
							var nenc = _normalizeEncoding(enc);
							if(typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
							return nenc || enc;
						}
						exports.StringDecoder = StringDecoder;

						function StringDecoder(encoding) {
							this.encoding = normalizeEncoding(encoding);
							var nb;
							switch(this.encoding) {
							case 'utf16le':
								this.text = utf16Text;
								this.end = utf16End;
								nb = 4;
								break;
							case 'utf8':
								this.fillLast = utf8FillLast;
								nb = 4;
								break;
							case 'base64':
								this.text = base64Text;
								this.end = base64End;
								nb = 3;
								break;
							default:
								this.write = simpleWrite;
								this.end = simpleEnd;
								return;
							}
							this.lastNeed = 0;
							this.lastTotal = 0;
							this.lastChar = bufferShim.allocUnsafe(nb);
						}
						StringDecoder.prototype.write = function (buf) {
							if(buf.length === 0) return '';
							var r;
							var i;
							if(this.lastNeed) {
								r = this.fillLast(buf);
								if(r === undefined) return '';
								i = this.lastNeed;
								this.lastNeed = 0;
							} else {
								i = 0;
							}
							if(i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
							return r || '';
						};
						StringDecoder.prototype.end = utf8End;
						StringDecoder.prototype.text = utf8Text;
						StringDecoder.prototype.fillLast = function (buf) {
							if(this.lastNeed <= buf.length) {
								buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
								return this.lastChar.toString(this.encoding, 0, this.lastTotal);
							}
							buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
							this.lastNeed -= buf.length;
						};

						function utf8CheckByte(byte) {
							if(byte <= 0x7F) return 0;
							else if(byte >> 5 === 0x06) return 2;
							else if(byte >> 4 === 0x0E) return 3;
							else if(byte >> 3 === 0x1E) return 4;
							return -1;
						}

						function utf8CheckIncomplete(self, buf, i) {
							var j = buf.length - 1;
							if(j < i) return 0;
							var nb = utf8CheckByte(buf[j]);
							if(nb >= 0) {
								if(nb > 0) self.lastNeed = nb - 1;
								return nb;
							}
							if(--j < i) return 0;
							nb = utf8CheckByte(buf[j]);
							if(nb >= 0) {
								if(nb > 0) self.lastNeed = nb - 2;
								return nb;
							}
							if(--j < i) return 0;
							nb = utf8CheckByte(buf[j]);
							if(nb >= 0) {
								if(nb > 0) {
									if(nb === 2) nb = 0;
									else self.lastNeed = nb - 3;
								}
								return nb;
							}
							return 0;
						}

						function utf8CheckExtraBytes(self, buf, p) {
							if((buf[0] & 0xC0) !== 0x80) {
								self.lastNeed = 0;
								return '\ufffd'.repeat(p);
							}
							if(self.lastNeed > 1 && buf.length > 1) {
								if((buf[1] & 0xC0) !== 0x80) {
									self.lastNeed = 1;
									return '\ufffd'.repeat(p + 1);
								}
								if(self.lastNeed > 2 && buf.length > 2) {
									if((buf[2] & 0xC0) !== 0x80) {
										self.lastNeed = 2;
										return '\ufffd'.repeat(p + 2);
									}
								}
							}
						}

						function utf8FillLast(buf) {
							var p = this.lastTotal - this.lastNeed;
							var r = utf8CheckExtraBytes(this, buf, p);
							if(r !== undefined) return r;
							if(this.lastNeed <= buf.length) {
								buf.copy(this.lastChar, p, 0, this.lastNeed);
								return this.lastChar.toString(this.encoding, 0, this.lastTotal);
							}
							buf.copy(this.lastChar, p, 0, buf.length);
							this.lastNeed -= buf.length;
						}

						function utf8Text(buf, i) {
							var total = utf8CheckIncomplete(this, buf, i);
							if(!this.lastNeed) return buf.toString('utf8', i);
							this.lastTotal = total;
							var end = buf.length - (total - this.lastNeed);
							buf.copy(this.lastChar, 0, end);
							return buf.toString('utf8', i, end);
						}

						function utf8End(buf) {
							var r = buf && buf.length ? this.write(buf) : '';
							if(this.lastNeed) return r + '\ufffd'.repeat(this.lastTotal - this.lastNeed);
							return r;
						}

						function utf16Text(buf, i) {
							if((buf.length - i) % 2 === 0) {
								var r = buf.toString('utf16le', i);
								if(r) {
									var c = r.charCodeAt(r.length - 1);
									if(c >= 0xD800 && c <= 0xDBFF) {
										this.lastNeed = 2;
										this.lastTotal = 4;
										this.lastChar[0] = buf[buf.length - 2];
										this.lastChar[1] = buf[buf.length - 1];
										return r.slice(0, -1);
									}
								}
								return r;
							}
							this.lastNeed = 1;
							this.lastTotal = 2;
							this.lastChar[0] = buf[buf.length - 1];
							return buf.toString('utf16le', i, buf.length - 1);
						}

						function utf16End(buf) {
							var r = buf && buf.length ? this.write(buf) : '';
							if(this.lastNeed) {
								var end = this.lastTotal - this.lastNeed;
								return r + this.lastChar.toString('utf16le', 0, end);
							}
							return r;
						}

						function base64Text(buf, i) {
							var n = (buf.length - i) % 3;
							if(n === 0) return buf.toString('base64', i);
							this.lastNeed = 3 - n;
							this.lastTotal = 3;
							if(n === 1) {
								this.lastChar[0] = buf[buf.length - 1];
							} else {
								this.lastChar[0] = buf[buf.length - 2];
								this.lastChar[1] = buf[buf.length - 1];
							}
							return buf.toString('base64', i, buf.length - n);
						}

						function base64End(buf) {
							var r = buf && buf.length ? this.write(buf) : '';
							if(this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
							return r;
						}

						function simpleWrite(buf) {
							return buf.toString(this.encoding);
						}

						function simpleEnd(buf) {
							return buf && buf.length ? this.write(buf) : '';
						}
					}, {
						"buffer": 173,
						"buffer-shims": 172
					}], 203: [function (require, module, exports) {
						module.exports = require('./readable').PassThrough
					}, {
						"./readable": 204
					}], 204: [function (require, module, exports) {
						exports = module.exports = require('./lib/_stream_readable.js');
						exports.Stream = exports;
						exports.Readable = exports;
						exports.Writable = require('./lib/_stream_writable.js');
						exports.Duplex = require('./lib/_stream_duplex.js');
						exports.Transform = require('./lib/_stream_transform.js');
						exports.PassThrough = require('./lib/_stream_passthrough.js');
					}, {
						"./lib/_stream_duplex.js": 195,
						"./lib/_stream_passthrough.js": 196,
						"./lib/_stream_readable.js": 197,
						"./lib/_stream_transform.js": 198,
						"./lib/_stream_writable.js": 199
					}], 205: [function (require, module, exports) {
						module.exports = require('./readable').Transform
					}, {
						"./readable": 204
					}], 206: [function (require, module, exports) {
						module.exports = require('./lib/_stream_writable.js');
					}, {
						"./lib/_stream_writable.js": 199
					}], 207: [function (require, module, exports) {
						module.exports = Stream;
						var EE = require('events').EventEmitter;
						var inherits = require('inherits');
						inherits(Stream, EE);
						Stream.Readable = require('readable-stream/readable.js');
						Stream.Writable = require('readable-stream/writable.js');
						Stream.Duplex = require('readable-stream/duplex.js');
						Stream.Transform = require('readable-stream/transform.js');
						Stream.PassThrough = require('readable-stream/passthrough.js');
						Stream.Stream = Stream;

						function Stream() {
							EE.call(this);
						}
						Stream.prototype.pipe = function (dest, options) {
							var source = this;

							function ondata(chunk) {
								if(dest.writable) {
									if(false === dest.write(chunk) && source.pause) {
										source.pause();
									}
								}
							}
							source.on('data', ondata);

							function ondrain() {
								if(source.readable && source.resume) {
									source.resume();
								}
							}
							dest.on('drain', ondrain);
							if(!dest._isStdio && (!options || options.end !== false)) {
								source.on('end', onend);
								source.on('close', onclose);
							}
							var didOnEnd = false;

							function onend() {
								if(didOnEnd) return;
								didOnEnd = true;
								dest.end();
							}

							function onclose() {
								if(didOnEnd) return;
								didOnEnd = true;
								if(typeof dest.destroy === 'function') dest.destroy();
							}

							function onerror(er) {
								cleanup();
								if(EE.listenerCount(this, 'error') === 0) {
									throw er;
								}
							}
							source.on('error', onerror);
							dest.on('error', onerror);

							function cleanup() {
								source.removeListener('data', ondata);
								dest.removeListener('drain', ondrain);
								source.removeListener('end', onend);
								source.removeListener('close', onclose);
								source.removeListener('error', onerror);
								dest.removeListener('error', onerror);
								source.removeListener('end', cleanup);
								source.removeListener('close', cleanup);
								dest.removeListener('close', cleanup);
							}
							source.on('end', cleanup);
							source.on('close', cleanup);
							dest.on('close', cleanup);
							dest.emit('pipe', source);
							return dest;
						};
					}, {
						"events": 175,
						"inherits": 177,
						"readable-stream/duplex.js": 194,
						"readable-stream/passthrough.js": 203,
						"readable-stream/readable.js": 204,
						"readable-stream/transform.js": 205,
						"readable-stream/writable.js": 206
					}], 208: [function (require, module, exports) {
						(function (global) {
							module.exports = deprecate;

							function deprecate(fn, msg) {
								if(config('noDeprecation')) {
									return fn;
								}
								var warned = false;

								function deprecated() {
									if(!warned) {
										if(config('throwDeprecation')) {
											throw new Error(msg);
										} else if(config('traceDeprecation')) {
											console.trace(msg);
										} else {
											console.warn(msg);
										}
										warned = true;
									}
									return fn.apply(this, arguments);
								}
								return deprecated;
							}

							function config(name) {
								try {
									if(!global.localStorage) return false;
								} catch(_) {
									return false;
								}
								var val = global.localStorage[name];
								if(null == val) return false;
								return String(val).toLowerCase() === 'true';
							}
						}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
					}, {}], 209: [function (require, module, exports) {
						arguments[4][177][0].apply(exports, arguments)
					}, {
						"dup": 177
					}], 210: [function (require, module, exports) {
						module.exports = function isBuffer(arg) {
							return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
						}
					}, {}], 211: [function (require, module, exports) {
						(function (process, global) {
							var formatRegExp = /%[sdj%]/g;
							exports.format = function (f) {
								if(!isString(f)) {
									var objects = [];
									for(var i = 0; i < arguments.length; i++) {
										objects.push(inspect(arguments[i]));
									}
									return objects.join(' ');
								}
								var i = 1;
								var args = arguments;
								var len = args.length;
								var str = String(f).replace(formatRegExp, function (x) {
									if(x === '%%') return '%';
									if(i >= len) return x;
									switch(x) {
									case '%s':
										return String(args[i++]);
									case '%d':
										return Number(args[i++]);
									case '%j':
										try {
											return JSON.stringify(args[i++]);
										} catch(_) {
											return '[Circular]';
										}
									default:
										return x;
									}
								});
								for(var x = args[i]; i < len; x = args[++i]) {
									if(isNull(x) || !isObject(x)) {
										str += ' ' + x;
									} else {
										str += ' ' + inspect(x);
									}
								}
								return str;
							};
							exports.deprecate = function (fn, msg) {
								if(isUndefined(global.process)) {
									return function () {
										return exports.deprecate(fn, msg).apply(this, arguments);
									};
								}
								if(process.noDeprecation === true) {
									return fn;
								}
								var warned = false;

								function deprecated() {
									if(!warned) {
										if(process.throwDeprecation) {
											throw new Error(msg);
										} else if(process.traceDeprecation) {
											console.trace(msg);
										} else {
											console.error(msg);
										}
										warned = true;
									}
									return fn.apply(this, arguments);
								}
								return deprecated;
							};
							var debugs = {};
							var debugEnviron;
							exports.debuglog = function (set) {
								if(isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
								set = set.toUpperCase();
								if(!debugs[set]) {
									if(new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
										var pid = process.pid;
										debugs[set] = function () {
											var msg = exports.format.apply(exports, arguments);
											console.error('%s %d: %s', set, pid, msg);
										};
									} else {
										debugs[set] = function () {};
									}
								}
								return debugs[set];
							};

							function inspect(obj, opts) {
								var ctx = {
									seen: [],
									stylize: stylizeNoColor
								};
								if(arguments.length >= 3) ctx.depth = arguments[2];
								if(arguments.length >= 4) ctx.colors = arguments[3];
								if(isBoolean(opts)) {
									ctx.showHidden = opts;
								} else if(opts) {
									exports._extend(ctx, opts);
								}
								if(isUndefined(ctx.showHidden)) ctx.showHidden = false;
								if(isUndefined(ctx.depth)) ctx.depth = 2;
								if(isUndefined(ctx.colors)) ctx.colors = false;
								if(isUndefined(ctx.customInspect)) ctx.customInspect = true;
								if(ctx.colors) ctx.stylize = stylizeWithColor;
								return formatValue(ctx, obj, ctx.depth);
							}
							exports.inspect = inspect;
							inspect.colors = {
								'bold': [1, 22],
								'italic': [3, 23],
								'underline': [4, 24],
								'inverse': [7, 27],
								'white': [37, 39],
								'grey': [90, 39],
								'black': [30, 39],
								'blue': [34, 39],
								'cyan': [36, 39],
								'green': [32, 39],
								'magenta': [35, 39],
								'red': [31, 39],
								'yellow': [33, 39]
							};
							inspect.styles = {
								'special': 'cyan',
								'number': 'yellow',
								'boolean': 'yellow',
								'undefined': 'grey',
								'null': 'bold',
								'string': 'green',
								'date': 'magenta',
								'regexp': 'red'
							};

							function stylizeWithColor(str, styleType) {
								var style = inspect.styles[styleType];
								if(style) {
									return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
								} else {
									return str;
								}
							}

							function stylizeNoColor(str, styleType) {
								return str;
							}

							function arrayToHash(array) {
								var hash = {};
								array.forEach(function (val, idx) {
									hash[val] = true;
								});
								return hash;
							}

							function formatValue(ctx, value, recurseTimes) {
								if(ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
									var ret = value.inspect(recurseTimes, ctx);
									if(!isString(ret)) {
										ret = formatValue(ctx, ret, recurseTimes);
									}
									return ret;
								}
								var primitive = formatPrimitive(ctx, value);
								if(primitive) {
									return primitive;
								}
								var keys = Object.keys(value);
								var visibleKeys = arrayToHash(keys);
								if(ctx.showHidden) {
									keys = Object.getOwnPropertyNames(value);
								}
								if(isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
									return formatError(value);
								}
								if(keys.length === 0) {
									if(isFunction(value)) {
										var name = value.name ? ': ' + value.name : '';
										return ctx.stylize('[Function' + name + ']', 'special');
									}
									if(isRegExp(value)) {
										return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
									}
									if(isDate(value)) {
										return ctx.stylize(Date.prototype.toString.call(value), 'date');
									}
									if(isError(value)) {
										return formatError(value);
									}
								}
								var base = '',
									array = false,
									braces = ['{', '}'];
								if(isArray(value)) {
									array = true;
									braces = ['[', ']'];
								}
								if(isFunction(value)) {
									var n = value.name ? ': ' + value.name : '';
									base = ' [Function' + n + ']';
								}
								if(isRegExp(value)) {
									base = ' ' + RegExp.prototype.toString.call(value);
								}
								if(isDate(value)) {
									base = ' ' + Date.prototype.toUTCString.call(value);
								}
								if(isError(value)) {
									base = ' ' + formatError(value);
								}
								if(keys.length === 0 && (!array || value.length == 0)) {
									return braces[0] + base + braces[1];
								}
								if(recurseTimes < 0) {
									if(isRegExp(value)) {
										return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
									} else {
										return ctx.stylize('[Object]', 'special');
									}
								}
								ctx.seen.push(value);
								var output;
								if(array) {
									output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
								} else {
									output = keys.map(function (key) {
										return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
									});
								}
								ctx.seen.pop();
								return reduceToSingleString(output, base, braces);
							}

							function formatPrimitive(ctx, value) {
								if(isUndefined(value)) return ctx.stylize('undefined', 'undefined');
								if(isString(value)) {
									var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
									return ctx.stylize(simple, 'string');
								}
								if(isNumber(value)) return ctx.stylize('' + value, 'number');
								if(isBoolean(value)) return ctx.stylize('' + value, 'boolean');
								if(isNull(value)) return ctx.stylize('null', 'null');
							}

							function formatError(value) {
								return '[' + Error.prototype.toString.call(value) + ']';
							}

							function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
								var output = [];
								for(var i = 0, l = value.length; i < l; ++i) {
									if(hasOwnProperty(value, String(i))) {
										output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
									} else {
										output.push('');
									}
								}
								keys.forEach(function (key) {
									if(!key.match(/^\d+$/)) {
										output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
									}
								});
								return output;
							}

							function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
								var name, str, desc;
								desc = Object.getOwnPropertyDescriptor(value, key) || {
									value: value[key]
								};
								if(desc.get) {
									if(desc.set) {
										str = ctx.stylize('[Getter/Setter]', 'special');
									} else {
										str = ctx.stylize('[Getter]', 'special');
									}
								} else {
									if(desc.set) {
										str = ctx.stylize('[Setter]', 'special');
									}
								}
								if(!hasOwnProperty(visibleKeys, key)) {
									name = '[' + key + ']';
								}
								if(!str) {
									if(ctx.seen.indexOf(desc.value) < 0) {
										if(isNull(recurseTimes)) {
											str = formatValue(ctx, desc.value, null);
										} else {
											str = formatValue(ctx, desc.value, recurseTimes - 1);
										}
										if(str.indexOf('\n') > -1) {
											if(array) {
												str = str.split('\n').map(function (line) {
													return '  ' + line;
												}).join('\n').substr(2);
											} else {
												str = '\n' + str.split('\n').map(function (line) {
													return '   ' + line;
												}).join('\n');
											}
										}
									} else {
										str = ctx.stylize('[Circular]', 'special');
									}
								}
								if(isUndefined(name)) {
									if(array && key.match(/^\d+$/)) {
										return str;
									}
									name = JSON.stringify('' + key);
									if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
										name = name.substr(1, name.length - 2);
										name = ctx.stylize(name, 'name');
									} else {
										name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
										name = ctx.stylize(name, 'string');
									}
								}
								return name + ': ' + str;
							}

							function reduceToSingleString(output, base, braces) {
								var numLinesEst = 0;
								var length = output.reduce(function (prev, cur) {
									numLinesEst++;
									if(cur.indexOf('\n') >= 0) numLinesEst++;
									return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
								}, 0);
								if(length > 60) {
									return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
								}
								return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
							}

							function isArray(ar) {
								return Array.isArray(ar);
							}
							exports.isArray = isArray;

							function isBoolean(arg) {
								return typeof arg === 'boolean';
							}
							exports.isBoolean = isBoolean;

							function isNull(arg) {
								return arg === null;
							}
							exports.isNull = isNull;

							function isNullOrUndefined(arg) {
								return arg == null;
							}
							exports.isNullOrUndefined = isNullOrUndefined;

							function isNumber(arg) {
								return typeof arg === 'number';
							}
							exports.isNumber = isNumber;

							function isString(arg) {
								return typeof arg === 'string';
							}
							exports.isString = isString;

							function isSymbol(arg) {
								return typeof arg === 'symbol';
							}
							exports.isSymbol = isSymbol;

							function isUndefined(arg) {
								return arg === void 0;
							}
							exports.isUndefined = isUndefined;

							function isRegExp(re) {
								return isObject(re) && objectToString(re) === '[object RegExp]';
							}
							exports.isRegExp = isRegExp;

							function isObject(arg) {
								return typeof arg === 'object' && arg !== null;
							}
							exports.isObject = isObject;

							function isDate(d) {
								return isObject(d) && objectToString(d) === '[object Date]';
							}
							exports.isDate = isDate;

							function isError(e) {
								return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
							}
							exports.isError = isError;

							function isFunction(arg) {
								return typeof arg === 'function';
							}
							exports.isFunction = isFunction;

							function isPrimitive(arg) {
								return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
							}
							exports.isPrimitive = isPrimitive;
							exports.isBuffer = require('./support/isBuffer');

							function objectToString(o) {
								return Object.prototype.toString.call(o);
							}

							function pad(n) {
								return n < 10 ? '0' + n.toString(10) : n.toString(10);
							}
							var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

							function timestamp() {
								var d = new Date();
								var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
								return [d.getDate(), months[d.getMonth()], time].join(' ');
							}
							exports.log = function () {
								console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
							};
							exports.inherits = require('inherits');
							exports._extend = function (origin, add) {
								if(!add || !isObject(add)) return origin;
								var keys = Object.keys(add);
								var i = keys.length;
								while(i--) {
									origin[keys[i]] = add[keys[i]];
								}
								return origin;
							};

							function hasOwnProperty(obj, prop) {
								return Object.prototype.hasOwnProperty.call(obj, prop);
							}
						}).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
					}, {
						"./support/isBuffer": 210,
						"_process": 193,
						"inherits": 209
					}]
				}, {},
				[96])(96)
		});
