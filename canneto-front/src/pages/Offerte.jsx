const Offerte = () => {
	return (
		<div
			style={{
				padding: '20px',
				fontFamily: 'Arial, sans-serif',
				lineHeight: '1.6',
			}}>
			<h1 className="text-center fw-bolder">OFFERTE</h1>
			<p>
				Coloro che desiderano sostenere le necessit&agrave; del Santuario di
				Canneto con donazioni in denaro possono attenersi alle seguenti
				modalit&agrave; *.
			</p>

			<h3>DALL&rsquo;ITALIA</h3>
			<ol className="ms-3">
				<li>
					<b>Conto Corrente Postale</b> prestampato inviato dal Santuario,
					oppure quello in bianco da compilare personalmente intestando
					l&rsquo;offerta al Santuario Madonna di Canneto Direzione e
					Amministrazione - 03040 Settefrati, c.c.p. n. 12402038;
				</li>
				<li>
					<b>Assegno non trasferibile</b> (a mezzo assicurata) intestato al
					Santuario Madonna di Canneto Direzione e Amministrazione - 03040
					Settefrati;
				</li>
				<li>
					<b>Bonifico bancario</b> intestato al Santuario Madonna di
					Canneto Direzione e Amministrazione - 03040 Settefrati, al
					seguente Istituto Bancario:
					<ul>
						<li>Banca Popolare del Cassinate SCpA IBAN: IT;</li>
					</ul>
				</li>
			</ol>

			<h3 className="mt-3">DALL&rsquo;ESTERO</h3>
			<ol className="ms-3">
				<li>
					<b>Assegno non trasferibile</b> intestato al Santuario Madonna di
					Canneto Direzione e Amministrazione - 03040 Settefrati;
				</li>
				<li>
					<b>Bonifico bancario o Vaglia internazionale bancario</b>{' '}
					intestato al Santuario Madonna di Canneto Direzione e
					Amministrazione - 03040 Settefrati, al seguente Istituto
					Bancario:
					<ul>
						<li>
							Banca Popolare del Cassinate SCpA IBAN: IT; - BIC:
							POCAIT3C;
						</li>
					</ul>
				</li>
				<li>
					<b>Carta di credito</b>, comunicando al Santuario, attraverso
					e-mail, fax, lettera, il tipo, il numero, la scadenza della carta
					e l&rsquo;importo dell&rsquo;offerta o utilizzare il MODULO
					DONAZIONE.
				</li>
			</ol>

			<h3 className="mt-3">TESTAMENTI</h3>
			<p className="ms-3">
				Coloro, invece, che desiderano sostenere le necessit&agrave; del
				Santuario di Canneto con donazioni in immobili devono attenersi alle
				seguenti disposizioni testamentarie.
			</p>
			<p className="ms-3">
				Il testamento, come si sa, &egrave; uno strumento a disposizione di
				ogni individuo per affermare la sua volont&agrave; in merito alla
				destinazione del proprio patrimonio proiettandola nel futuro. Il
				testamento &egrave; un atto assolutamente personale sempre
				modificabile e/o revocabile.
			</p>
			<p className="ms-3">La legge prevede due tipi di testamento:</p>
			<ol className="ms-3">
				<li>
					<b>Il testamento pubblico</b>, che va redatto alla presenza di un
					notaio,
				</li>
				<li>
					<b>Il testamento olografo</b>, che pu&ograve; essere predisposto
					senza la presenza di un notaio ma con l&rsquo;obbligo di essere
					scritto, datato e sottoscritto per intero a mano dal testatore.
					La sottoscrizione (firma) deve essere posta alla fine delle
					disposizioni testamentarie e la data deve contenere
					l&rsquo;indicazione di giorno, mese e anno. Se si sceglie il
					testamento olografo &egrave; consigliabile redigere sempre almeno
					due originali, inviandone uno al Santuario, in modo da limitare
					il rischio di smarrimento, corredandolo dei dati e dei recapiti
					personali.
				</li>
			</ol>
			<p className="ms-3">
				Se si intende beneficiare il Santuario destinandogli un bene
				particolare, a titolo di legato, la disposizione testamentaria
				potr&agrave; essere cos&igrave; formulata:
			</p>
			<p style={{ fontStyle: 'italic', marginLeft: '20px' }}>
				&ldquo;Lego al Santuario della Beata Maria Vergine di Canneto in
				Settefrati (FR)&hellip; (scrivere di seguito l&rsquo;elenco dei
				beni)&rdquo;.
				<br />
				Firma e data
			</p>
			<p className="ms-3">
				Se, invece, si desidera destinare al Santuario l&rsquo;intero
				patrimonio, la formula da usare &egrave; la seguente:
			</p>
			<p style={{ fontStyle: 'italic', marginLeft: '20px' }}>
				&ldquo;Nomino il Santuario della Beata Maria Vergine di Canneto in
				Settefrati erede universale di tutti i miei beni mobili ed
				immobili&hellip; (eventuale elenco dei beni)&rdquo;.
				<br />
				Firma e data
			</p>

			<p>
				___________________
				<br />
				<b>
					<i>
						Le offerte non sono detraibile ai fini fiscali per le persone
						fisiche: art. 10 T.U. delle Imposte sui redditi
					</i>
				</b>
			</p>
		</div>
	);
};

export default Offerte;
