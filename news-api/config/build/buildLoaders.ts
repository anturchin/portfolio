import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { IBuildOptions } from './types/types';

export const buildLoaders = ({ mode }: IBuildOptions): ModuleOptions['rules'] => {
    const isDev = mode === 'development';
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const htmlLoader = {
        test: /\.html$/i,
        loader: 'html-loader',
    };
    return [scssLoader, tsLoader, htmlLoader];
};
