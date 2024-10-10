import { getInterestedCount } from '../actions';
import InterestedCard from './InterestedCard';

const InterestedCardWrapper = async () => {
  const interestedCount = await getInterestedCount();

  return <InterestedCard interestedCount={interestedCount} />;
};

export default InterestedCardWrapper;
