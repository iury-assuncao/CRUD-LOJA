import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsCurrency,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsString()
  nome: string;
  @IsString()
  descricao: string;
}
export class ImagemProdutoDTO {
  @IsUrl()
  url: string;
  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  descricao: string;
}
export class CriaProdutoDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;

  @IsNotEmpty()
  nome: string;
  @IsNumber()
  valor: number;
  @Min(0, { message: 'a qtd deve ser zero ou mais' })
  quantidade: number;
  @IsString()
  descricao: string;
  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  @ArrayMinSize(3)
  caracteristicas: CaracteristicaProdutoDTO[];
  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  @ArrayNotEmpty({ message: 'Insira uma imagem' })
  imagens: ImagemProdutoDTO[];
  @IsNotEmpty({ message: 'Categoria é obrigatório' })
  categoria: string;

  @IsString()
  dataCriacao: string;
  @IsString()
  dataAtualizacao: string;
}
