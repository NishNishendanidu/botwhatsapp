/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/


const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./queenamdi/');
const fs = require('fs');

async function king amda-X () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2126, 14]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('đ connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold(' Amdi')}
${chalk.white.italic('Queen Amdi Sting session')}

${chalk.blue.italic('âšī¸  Connecting to Whatsapp... Please Wait.')}`);
    });
    

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('king amda-X: '),
			'amdaI;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'AMDA;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('94')) {
			await conn.sendMessage(
				conn.user.jid,
				'*â ī¸ Meka denna epa katawath ' + conn.user.name + '* â ī¸',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*â ī¸ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* â ī¸',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"Meka copy karanna bari nm whatsapp eke athi bn code eka awith!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

king amda-x()

