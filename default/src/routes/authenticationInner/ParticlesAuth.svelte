<div class="auth-page-wrapper pt-5">
	<div class="auth-one-bg-position auth-one-bg" id="auth-particles">
		<div class="bg-overlay" />

		<div class="shape">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 1440 120"
			>
				<path
					d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"
				/>
			</svg>
		</div>
	</div>
	<slot />

	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="text-center">
						<p class="mb-0 text-muted">
							&copy; {new Date().getFullYear()} Velzon. Crafted with
							<i class="mdi mdi-heart text-danger" /> by Themesbrand
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
