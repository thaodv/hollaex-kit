import querystring from 'query-string';
import { requestAuthenticated } from '../../../utils';

export const checkTransaction = (currency, transaction_id, address, is_testnet) =>
	requestAuthenticated(
		`/admin/checkTransaction?${querystring.stringify(
			{ currency, transaction_id, address, is_testnet }
		)}`
	);
