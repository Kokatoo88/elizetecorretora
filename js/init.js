/*
	
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			
			// Global.
				global: {
					range: '*',
					href: 'css/style.css',
					containers: 1400,
					grid: {
						gutters: {
							vertical: '4em',
							horizontal: 0
						}
					}
				},

			// XLarge.
				xlarge: {
					range: '-1680',
					href: 'css/style-xlarge.css',
					containers: 1200
				},

			// Large.
				large: {
					range: '-1280',
					href: 'css/style-large.css',
					containers: 960,
					grid: {
						gutters: {
							vertical: '2.5em'
						}
					},
					viewport: {
						scalable: false
					}
				},

			// Medium.
				medium: {
					range: '-980',
					href: 'css/style-medium.css',
					containers: '90%',
					grid: {
						collapse: 1
					}
				},

			// Small.
				small: {
					range: '-736',
					href: 'css/style-small.css',
					containers: '90%',
					grid: {
						gutters: {
							vertical: '1.25em'
						}
					}
				},

			// XSmall.
				xsmall: {
					range: '-480',
					href: 'css/style-xsmall.css',
					grid: {
						collapse: 2
					}
				}

		},
		plugins: {
			layers: {
				
				// Config.
					config: {
						transform: true
					},
				
				// Navigation Panel.
					navPanel: {
						animation: 'pushX',
						breakpoints: 'medium',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html:  `
						<div data-action="moveElement" data-args="nav">` + ` </div><nav id="nav" class="skel-layers-moved">
					 <ul class="mobile-menu">
					      <li><a href="index.html">Início</a></li>
					      <li><a href="SeguroAuto.html">Seguro Auto</a></li>
					      <li><a href="left-sidebar.html">Seguro Residencial</a></li>
						  <li><a href="right-sidebar.html">Seguro Vida</a></li>
						  <li><a href="SeguroViagem.html">Seguro Viagem</a></li>
						  <li><a href="SeguroEquipamentos.html">Seguro Equipamentos</a></li>
						  <li><a href="SeguroFiançaLocatícia.html">Seguro Fiança Locatícia</a></li>
						  <li><a href="SeguroEvento.html">Seguro Evento</a></li>
						  <li><a href="SeguroEmpresarial.html">Seguro Empresarial</a></li>
						  <li><a href="SeguroRiscosDiversos.html">Riscos Diversos</a></li>
						    <li><a href="no-sidebar.html">Sobre a Corretora</a></li>
							<li><a href="https://api.whatsapp.com/send/?phone=553135532469&text&type=phone_number&app_absent=0" target="_blank" class="button special">Contato</a></li>
						  </div>
						</ul>
						</nav>
					  ` ,
						orientation: 'vertical',
						position: 'top-left',
						side: 'left',
						width: 250
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'medium',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-left',
						side: 'top',
						width: '6em'
					}

			}
		}
	});

	$(function() {
		
		// jQuery ready stuff.
		
	});

})(jQuery);