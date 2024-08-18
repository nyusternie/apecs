<template>
    <main>
        <h1 class="w-full text-4xl text-center font-bold mt-5 p-3 border-b-4 border-gray-500">
            Zero Knowledge Sandbox
        </h1>

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <Navbar />

                        <div class="card">
                            <div class="card-body">

                                <section class="m-5">
                                    <h3 class="text-2xl font-bold tracking-widest">
                                        Generate a New Keypair
                                    </h3>

<pre class="my-5 p-5 bg-amber-100 border-4 border-amber-300 rounded-2xl">
const P =
    P = privkey * ecdsa.SECP256k1.generator
    print('P.x()', P.x())
    print('P.y()', P.y())
    return (int(privkey).to_bytes(32,'big'),
            b'\x04' + int(P.x()).to_bytes(32,'big') + int(P.y()).to_bytes(32,'big'),
            bytes((2 + (P.y()&1),)) + int(P.x()).to_bytes(32,'big'),
            )
</pre>
                                    </section>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title text-2xl font-medium">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Zero Knowledge Guide
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
