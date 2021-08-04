import React from 'react'
import './CasetteLogo.sass'

const CasetteLogo = (props) => {
    return(
        <div class="casette">
	        <div class="screw"></div>
	        <div class="screw"></div>
	        <div class="screw"></div>
	        <div class="screw"></div>
	        <div class="tapesContainer">
		<div class="outerTape">
			<div class="tape">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>

		<div class="outerTape">
			<div class="tape">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
	<div class="top"></div>
</div>
    )
}
export default CasetteLogo