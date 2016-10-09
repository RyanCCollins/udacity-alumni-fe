import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Tags from 'grommet-udacity/components/Tags';
import Tag from 'grommet-udacity/components/Tag';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Menu from 'grommet-udacity/components/Menu';
import SocialShare from 'grommet-udacity/components/SocialShare';
import fakeData from './postTags';

const ArticleMeta = ({
  article,
}) => (
  <Article className={styles.panel}>
    <Section>
      <Heading tag="h2" align="center">
        Article Tags
      </Heading>
      <Box
        justify="center"
        align="center"
        pad={{ vertical: 'medium' }}
      >
        <Tags align="center" justify="center"> {/* NOTE: need to parse the real tags */}
          {fakeData.map((tag, i) =>
            <Tag key={i} label={tag} />
          )}
        </Tags>
      </Box>
    </Section>
    <Section>
      <Heading tag="h2" align="center">
        Share This Article
      </Heading>
      <Box align="center">
        <Menu inline direction="row" responsive>
          <SocialShare
            a11yTitle="Go to Twitter to Share this article"
            type="twitter"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
          <SocialShare
            a11yTitle="Go to Facebook to Share this article"
            type="facebook"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
          <SocialShare
            a11yTitle="Go to linkedin to Share this article"
            type="linkedin"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
          <SocialShare
            a11yTitle="Go to google to Share this article"
            type="google"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
        </Menu>
      </Box>
    </Section>
  </Article>
);

ArticleMeta.propTypes = {
  article: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default cssModules(ArticleMeta, styles);