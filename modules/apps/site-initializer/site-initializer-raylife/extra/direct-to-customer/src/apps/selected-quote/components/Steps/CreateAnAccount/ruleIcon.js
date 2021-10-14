import ClayIcon from '@clayui/icon';
import Style from '~/apps/selected-quote/styles/index.scss';

export const RuleIcon = ({label, statusRule}) => {
	return (
		<div>
			<style>{Style}</style>
			<a
				style={
					statusRule === 1
						? {color: '#39C38D'}
						: statusRule === 2
						? {color: '#EA6136'}
						: {color: '#606167'}
				}
			>
				{statusRule === 1 ? (
					<ClayIcon
						className="ca-icon-rule"
						style={{
							background: '#39c38d',
						}}
						symbol="check"
					/>
				) : statusRule === 2 ? (
					<ClayIcon
						className="ca-icon-rule"
						style={{
							background: '#EA6136',
						}}
						symbol="hr"
					/>
				) : (
					<ClayIcon
						className="ca-icon-rule"
						style={{
							fill: '#AFAFB1',
						}}
						symbol="check"
					/>
				)}
				{label}
			</a>
		</div>
	);
};
