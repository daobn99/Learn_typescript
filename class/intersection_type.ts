/**
 * Nhìn vào đống property này khó nhìn ra cái nào　必須 cái nào 必須ではない
 * */
type Parameter = {
    id: string;
    index?: number;
    active: boolean;
    balance: number;
    photo?: string;
    age?: number;
    surname: string;
    givenName: string;
    company?: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    // ...
};

/**
 * 必須とそうでないパラメータのタイプエイリアスに分離して、Required<T>, Partial<T>をつける。そして合成する。
 */

type Mandatory = Required<{    //required: bắt buộc
    id: string;
    active: boolean;
    balance: number;
    surname: string;
    givenName: string;
    email: string;
  }>;
   
  type Optional = Partial<{  //partial : dịch là 部分的 nhưng hiểu là 必須ではない
    index: number;
    photo: string;
    age: number;
    company: string;
    phoneNumber: string;
    address: string;
  }>;

  /**インターセクション型で合成する */
  type Parameter1 = Mandatory & Optional;

  //Việc chia ra rồi ghép lại thế này bảo đảm sự chặt chẽ và nhất quán (khi làm một dự án dữ liệu lớn)