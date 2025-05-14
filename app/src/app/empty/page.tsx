import { CircleSlash2 } from 'lucide-react';
import Bar from '@/components/Bar';
import View from '@/components/View';

const Empty = () => {

  return (
    <>
    <Bar>
        <div className='bar-title'>
          <CircleSlash2 className="icon" size={32} strokeWidth={2.5}/>
          <span className='lg-text'>Empty</span>
        </div>
      </Bar>

      <View>
      </View>

      <div className="modal">
        <span className='sm-text'>v0.1-a</span>
      </div>
    </>
  );
};

export default Empty;