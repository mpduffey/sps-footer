import {Component, Input} from '@angular/core';

@Component({
	selector:				'sps-footer',
	template:				`
		<section id="footer" class="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
			<div class="container">
				<div class="row">
					<div class="footer">{{footer.text}}</div>
				</div>
			</div>
		</section>
	`,
	styles:					[`
		.footer {margin: 10px auto 0 auto; border: white 3px solid; padding: 20px; font-weight: 600; color: white; text-align: center; font-size: 16px;}
	`]
})

export class SpsFooter {
	@Input() footer;
}