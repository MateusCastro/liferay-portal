import {RuleIcon} from '../CreateAnAccount/ruleIcon';

export const ListRules = ({objRule}) => {
	return (
		<div className="ca-mt-12">
			<ul style={{listStyleType: 'none'}}>
				<li>
					<RuleIcon
						label="At least 8 characters"
						statusRule={objRule.qtdCaracter}
					/>
				</li>
				<li>
					<RuleIcon
						label={
							<>
								At least <b>5 unique characters</b>
							</>
						}
						statusRule={objRule.uniqueCaracter}
					/>
				</li>
				<li>
					<RuleIcon
						label={
							<>
								At least <b>1 symbol</b>
							</>
						}
						statusRule={objRule.symbolCaracter}
					/>
				</li>
				<li>
					<RuleIcon
						label={
							<>
								At least <b>1 number</b>
							</>
						}
						statusRule={objRule.numberCaracter}
					/>
				</li>
				<li>
					<RuleIcon
						label={
							<>
								<b>No spaces</b> allowed
							</>
						}
						statusRule={objRule.noSpace}
					/>
				</li>
				<li>
					<RuleIcon
						label={<>Passwords are the same</>}
						statusRule={objRule.samePassword}
					/>
				</li>
			</ul>
		</div>
	);
};
