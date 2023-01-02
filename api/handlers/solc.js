const PouchDB = require('pouchdb')
// const moment = require('moment')
// const superagent = require('superagent')
const compiler = require('solc')

/* Set Slack bot token. */
const dbAuth = process.env.DB_AUTH

/* Initialize database. */
const db = new PouchDB(`http://apecs:${dbAuth}@localhost:5984/projects`)

/**
 * Solidity Compiler
 */
const solc = async function (req, res) {
    console.log('\nSTARTED SOLC');
    /* Set body. */
    const body = req.body
    console.log('\nBODY', body)

    /* Validate body. */
    if (!body) {
        /* Set status code. */
        res.status(400)

        return res.json({
            error: 'A request BODY is required with this request.'
        })
    }


    // const path = require('path')
    // const fs = require('fs')
    // const solc = require('solc')
    //
    // const sample = path.resolve(__dirname, 'contracts', 'hello.sol')
    // const source = fs.readFileSync(sample, 'UTF-8')
    // console.log('\nSOURCE', source)
    //
    // // const compiled = solc.compile(source, 1)
    //
    // var input = {
    //     language: 'Solidity',
    //     sources: {
    //         'hello.sol' : {
    //             content: source
    //         }
    //     },
    //     settings: {
    //         outputSelection: {
    //             '*': {
    //                 '*': [ '*' ]
    //             }
    //         }
    //     }
    // };
    //
    // const output = JSON.parse(solc.compile(JSON.stringify(input)))
    // console.log('\nOUTPUT', output)
    //
    // const details = output.contracts['hello.sol']['Hello']
    // console.log('\nDETAILS', details)
    //
    // const bytecode = details.evm.bytecode.object
    // console.log('\nBYTECODE\n', bytecode)
    //
    // const deployedBytecode = details.evm.deployedBytecode.object
    // console.log('\nBYTECODE MATCH', bytecode == deployedBytecode)
    //
    // if (bytecode != deployedBytecode) {
    //     console.log('\nDEPLOYED BYTECODE\n', deployedBytecode)
    //
    // }


    const input = {
        language: 'Solidity',
        sources: {
            'hi-there.sol': {
                content: body.source
            }
        },
        settings: {
            outputSelection: {
                '*': {
                    '*': ['*']
                }
            }
        }
    }

    let output

    try {
        output = JSON.parse(compiler.compile(JSON.stringify(input)))

        // `output` here contains the JSON output as specified in the documentation
        for (var contractName in output.contracts['test.sol']) {
          console.log(
            contractName +
              ': ' +
              output.contracts['test.sol'][contractName].evm.bytecode.object
          );
        }
    } catch (err) {
        console.error(err)
    }



    // solc.loadRemoteVersion('0.4.21+commit.dfe3193c', (_err, _solc) => {
    //   if (_err) {
    //     console.error('SOMETHING WENT WRONG', _err)
    //   } else {
    //     // NOTE: Use `solcSnapshot` here with the same interface `solc` has
    //     const compiled = JSON.parse(_solc.compile(JSON.stringify(input)))
    //     console.log('\nCOMPILED', compiled)
    //   }
    // })
    //

    console.log('OUTPUT', output)

    /* Return all output. */
    res.json(output)
}

module.exports = solc
