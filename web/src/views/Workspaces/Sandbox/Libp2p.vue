<template>
    <main>
        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <!-- <Navbar /> -->

                        <div class="card">
                            <div class="card-body">

                                <form role="form">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                        </div>
                                    </div>
                                    <!-- /.card-body -->

                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" value="relay.devops.cash" checked>
                                        <label for="customCheckbox1" class="custom-control-label">relay.devops.cash</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" value="wss.fullstack.cash">
                                        <label for="customCheckbox2" class="custom-control-label">wss.fullstack.cash</label>
                                    </div>

                                    <div class="row">
                                        <div class="col-12 col-sm-6">
                                            <div class="form-group">
                                                <label>Chat Room</label>
                                                <select multiple class="form-control">
                                                    <option value="4cc225a23cdb830b6978b55e76f4b7966ec08c30a74d1d203fb57e23ebcdcccd">#lobby:devops.cash</option>
                                                    <option value="customPubsubRoom123">customPubsubRoom123</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-12 col-sm-6">
                                            <div class="form-group">
                                                <label>Peers</label>
                                                <select multiple class="form-control">
                                                    <option value="QmPTaa3Azg269K8UeKhTdj1cmkWPZ5hcLGHFp6r3sqCXnB">messenger.devops.cash</option>
                                                    <option value="QmaUW4oCVPUFLRqeSjvhHwGFJHGWrYWLBEt7WxnexDm3Xa">chat.fullstackcash.nl</option>
                                                    <option value="QmZD1c7sNgFdF7DgG9kFFnjfMCJKpUzFkpeaj4wv7NfhWB">localhost browser (test only)</option>
                                                    <option value="QmNvgo499ZUVKV61ZtU8jAYx5ZUEn6eJn4b1LAGtM6nftS">localhost node.js (test only)</option>
                                                    <option value="QmQpV2FcL8swjYuarqBWGAvgBBp98JiTYymhSBvktUujK4">localhost incognito (test only)</option>
                                                    <option value="">cashshuffle</option>
                                                    <option value="">cashfusion</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary" @click="sendTest">Submit</button>
                                    </div>
                                </form>

                                <div v-for="log of debugLog" :key="log.id">
                                    {{log.body}}
                                </div>

                                <div class="card">
                                  <div class="card-header">
                                    <h3 class="card-title">Fixed Header Table</h3>

                                    <div class="card-tools">
                                      <div class="input-group input-group-sm" style="width: 150px;">
                                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                                        <div class="input-group-append">
                                          <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- /.card-header -->
                                  <div class="card-body table-responsive p-0" style="height: 300px;">
                                    <table class="table table-head-fixed text-nowrap">
                                      <thead>
                                        <tr>
                                          <th>ID</th>
                                          <th>User</th>
                                          <th>Date</th>
                                          <th>Status</th>
                                          <th>Reason</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>183</td>
                                          <td>John Doe</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-success">Approved</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                          <td>219</td>
                                          <td>Alexander Pierce</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-warning">Pending</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                          <td>657</td>
                                          <td>Bob Doe</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-primary">Approved</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                          <td>175</td>
                                          <td>Mike Doe</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-danger">Denied</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                          <td>134</td>
                                          <td>Jim Doe</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-success">Approved</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                          <td>494</td>
                                          <td>Victoria Doe</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-warning">Pending</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                          <td>832</td>
                                          <td>Michael Doe</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-primary">Approved</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                        <tr>
                                          <td>982</td>
                                          <td>Rocky Doe</td>
                                          <td>11-7-2014</td>
                                          <td><span class="tag tag-danger">Denied</span></td>
                                          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!-- /.card-body -->
                                </div>
                                <!-- /.card -->

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Libp2p Guide
                                </h3>
                            </div>

                            <div class="card-body">
                                <dl class="row">
                                    <dt class="col-sm-4">Description lists</dt>
                                    <dd class="col-sm-8">A description list is perfect for defining terms.</dd>
                                    <dt class="col-sm-4">Euismod</dt>
                                    <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                    <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                                    <dt class="col-sm-4">Malesuada porta</dt>
                                    <dd class="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>
                                    <dt class="col-sm-4">Felis euismod semper eget lacinia</dt>
                                    <dd class="col-sm-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                        sit amet risus.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<script>
/* Import modules. */
import IPFS from 'ipfs-core'
import { v4 as uuidv4 } from 'uuid'

/* Import components. */
// import Header from '@/components/Header'
// import Navbar from './Navbar'


export default {
    components: {
        // Header,
        // Navbar,
    },
    data: () => {
        return {
            ipfs: null,
            nodeid: null,
            roomName: null,
            bootstrapNodes: null,

            debugLog: null,
        }
    },
    computed: {
        //
    },
    methods: {
        /**
         * Start IPFS
         *
         * Top level function for controlling the IPFS node.
         */
        async startIpfs() {
            try {
                console.log('Setting up instance of IPFS...')

                /* Create new IPFS instance. */
                this.ipfs = await IPFS.create()

                // Pass the IPFS instance to the window object. Makes it easy to debug IPFS
                // issues in the browser console.
                if (typeof window !== 'undefined') {
                    window.ipfs = this.ipfs
                }

                /* Initialize IPFS. */
                await this.initIpfs()

                // Get this nodes IPFS ID
                const id = await this.ipfs.id()

                this.ipfsid = id.id
                console.log(`This IPFS node ID: ${this.ipfsid}`)

                console.log('IPFS node setup complete.')

                /* Subscribe to the BUMP (pubsub) room. */
                await this.ipfs.pubsub.subscribe(this.roomName, msg => {
                    // print out any messages recieved.
                    console.log(msg.data.toString())

                    this.debugLog.push({
                        id: uuidv4(),
                        body: msg.data.toString(),
                    })
                })
                console.log(`Subscribed to BUMP (pubsub) room ${this.roomName}`)

                // Periodically broadcast identity on the pubsub channel
                // setInterval(async () => {
                //     await this.broadcastMyInfo()
                // }, 45000)

                // Periodically renew connections to other pubsub channel peers
                setInterval(async () => {
                    await this.connectToPeers()
                }, 30000)
            } catch (err) {
                console.error('Error in startIpfs(): ', err)
                console.log('Error trying to initialize IPFS node!')
            }
        },

        // Initialize the IPFS node and try to connect to the PSF bootstrap node.
        async initIpfs() {
            try {
                this.ipfs = await this.ipfs
                console.log('IPFS node is ready.')

                // Periodically renew connection to the bootstrap nodes.
                const intervalHandle = setInterval(() => {
                    this.connectToBootstrapNodes()
                }, 15000)

                // Also connect to bootstrap nodes immediately.
                await this.connectToBootstrapNodes()

                return intervalHandle
            } catch (err) {
                console.error('Error in initIpfs()')
                throw err
            }
        },

        // Attempt to connect to the bootstrap nodes. Cycles through each node in the
        // bootstrapNodes array.
        async connectToBootstrapNodes() {
            try {
                const now = new Date()

                for (let i = 0; i < this.bootstrapNodes.length; i++) {
                    const name = this.bootstrapNodes[i].name

                    const multiaddr = this.bootstrapNodes[i].multiaddr

                    try {
                        await this.ipfs.swarm.connect(multiaddr)
                        // console.log('...IPFS node connected PSF node!')
                        console.log(
                            `${now.toLocaleString()} - Successfully connected to ${name}`
                        )
                        this.bootstrapNodes[i].hasConnected = true
                    } catch (err) {
                        console.log(
                            `${now.toLocaleString()} - Failed to connect to ${name} - ${multiaddr}`
                        )
                        this.bootstrapNodes[i].hasConnected = false
                    }
                }
            } catch (err) {
                console.error('Error in connectToBootstrapNodes()')
                throw err
            }
        },

        // Broadcast the connection information for this IPFS node.
        async broadcastMyInfo() {
            try {
                const now = new Date()

                // Date-stamped connection information.
                const connectionInfo = {
                    date: now.toLocaleString(),
                    ipfsid: this.ipfsid,
                    message: `Message from browser app @ ${now.toLocaleString()}`
                }

                const msgBuf = Buffer.from(JSON.stringify(connectionInfo))

                // Publish the message to the pubsub channel.
                await this.ipfs.pubsub.publish(this.roomName, msgBuf)

                console.log(`Published message to ${this.roomName}\n`)
            } catch (err) {
                console.error('Error in broadcastMyInfo()')
                throw err
            }
        },

        // Renew connections to pubsub room peers.
        async connectToPeers() {
            try {
                // TODO: In the future this should use an array of objects to cycle through
                // any new peers that connect to the pubsub channel.

                /* Find a circuit relay that has successfully connected. */
                const circuitRelay = this.bootstrapNodes.filter(elem => elem.hasConnected)

                /* Connect to node via circuit relay. */
                await this.ipfs.swarm.connect(
                    `${circuitRelay[0].multiaddr}/p2p-circuit/p2p/${this.nodeid}`
                )
                console.log(`Connected to messaging peer [ ${this.nodeid} ]`)
            } catch (err) {
                console.error('Error in connectToPeers()')
                throw err
            }
        },

        async sendTest() {
            const msgBuf = Buffer.from(`hi there! [ ${new Date()} ]`)

            // Publish the message to the pubsub channel.
            await this.ipfs.pubsub.publish(this.roomName, msgBuf)
        },

    },
    created: async function () {
        this.debugLog = []

        // const IPFS = require('ipfs-core')
        console.log('IPFS', IPFS)

        // const ipfs = await IPFS.create()
        // console.log('ipfs', ipfs)

        // const { cid } = await ipfs.add('Hello Bitcoin!')
        // console.info(cid)

        // Run the node.js app first and get it's IPFS ID.
        // this.nodeid = 'QmNvgo499ZUVKV61ZtU8jAYx5ZUEn6eJn4b1LAGtM6nftS' // localhost
        this.nodeid = 'QmaZidHAzv6fc2XT2dpHULnKS9rZhzq8KDu4jr2hCe9LVR' // messenger.devops.cash
        // this.nodeid = 'QmQpV2FcL8swjYuarqBWGAvgBBp98JiTYymhSBvktUujK4' // incognito

        // Pubsub channel that nodes will use to coordinate.
        this.roomName = '4cc225a23cdb830b6978b55e76f4b7966ec08c30a74d1d203fb57e23ebcdcccd' // #lobby:devops.cash

        // Known IPFS nodes to connect to for bootstrapping.
        this.bootstrapNodes = [
            // {
            //   name: 'relay.devops.cash',
            //   multiaddr: `/dns4/relay.devops.cash/tcp/443/wss/p2p/QmarVJPsEf8KahYQamALpmpnTbkB4Az2HMDnwopyJjJYzS`,
            //   hasConnected: false
            // }
            {
              name: 'relay.devops.cash',
              multiaddr: `/dns4/relay.devops.cash/tcp/443/wss/p2p/12D3KooWRpNvnBDVQ5NVwjxPuj7EY5u42kmFQaP8y5jYfcCpCGSW`,
              hasConnected: false
            }
            // {
            //     name: 'wss.fullstack.cash',
            //     multiaddr: `/dns4/wss.fullstack.cash/tcp/443/wss/p2p/QmNZktxkfScScnHCFSGKELH3YRqdxHQ3Le9rAoRLhZ6vgL`,
            //     hasConnected: false,
            // },
        ]

        /* Start IPFS. */
        await this.startIpfs()

    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
